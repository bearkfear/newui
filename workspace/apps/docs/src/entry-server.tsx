import { createHandler, StartServer } from "@solidjs/start/server";

import Document from "./Document";

export default createHandler(() => <StartServer document={Document} />);
