import { mount, StartClient } from "@solidjs/start/client";

import "./styles.css";

const app = document.getElementById("app");

if (app) mount(() => <StartClient />, app);
