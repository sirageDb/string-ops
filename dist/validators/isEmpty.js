"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
function isEmpty(stringToCheck, validatorProperty) {
    //========================================================
    let finalResult = {
        objectiveResolved: false,
        validator: "isEmpty"
    };
    //========================================================
    const validatorPropertyTypeChecker = (validatorProperties) => {
        if (typeof validatorProperties !== "boolean") {
            throw new Error("ERROR : isEmpty Validator property is not a boolean type");
        }
        return typeof (validatorProperties);
    };
    const validatorPropertyType = validatorPropertyTypeChecker(validatorProperty);
    if (validatorPropertyType === "boolean") {
        let regex = /^\s+/;
        if (regex.test(String(stringToCheck)) || stringToCheck.length === 0) {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
        if (typeof (stringToCheck) === "undefined") {
            throw new Error("string to check has a type of undefined");
        }
        if (!regex.test(String(stringToCheck)) && stringToCheck.length > 0) {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
    }
}
exports.isEmpty = isEmpty;
