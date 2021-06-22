"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function typeChecker(whatICheck, whatIWant) {
    if (typeof whatICheck !== whatIWant) {
        throw new Error('string-ops ERROR ::: got type ' + typeof whatICheck + ', expected ' + whatIWant);
    }
}
exports.default = typeChecker;
