import type { Accessor } from "solid-js";

/** Delay and automatic visual advancement for a page progress controller. */
export interface CreateTopProgressOptions {
  /** Wait before displaying the bar; quick work stays hidden. Defaults to 150ms. */
  delay?: number;
  /** Disable estimated automatic advancement for work without a known percentage. Defaults to true. */
  trickle?: boolean;
}

/** Reactive display state; `value` is estimated unless `determinate` is true. */
export interface TopProgressState {
  phase: "idle" | "pending" | "running" | "complete" | "leaving";
  value: number;
  determinate: boolean;
  error: boolean;
  pending: number;
}

/** Shared controller used by producers of page work and the TopProgress renderer. */
export interface TopProgressController {
  state: Accessor<TopProgressState>;
  start: () => void;
  set: (value: number) => void;
  done: () => void;
  fail: () => void;
  reset: () => void;
  track: <T>(promise: Promise<T>) => Promise<T>;
}
