import { useLocation } from "@solidjs/router";
import { getLocaleFromPath } from "../lib/localized-path";
import { NotFoundPage } from "../pages/not-found-page";

export default function NotFoundRoute() {
  const location = useLocation();
  return <NotFoundPage locale={getLocaleFromPath(location.pathname)} />;
}
