type TvalidatorProperties = true | false
export function isEmpty(stringToCheck: string, validatorProperty: TvalidatorProperties) {

    //========================================================
    let finalResult = {
        objectiveResolved: false,
        validator: "isEmpty"
    };
    //========================================================
    const validatorPropertyTypeChecker = (validatorProperties: any) => {
        if (typeof validatorProperties !== "boolean") {
            throw new Error("ERROR : isEmpty Validator property is not a boolean type");
        }
        return typeof (validatorProperties);
    }

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