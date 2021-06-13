import stringNotNull from "../bin/stringNotNull";

export default function isEmail(stringToCheck: string) {
    //========================================================
    let finalResult = {
        objectiveResolved: false,
        validator: "isEmail"
    };
    //========================================================
    if (stringNotNull(stringToCheck)) {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(String(stringToCheck).toLowerCase())) {
            finalResult.objectiveResolved = true;
            return finalResult;
        } else {
            return finalResult;
        }
    }
}