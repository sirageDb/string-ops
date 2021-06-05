"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const containCapitalLetters_1 = __importDefault(require("./validators/containCapitalLetters"));
const name = "sirage";
const name1 = "Sirage";
const status = containCapitalLetters_1.default(name1, 2);
console.log(status);
