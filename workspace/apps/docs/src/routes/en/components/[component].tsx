import { useParams } from "@solidjs/router";
import { ReferencePage } from "../../../pages/components/reference/reference-page";

export default function EnglishComponentRoute() {
  const params = useParams();
  return <ReferencePage locale="en" slug={params["component"] ?? ""} />;
}
