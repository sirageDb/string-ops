export function isUsed(stringToCheck: string, validatorOption: isEmptyOptionType) {

    //========================================================
    let finalResult = {
        objectiveResolved: false,
        validator: "isEmpty"
    };
    //========================================================
    const validatorPropertyTypeChecker = (validatorOption: any) => {
        if (typeof validatorOption !== "boolean") {
            throw new Error("ERROR : isEmpty Validator property is not a boolean type");
        }
        return typeof (validatorOption);
    }

    const validatorPropertyType = validatorPropertyTypeChecker(validatorOption);

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