//check if input is not empty
//check if it has capital letters
//TODO answer here https://stackoverflow.com/questions/1013239/can-i-get-the-name-of-the-currently-running-function-in-javascript

type validatorParameterType =
  | boolean
  | { minRepition: number; maxRepition: number }
  | { minRepition: number; maxRepition: true }
  | { minRepition: true; maxRepition: number }
  | number;

function containCapitalLetters(
  stringToCheck: string,
  parameter: validatorParameterType
) {
  //========================================================
  let finalResult = {
    objectiveResolved: false,
    validator: "containCapitalLetters"
  };
  //========================================================

  //TODO check if not string
  const parameterTypeChecker = (parameter: validatorParameterType) => {
    if (typeof parameter !== "boolean" && typeof parameter === "object") {
      if (Object.keys(parameter).length !== 2) {
        throw new Error("Validator condition should have 2 keys");
      }
      if (!("minRepition" in parameter || "maxRepition" in parameter)) {
        throw new Error("Validator condition should have both minRepition and maxRepition parameter");
      }
    }
    if (typeof parameter !== "boolean" && typeof parameter !== "object" && typeof parameter !== "number") {
      throw new Error("Validator condition can take only nubmer or boolean or an object as validator condition");
    }
    return typeof parameter;
  };

  const parameterType = parameterTypeChecker(parameter);

  //TODO check what happens here
  //return true if input is being used / return false if not
  //========================================================
  const inputIsBeingUsed = (stringToCheck: string) => {
    if (stringToCheck.length > 0)
      return true;
    if (stringToCheck.length === 0)
      return false;
  };
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
  if (parameterType === "boolean" && inputIsBeingUsed(stringToCheck)) {
    if (parameter === true) {
      let regex = /[a-z]/;
      regex.test(stringToCheck) && (finalResult.objectiveResolved = false);
      finalResult.objectiveResolved = true;
      return finalResult;
    }

    if (parameter === false) {
      let regex = /[A-Z]/;
      regex.test(stringToCheck) && (finalResult.objectiveResolved = true);
      finalResult.objectiveResolved = false;
      return finalResult;
    }
  }
  //========================================================
  if (parameterType === "number" && inputIsBeingUsed(stringToCheck)) {

    capitalLettersCounter(stringToCheck);
    if (parameter === numberOfCapitalLetters) {
      finalResult.objectiveResolved = true;
      return finalResult;
    }
    if (parameter !== numberOfCapitalLetters) {
      finalResult.objectiveResolved = false;
      return finalResult;
    }
  }
  //========================================================

  if (parameterType === "object" && inputIsBeingUsed(stringToCheck)) {

    const propertyValueMinimum = typeof parameter === "object" && parameter.minRepition;
    const propertyValueMaximum = typeof parameter === "object" && parameter.maxRepition;
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

export default containCapitalLetters;
