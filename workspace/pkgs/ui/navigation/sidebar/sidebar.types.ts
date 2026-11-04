import type { JSX } from "solid-js";
import type { ResizableResizeEndDetails } from "../../layout/resizable/resizable";

export type SidebarRootProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "id" | "onResize"> & {
  id?: string;
  resizable?: boolean;
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
  compactWidth?: number;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  mobileOpen?: boolean;
  defaultMobileOpen?: boolean;
  onMobileOpenChange?: (open: boolean) => void;
  onResizeEnd?: (details: ResizableResizeEndDetails) => void;
};
