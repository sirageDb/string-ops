"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const numberBiggerThan_1 = __importDefault(require("./validators/numberBiggerThan"));
//should contain 2 capitalLetters && 2 numbers
const randomNumber = " 21";
const v_numberBiggerThan = numberBiggerThan_1.default(randomNumber, 20);
console.log(v_numberBiggerThan);
// const resContainer = containerValidator([resContainNumber,resContaineCapitalLetters]);
