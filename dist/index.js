"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEmail_1 = __importDefault(require("./validators/isEmail"));
const email = "sirage.aldbiyat@gmail..com";
//conflict test
const status = isEmail_1.default(email);
console.log(status);
