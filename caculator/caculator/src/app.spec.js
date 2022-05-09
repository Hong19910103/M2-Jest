"use strict";
exports.__esModule = true;
var app_1 = require("./app");
describe("add function", function () {
    test("add x and b equal sumary", function () {
        expect(app_1.Caculator.add(6, 8)).toBe(14);
    });
});
