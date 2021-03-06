"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var randomGenerators_1 = require("./randomGenerators");
var numbers_1 = require("../resources/numbers");
var math_1 = require("../utils/math");
var others_1 = require("../resources/others");
function generateCpf(customNumber) {
    try {
        var randomArray = customNumber ? customNumber.substring(0, 9).split('') : randomGenerators_1.generateRandomArray(numbers_1.decimalNumbers, 9);
        var scalarProductArray = math_1.scalarProduct(randomArray, others_1.cpfPatternArrayOne);
        var scalarResult = scalarProductArray.reduce(function (all, current) { return all + current; }) % 11;
        var firstDigit = scalarResult < 2 ? 0 : 11 - scalarResult;
        var randomArrayTwo = __spreadArrays(randomArray, [firstDigit]);
        var scalarProductArrayTwo = math_1.scalarProduct(randomArrayTwo, others_1.cpfPatternArrayTwo);
        var scalarResultTwo = scalarProductArrayTwo.reduce(function (all, current) { return all + current; }) % 11;
        var secondDigit = scalarResultTwo < 2 ? 0 : 11 - scalarResultTwo;
        return __spreadArrays(randomArray, [firstDigit, secondDigit]).join('');
    }
    catch (err) {
        throw new Error('Error in generate cpf');
    }
}
exports.default = generateCpf;
//# sourceMappingURL=cpf.js.map