import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { loadLocale } from "./i18n/i18n-util.sync";
import { DocsLayout } from "./layout/docs-layout";

loadLocale("pt-BR");
loadLocale("en");

export default function App() {
  return (
    <Router root={DocsLayout}>
      <FileRoutes />
    </Router>
  );
}
