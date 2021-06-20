import ErrorHandler from "../bin/ErrorHandler"
import stringNotNull from "../bin/stringNotNull";

export default function numberBiggerThan(stringToCheck: string, validatorOption: number) {
    let finalResult = {
        objectiveResolved: false,
        validator: "numberBiggerThan"
    }

    const error = new ErrorHandler();
    let validatorOptionTypeChecker = (validatorOption: any) => {
        if (typeof validatorOption !== "number") {
            error.validatorPropertyTypeError("numberBiggerThan", "number");
        }
        return typeof validatorOption;
    }
    const validatorOptionType = validatorOptionTypeChecker(validatorOption);
    if (stringNotNull(stringToCheck) && validatorOptionType === "number") {

        let numbersOfNumbersInString = 0;
        for (const character of stringToCheck) {
            let characterAsNumber = Number(character);
            if (characterAsNumber !== characterAsNumber || character === " ") {
                // numbersOfNumbersInString = numbersOfNumbersInString;
            } else {
                numbersOfNumbersInString++;
            }
        }

        console.log(numbersOfNumbersInString);
        if (numbersOfNumbersInString !== stringToCheck.length) {
            error.custom("numberBiggerThan", "should get only numbers");
        }

        const stringToCheckConverted = Number(stringToCheck);
        if (stringToCheckConverted > validatorOption) {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
        else {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
    }
}