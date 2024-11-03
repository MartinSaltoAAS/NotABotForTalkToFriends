"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const seyfert_1 = require("seyfert");
let options = {
    choose: (0, seyfert_1.createIntegerOption)({
        choices: [
            { name: "Rock", value: 1 },
            { name: "Paper", value: 2 },
            { name: "Scissors", value: 3 }
        ],
        description: "Chosse one of these options."
    })
};
let RPSCommand = class RPSCommand extends seyfert_1.Command {
    async run(context) {
        context.write({ content: "En progeso." });
    }
};
RPSCommand = __decorate([
    (0, seyfert_1.Declare)({
        name: "rps",
        description: "Rock paper scissors."
    }),
    (0, seyfert_1.Options)(options)
], RPSCommand);
exports.default = RPSCommand;
