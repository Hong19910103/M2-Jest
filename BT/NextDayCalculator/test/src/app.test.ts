import {NextDayCalculator} from "./app";

describe('Tinh so ngay', () =>{
    let calculator = new NextDayCalculator();
    test(' first day of month 1', () =>{
        expect(calculator.calculatorNextDay(1,1,2018)).toBe("2, 1, 2018")
    });

    test("last day of month 1",()=>{
        expect(calculator.calculatorNextDay(31,1,2018)).toBe("1, 2, 2018")
    });

    test("last day of month 4",()=>{
        expect(calculator.calculatorNextDay(30,4,2018)).toBe("1, 5, 2018")
    });

    test("last day of month 2-2018",()=>{
        expect(calculator.calculatorNextDay(28,2,2018)).toBe("1, 3, 2018")
    });

    test("last day of month 2-2020",()=>{
        expect(calculator.calculatorNextDay(29,2,2020)).toBe("1, 3, 2020")
    });

    test("last day of year ",()=>{
        expect(calculator.calculatorNextDay(31,12,2018)).toBe("1, 1, 2019")
    });

    test("last day of year 111 ",()=>{
        expect(calculator.calculatorNextDay(30,2,2018)).toBe("nhap sai du lieu")
    });
})