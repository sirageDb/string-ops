"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const containSmallLetters_1 = __importDefault(require("./validators/containSmallLetters"));
//should contain 2 capitalLetters && 2 numbers
const randomString = "sirAage";
// const v_numberBiggerThan = numberBiggerThan(randomNumber, 20);
// const v_numberSmallerThan = numberSmallerThan(randomNumber, 20);
// const v_specialChars = containSpecialCharacters(randomNumber, true);
const v_containSmallLetter = containSmallLetters_1.default(randomString, true);
console.log(v_containSmallLetter);
//TODO try containNumber with 0 numbers 
// const resContainer = containerValidator([resContainNumber,resContaineCapitalLetters]);
