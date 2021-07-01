import ErrorHandler from "../bin/ErrorHandler";
import stringNotNull from "../bin/stringNotNull";

export function minLength(stringToCheck: string, validatorOption: minLengthOptionType) {
    let finalResult = {
        objectiveResolved: false,
        validator: "minLength"
    }

    const validatorOptionTypeChecker = (validatorOption: any) => {
        const error = new ErrorHandler();
        if (typeof validatorOption !== "number") {
            error.validatorPropertyTypeError("minLength", "number")
        }
        return typeof validatorOption;
    }
    const validatorOptionType = validatorOptionTypeChecker(validatorOption);
    if (stringNotNull(stringToCheck) && validatorOptionType === "number") {
        const stringToCheckConverted = stringToCheck.toString();

        if (stringToCheckConverted.length < validatorOption) {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
        if (stringToCheckConverted.length >= validatorOption) {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
    }
}