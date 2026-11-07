import type { Accessor } from "solid-js";

export interface CreateTopProgressOptions {
  delay?: number;
  trickle?: boolean;
}

export interface TopProgressState {
  phase: "idle" | "pending" | "running" | "complete" | "leaving";
  value: number;
  determinate: boolean;
  error: boolean;
  pending: number;
}

export interface TopProgressController {
  state: Accessor<TopProgressState>;
  start: () => void;
  set: (value: number) => void;
  done: () => void;
  fail: () => void;
  reset: () => void;
  track: <T>(promise: Promise<T>) => Promise<T>;
}
