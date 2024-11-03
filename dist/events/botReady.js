"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seyfert_1 = require("seyfert");
exports.default = (0, seyfert_1.createEvent)({
    data: { once: true, name: "botReady" },
    run(user, client) {
        client.logger.info(`${user.username} is ready!`);
    }
});
