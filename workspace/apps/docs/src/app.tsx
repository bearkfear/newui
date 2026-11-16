import { SolidBaseRoot } from "@kobalte/solidbase/client";
import { Route, Router, type RouteSectionProps } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";

export default function App() {
  return (
    <Router>
      <Route
        path="/*all"
        component={(props: RouteSectionProps) => <SolidBaseRoot>{props.children}</SolidBaseRoot>}
      >
        <FileRoutes />
      </Route>
    </Router>
  );
}
