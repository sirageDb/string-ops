"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.containNumber = void 0;
const ErrorHandler_1 = __importDefault(require("../bin/ErrorHandler"));
function containNumber(stringToCheck, validatorProperty) {
    let finalResult = {
        objectiveResolved: false,
        validator: "containNumber"
    };
    //=======================================================================
    const inputIsBeingUsed = (stringToCheck) => {
        if (stringToCheck.length > 0)
            return true;
        if (stringToCheck.length === 0)
            return false;
    };
    let numberCounter = function (stringToCheck) {
        let numberOfNUmbersInString = 0;
        for (let character of stringToCheck) {
            let characterAsNumber = Number(character);
            if (characterAsNumber !== characterAsNumber || character === " ") {
            }
            else {
                numberOfNUmbersInString++;
            }
        }
        return numberOfNUmbersInString;
    };
    const error = new ErrorHandler_1.default();
    const validatorPropertyTypeChecker = (validatorProperty) => {
        if (typeof validatorProperty === "object") {
            if (Object.keys(validatorProperty).length !== 2) {
                error.validatorPropertyKeysNumberError("containNumber", 2);
            }
            if (!("minRepition" in validatorProperty || "maxRepition" in validatorProperty)) {
                error.validatorPropertyRequiredKeys("containNumber", "maxRepition", "minRepition");
            }
        }
        if (typeof validatorProperty !== "boolean" && typeof validatorProperty !== "object" && typeof validatorProperty !== "number") {
            error.validatorPropertyTypeError("containNumber", typeof validatorProperty);
        }
        return typeof validatorProperty;
    };
    const validatorPropertyType = validatorPropertyTypeChecker(validatorProperty);
    const numberOfNumbersinString = numberCounter(stringToCheck);
    //=======================================================================
    if (validatorPropertyType === "object" && inputIsBeingUsed(stringToCheck)) {
        let propertyMinRepition = typeof validatorProperty === "object" && validatorProperty.minRepition;
        let propertyMaxRepition = typeof validatorProperty === "object" && validatorProperty.maxRepition;
        if (numberOfNumbersinString === 0) {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
        if (propertyMinRepition === true && typeof (propertyMaxRepition) === "number") {
            numberCounter(stringToCheck);
            if (numberOfNumbersinString > propertyMaxRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        else if (typeof (propertyMinRepition) === "number" && propertyMaxRepition === true) {
            numberCounter(stringToCheck);
            if (numberOfNumbersinString < propertyMinRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        else if (typeof (propertyMinRepition) === "number" && typeof (propertyMaxRepition) === "number") {
            numberCounter(stringToCheck);
            if (numberOfNumbersinString < propertyMinRepition || numberOfNumbersinString > propertyMaxRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
    }
    else if (validatorPropertyType === "boolean" && inputIsBeingUsed(stringToCheck) === true) {
        if (validatorProperty === true) {
            numberCounter(stringToCheck);
            if (numberOfNumbersinString < stringToCheck.length) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        else if (validatorProperty === false) {
            numberCounter(stringToCheck);
            if (numberOfNumbersinString > 0) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
    }
    else if (validatorPropertyType === "number" && inputIsBeingUsed(stringToCheck) === true) {
        numberCounter(stringToCheck);
        if (numberOfNumbersinString !== validatorProperty) {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
        else {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
    }
}
exports.containNumber = containNumber;
