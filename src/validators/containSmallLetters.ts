import ErrorHandler from "../bin/ErrorHandler";
import stringNotNull from "../bin/stringNotNull";

export default function containSmallLetters(
    stringToCheck: string,
    validatorOption: containSmallLettersOptionType
) {
    let finalResult = {
        objectiveResolved: false,
        validator: "containSmallLetters",
    };

    //======================================================================
    let smallLettersCounter = function (stringToCheck: string) {
        let numberOfSmallLetters = 0
        for (let i = 0; i < stringToCheck.length; i++) {
            if (
                stringToCheck[i] === stringToCheck[i].toLowerCase() &&
                stringToCheck[i] !== stringToCheck[i].toUpperCase()
            ) {
                numberOfSmallLetters++;
            }
        }
        return numberOfSmallLetters;
    };

    const error = new ErrorHandler();
    const validatorOptionTypeChecker = (validatorOption: any) => {
        if (typeof validatorOption === "object") {
            if (Object.keys(validatorOption).length !== 2) {
                error.validatorPropertyKeysNumberError("containSmallLetters", 2);
            }
            if (!("minRepition" in validatorOption || "maxRepition" in validatorOption)) {
                error.validatorPropertyRequiredKeys("containSmallLetters", "maxRepition", "minRepition");
            }
        }
        if (typeof validatorOption !== "boolean" && typeof validatorOption !== "object" && typeof validatorOption !== "number") {
            error.validatorPropertyTypeError("containSmallLetters", typeof validatorOption);
        }
        return typeof validatorOption;
    }

    const validatorOptionType = validatorOptionTypeChecker(validatorOption);
    const numberOfSmallLetters = smallLettersCounter(stringToCheck);
    //======================================================================

    if (validatorOptionType === "boolean") {
        if (validatorOption === true) {
            let regex = /[A-Z]/;
            if (regex.test(stringToCheck)) {
                finalResult.objectiveResolved = false;
                return finalResult;
            } else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }

        if (validatorOption === false) {
            let regex = /[a-z]/;
            if (regex.test(stringToCheck)) {
                finalResult.objectiveResolved = false;
                return finalResult;
            } else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
    } else if (
        validatorOptionType === "number" && stringNotNull(stringToCheck)
    ) {
        smallLettersCounter(stringToCheck);
        if (validatorOption !== numberOfSmallLetters) {
            finalResult.objectiveResolved = false;
            return finalResult;
        } else {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
    } else if (
        validatorOptionType === "object" &&
        stringNotNull(stringToCheck)
    ) {
        const minRepition = typeof validatorOption === "object" && validatorOption.minRepition;
        const maxRepition = typeof validatorOption === "object" && validatorOption.maxRepition;

        if (minRepition === true && typeof maxRepition === "number") {
            smallLettersCounter(stringToCheck);
            if (numberOfSmallLetters === 0 || numberOfSmallLetters > maxRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            } else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        } else if (typeof minRepition === "number" && maxRepition === true) {
            smallLettersCounter(stringToCheck);
            if (
                numberOfSmallLetters === 0 || numberOfSmallLetters < minRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            } else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        } else if (typeof minRepition === "number" && typeof maxRepition === "number") {
            smallLettersCounter(stringToCheck);
            if (numberOfSmallLetters < minRepition || numberOfSmallLetters > maxRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            } else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
    }
}
