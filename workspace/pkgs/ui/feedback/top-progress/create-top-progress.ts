import { createSignal } from "solid-js";
import { isServer } from "solid-js/web";
import type {
  CreateTopProgressOptions,
  TopProgressController,
  TopProgressState,
} from "./top-progress.contract";

const initialState = (): TopProgressState => ({
  phase: "idle",
  value: 0,
  determinate: false,
  error: false,
  pending: 0,
});

class ProgressController implements TopProgressController {
  private signal = createSignal<TopProgressState>(initialState());
  state = this.signal[0];
  private update = this.signal[1];
  private timer: ReturnType<typeof setTimeout> | undefined;
  private generation = 0;
  private manual = false;
  private tasks = 0;

  constructor(private options: CreateTopProgressOptions) {}

  private clearTimer() {
    clearTimeout(this.timer);
    this.timer = undefined;
  }

  private patch(value: Partial<TopProgressState>) {
    this.update((state) => ({ ...state, ...value }));
  }

  private tick = () => {
    if (this.options.trickle === false || this.state().determinate) return;
    this.timer = setTimeout(() => {
      this.patch({ value: Math.min(94, this.state().value + (100 - this.state().value) * 0.06) });
      this.tick();
    }, 250);
  };

  private begin() {
    if (isServer) return;
    const phase = this.state().phase;
    if (phase === "running" || phase === "pending") return;
    this.clearTimer();
    this.update({ ...initialState(), phase: "pending", value: 8, pending: this.tasks });
    const configured = this.options.delay ?? 150;
    const delay = Number.isFinite(configured) ? Math.max(0, configured) : 150;
    this.timer = setTimeout(() => {
      this.patch({ phase: "running" });
      this.tick();
    }, delay);
  }

  private finish() {
    if (this.manual || this.tasks > 0 || isServer) return;
    if (!["pending", "running"].includes(this.state().phase)) return;
    this.clearTimer();
    if (this.state().phase === "pending") {
      this.update(initialState());
      return;
    }
    if (this.state().phase !== "running") return;
    this.patch({ phase: "complete", value: 100 });
    this.timer = setTimeout(() => {
      this.patch({ phase: "leaving" });
      this.timer = setTimeout(() => this.update(initialState()), 200);
    }, 300);
  }

  start = () => {
    if (isServer) return;
    this.manual = true;
    this.begin();
  };

  set = (value: number) => {
    if (!Number.isFinite(value) || isServer) return;
    this.start();
    if (this.state().phase === "running") this.clearTimer();
    this.patch({ value: Math.min(100, Math.max(0, value)), determinate: true });
  };

  done = () => {
    this.manual = false;
    this.finish();
  };

  fail = () => {
    if (this.state().phase === "idle") return;
    this.patch({ error: true });
    this.done();
  };

  reset = () => {
    this.generation += 1;
    this.manual = false;
    this.tasks = 0;
    this.clearTimer();
    this.update(initialState());
  };

  private settle(generation: number, failed: boolean) {
    if (generation !== this.generation) return;
    this.tasks -= 1;
    this.patch({ pending: this.tasks, error: this.state().error || failed });
    this.finish();
  }

  track = <T>(promise: Promise<T>): Promise<T> => {
    if (isServer) return promise;
    const generation = this.generation;
    this.tasks += 1;
    this.begin();
    this.patch({ pending: this.tasks });
    return promise.then(
      (value) => {
        this.settle(generation, false);
        return value;
      },
      (error: unknown) => {
        this.settle(generation, true);
        throw error;
      },
    );
  };
}

export function createTopProgress(options: CreateTopProgressOptions = {}): TopProgressController {
  return new ProgressController(options);
}
