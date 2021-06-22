"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler_1 = __importDefault(require("../bin/ErrorHandler"));
const stringNotNull_1 = __importDefault(require("../bin/stringNotNull"));
function containSpecialCharacters(stringToCheck, validatorOption) {
    let finalResult = {
        objectiveResolved: false,
        validator: "containSpecialCharacters"
    };
    //===================================================================
    let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    const specialCharacterCount = (string) => {
        return (string.match(regex) || []).length;
    };
    let numberOfSpecialCharacters = specialCharacterCount(stringToCheck);
    //===================================================================
    const validatorOptionTypeChecker = (validatorOption) => {
        const error = new ErrorHandler_1.default();
        if (typeof validatorOption === "object") {
            if (Object.keys(validatorOption).length !== 2) {
                error.validatorPropertyKeysNumberError("containNumber", 2);
            }
            if (!("minRepition" in validatorOption || "maxRepition" in validatorOption)) {
                error.validatorPropertyRequiredKeys("containNumber", "maxRepition", "minRepition");
            }
        }
        if (typeof validatorOption !== "boolean" && typeof validatorOption !== "object" && typeof validatorOption !== "number") {
            error.validatorPropertyTypeError("containNumber", typeof validatorOption);
        }
        return typeof validatorOption;
    };
    const validatorOptionType = validatorOptionTypeChecker(validatorOption);
    if (validatorOptionType === "boolean" && stringNotNull_1.default(stringToCheck)) {
        if (validatorOption === true) {
            if (stringToCheck.length > numberOfSpecialCharacters) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        else if (validatorOption === false) {
            if (regex.test(stringToCheck)) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
    }
    if (validatorOptionType === "number" && stringNotNull_1.default(stringToCheck)) {
        if (numberOfSpecialCharacters !== validatorOption) {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
        else {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
    }
    if (validatorOptionType === "object" && stringNotNull_1.default(stringToCheck)) {
        const propertyValueMinimum = typeof validatorOption === "object" && validatorOption.minRepition;
        const propertyValueMaximum = typeof validatorOption === "object" && validatorOption.maxRepition;
        if (typeof (propertyValueMinimum) === "number"
            && propertyValueMaximum === true) {
            if (numberOfSpecialCharacters < propertyValueMinimum) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        else if (propertyValueMinimum === true
            && typeof (propertyValueMaximum) === "number") {
            if (numberOfSpecialCharacters > propertyValueMaximum) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        else if (typeof (propertyValueMinimum) === "number" && typeof (propertyValueMaximum) === "number") {
            if (numberOfSpecialCharacters < propertyValueMinimum
                || numberOfSpecialCharacters > propertyValueMaximum) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
    }
}
exports.default = containSpecialCharacters;
