import { docs as choiceDocs } from "./forms/choice-docs";
import { docs as textDocs } from "./forms/text-docs";
import { docs as valueDocs } from "./forms/value-docs";

export const docs = { ...choiceDocs, ...textDocs, ...valueDocs };
