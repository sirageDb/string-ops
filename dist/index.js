"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const maxLength_1 = __importDefault(require("./validators/maxLength"));
//should contain 2 capitalLetters && 2 numbers
const password = "AA00qscqsc";
const v_maxLength = maxLength_1.default(password, 20);
console.log(v_maxLength);
// const resContainer = containerValidator([resContainNumber,resContaineCapitalLetters]);
