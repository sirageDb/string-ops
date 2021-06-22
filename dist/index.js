"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const containSpecialCharacters_1 = __importDefault(require("./validators/containSpecialCharacters"));
//should contain 2 capitalLetters && 2 numbers
const randomNumber = "194";
// const v_numberBiggerThan = numberBiggerThan(randomNumber, 20);
// const v_numberSmallerThan = numberSmallerThan(randomNumber, 20);
const v_specialChars = containSpecialCharacters_1.default(randomNumber, false);
console.log(v_specialChars);
// const resContainer = containerValidator([resContainNumber,resContaineCapitalLetters]);
