import { useParams } from "@solidjs/router";
import { ReferencePage } from "../../pages/components/reference/reference-page";

export default function ComponentRoute() {
  const params = useParams();
  return <ReferencePage locale="pt-BR" slug={params["component"] ?? ""} />;
}
