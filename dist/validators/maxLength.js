"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler_1 = __importDefault(require("../bin/ErrorHandler"));
const stringNotNull_1 = __importDefault(require("../bin/stringNotNull"));
function maxLength(stringToCheck, validatorOption) {
    let finalResult = {
        objectiveResolved: false,
        validator: "maxLength"
    };
    const validatorOptionTypeChecker = (validatorOption) => {
        const error = new ErrorHandler_1.default();
        if (typeof validatorOption !== "number") {
            error.validatorPropertyTypeError("maxLength", "number");
        }
        return typeof validatorOption;
    };
    const validatorOptionType = validatorOptionTypeChecker(validatorOption);
    if (stringNotNull_1.default(stringToCheck) && validatorOptionType === "number") {
        const stringToCheckConverted = stringToCheck.toString();
        if (stringToCheckConverted.length > validatorOption) {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
        if (stringToCheckConverted.length <= validatorOption) {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
    }
}
exports.default = maxLength;
