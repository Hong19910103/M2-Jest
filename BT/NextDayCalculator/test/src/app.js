"use strict";
exports.__esModule = true;
exports.NextDayCalculator = void 0;
var NextDayCalculator = /** @class */ (function () {
    function NextDayCalculator() {
    }
    NextDayCalculator.prototype.checkLeapYear = function (year) {
        var isLeapyear = false;
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    isLeapyear = true;
                }
            }
            else {
                isLeapyear = true;
            }
        }
        return isLeapyear;
    };
    NextDayCalculator.prototype.checkDayOfMonth = function (month, year) {
        var day = 0;
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                day = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                day = 30;
                break;
            case 2:
                if (this.checkLeapYear(year)) {
                    day = 29;
                    break;
                }
                else {
                    day = 28;
                }
                break;
        }
        return day;
    };
    NextDayCalculator.prototype.calculatorNextDay = function (day, month, year) {
        if (month === 12) {
            if (day < 31) {
                day++;
            }
            else {
                day = 1;
                month = 1;
                year++;
            }
        }
        else if (month == 2) {
            if (day <= 29) {
                day = 1;
                month = 3;
            }
            else {
                return "nhap sai du lieu";
            }
        }
        else {
            if (day === this.checkDayOfMonth(month, year)) {
                day = 1;
                month++;
            }
            else
                day++;
        }
        return "".concat(day, ", ").concat(month, ", ").concat(year);
    };
    return NextDayCalculator;
}());
exports.NextDayCalculator = NextDayCalculator;
