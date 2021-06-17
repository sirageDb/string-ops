"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const containCapitalLetters_1 = __importDefault(require("./validators/containCapitalLetters"));
const containNumber_1 = __importDefault(require("./validators/containNumber"));
//should contain 2 capitalLetters && 2 numbers
const password = "AA00qscqsc";
const resContaineCapitalLetters = containCapitalLetters_1.default(password, 2);
const resContainNumber = containNumber_1.default(password, 2);
console.log(resContaineCapitalLetters);
console.log(resContainNumber);
// const resContainer = containerValidator([resContainNumber,resContaineCapitalLetters]);
console.log(status);
