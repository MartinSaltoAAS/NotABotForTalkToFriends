"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function idGen(length) {
    let result = '';
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLenght = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLenght));
        counter += 1;
    }
    return result;
}
exports.default = idGen;
