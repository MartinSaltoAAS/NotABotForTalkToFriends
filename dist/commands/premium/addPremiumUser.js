"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addJoinUserCommand = void 0;
const seyfert_1 = require("seyfert");
const types_1 = require("seyfert/lib/types");
let addJoinUserCommand = class addJoinUserCommand extends seyfert_1.SubCommand {
    async run(context) {
        if (context.author.id != "709770108863643649")
            return context.write({ content: "You cannot use this command!", flags: types_1.MessageFlags.Ephemeral });
    }
};
exports.addJoinUserCommand = addJoinUserCommand;
exports.addJoinUserCommand = addJoinUserCommand = __decorate([
    (0, seyfert_1.Declare)({
        name: "add",
        description: "Only for owner!"
    })
], addJoinUserCommand);
