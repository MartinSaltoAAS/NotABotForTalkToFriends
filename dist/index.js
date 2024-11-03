"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seyfert_1 = require("seyfert");
const client = new seyfert_1.Client();
// This will start the connection with the gateway and load commands, events, components and langs
client.start().then(() => client.uploadCommands());
