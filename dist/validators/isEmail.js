"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stringNotNull_1 = __importDefault(require("../bin/stringNotNull"));
function isEmail(stringToCheck) {
    //========================================================
    let finalResult = {
        objectiveResolved: false,
        validator: "isEmail"
    };
    //========================================================
    if (stringNotNull_1.default(stringToCheck)) {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(String(stringToCheck).toLowerCase())) {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
        else {
            return finalResult;
        }
    }
}
exports.default = isEmail;
