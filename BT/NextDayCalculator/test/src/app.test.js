"use strict";
exports.__esModule = true;
var app_1 = require("./app");
describe('Tinh so ngay', function () {
    var calculator = new app_1.NextDayCalculator();
    test(' first day of month 1', function () {
        expect(calculator.calculatorNextDay(1, 1, 2018)).toBe("2, 1, 2018");
    });
    test("last day of month 1", function () {
        expect(calculator.calculatorNextDay(31, 1, 2018)).toBe("1, 2, 2018");
    });
    test("last day of month 4", function () {
        expect(calculator.calculatorNextDay(30, 4, 2018)).toBe("1, 5, 2018");
    });
    test("last day of month 2-2018", function () {
        expect(calculator.calculatorNextDay(28, 2, 2018)).toBe("1, 3, 2018");
    });
    test("last day of month 2-2020", function () {
        expect(calculator.calculatorNextDay(29, 2, 2020)).toBe("1, 3, 2020");
    });
    test("last day of year ", function () {
        expect(calculator.calculatorNextDay(31, 12, 2018)).toBe("1, 1, 2019");
    });
    test("last day of year 111 ", function () {
        expect(calculator.calculatorNextDay(30, 2, 2018)).toBe("nhap sai du lieu");
    });
});
