//TODO answer here https://stackoverflow.com/questions/1013239/can-i-get-the-name-of-the-currently-running-function-in-javascript

import stringNotNull from "../bin/stringNotNull";
import ErrorHandler from "../bin/ErrorHandler";

export function containCapitalLetters(stringToCheck: string, validatorOption: containCapitalLettersOptionType) {
  //========================================================
  let finalResult = {
    objectiveResolved: false,
    validator: "containCapitalLetters"
  };
  //========================================================

  //TODO check if not string
  const validatorOptionTypeChecker = (validatorOption: any) => {
    const error = new ErrorHandler();

    if (typeof validatorOption !== "boolean" && typeof validatorOption === "object") {
      if (Object.keys(validatorOption).length !== 2) {
        error.validatorPropertyKeysNumberError("containCapitalLetters", 2)
      }
      if (!("minRepition" in validatorOption || "maxRepition" in validatorOption)) {
        error.validatorPropertyRequiredKeys("containCapitalLetters", "minRepition", "maxRepition");
      }
    }
    if (typeof validatorOption !== "boolean" && typeof validatorOption !== "object" && typeof validatorOption !== "number") {
      error.validatorPropertyTypeError("containCapitalLetters", "boolean or object or number");
    }
    return typeof validatorOption;
  };

  const validatorOptionType = validatorOptionTypeChecker(validatorOption);

  //========================================================
  let numberOfCapitalLetters = 0;
  const capitalLettersCounter = (stringToCheck: string) => {
    for (let i = 0; i < stringToCheck.length; i++) {
      if (
        stringToCheck[i] === stringToCheck[i].toUpperCase() &&
        stringToCheck[i] !== stringToCheck[i].toLowerCase()
      ) {
        numberOfCapitalLetters++;
      }
    }
  };
  //========================================================

  //if it's true
  if (validatorOptionType === "boolean" && stringNotNull(stringToCheck)) {
    if (validatorOption === true) {
      let regex = /[a-z]/;
      regex.test(stringToCheck) && (finalResult.objectiveResolved = false);
      finalResult.objectiveResolved = true;
      return finalResult;
    }

    if (validatorOption === false) {
      let regex = /[A-Z]/;
      regex.test(stringToCheck) && (finalResult.objectiveResolved = true);
      finalResult.objectiveResolved = false;
      return finalResult;
    }
  }
  //========================================================
  if (validatorOptionType === "number" && stringNotNull(stringToCheck)) {

    capitalLettersCounter(stringToCheck);
    if (validatorOption === numberOfCapitalLetters) {
      finalResult.objectiveResolved = true;
      return finalResult;
    }
    if (validatorOption !== numberOfCapitalLetters) {
      finalResult.objectiveResolved = false;
      return finalResult;
    }
  }
  //========================================================

  if (validatorOptionType === "object" && stringNotNull(stringToCheck)) {

    const propertyValueMinimum = typeof validatorOption === "object" && validatorOption.minRepition;
    const propertyValueMaximum = typeof validatorOption === "object" && validatorOption.maxRepition;
    const typeofPropertyValueMinimum = typeof propertyValueMinimum;
    const typeofPropertyValueMaximum = typeof propertyValueMaximum;

    if (propertyValueMinimum === true && typeofPropertyValueMaximum === 'number') {
      capitalLettersCounter(stringToCheck);
      if (numberOfCapitalLetters === 0 || numberOfCapitalLetters > propertyValueMaximum) {
        finalResult.objectiveResolved = false;
        return finalResult;
      } else {
        finalResult.objectiveResolved = true;
        return finalResult;
      }
    }
    if (typeofPropertyValueMinimum === 'number' && propertyValueMaximum === true) {
      capitalLettersCounter(stringToCheck);
      if (numberOfCapitalLetters === 0 || numberOfCapitalLetters < propertyValueMinimum) {
        finalResult.objectiveResolved = false;
        return finalResult;
      } else {
        finalResult.objectiveResolved = true;
        return finalResult;
      }
    }
    if (typeofPropertyValueMinimum === 'number' && typeofPropertyValueMaximum === 'number') {
      capitalLettersCounter(stringToCheck);
      if (numberOfCapitalLetters < propertyValueMinimum || numberOfCapitalLetters > propertyValueMaximum) {
        finalResult.objectiveResolved = false;
        return finalResult;
      } else {
        finalResult.objectiveResolved = false;
        return finalResult;
      }
    }
  }
}
