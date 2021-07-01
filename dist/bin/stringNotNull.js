"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringNotNull(stringToCheck) {
    if (stringToCheck.length > 0) {
        return true;
    }
    if (stringToCheck.length === 0) {
        return false;
    }
}
exports.default = stringNotNull;
