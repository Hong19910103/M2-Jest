"use strict";
exports.__esModule = true;
var app_1 = require("./app");
describe("tam giac", function () {
    test("tam giac deu", function () {
        var a = 2;
        var b = 2;
        var c = 2;
        expect((0, app_1.TriangleClassifier)(a, b, c)).toBe("tam giac deu");
    });
    test("tam giac can", function () {
        var a = 2;
        var b = 2;
        var c = 3;
        expect((0, app_1.TriangleClassifier)(a, b, c)).toBe("tam giac can");
    });
    test("tam giac vuong", function () {
        var a = 3;
        var b = 4;
        var c = 5;
        expect((0, app_1.TriangleClassifier)(a, b, c)).toBe("tam giac vuong");
    });
    test("khong phai tam giac", function () {
        var a = 8;
        var b = 2;
        var c = 3;
        expect((0, app_1.TriangleClassifier)(a, b, c)).toBe("khong phai tam giac ");
    });
    test("khong phai tam giac", function () {
        var a = -1;
        var b = 2;
        var c = 1;
        expect((0, app_1.TriangleClassifier)(a, b, c)).toBe("khong phai tam giac ");
    });
    test("khong phai tam giac", function () {
        var a = 0;
        var b = 1;
        var c = 1;
        expect((0, app_1.TriangleClassifier)(a, b, c)).toBe("khong phai tam giac ");
    });
});
