export function TriangleClassifier(a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "khong phai tam giac ";
    }
    if (a == b && a == c) {
        return "tam giac deu";
    }
    if (a == b || b == c || c == a) {
        return "tam giac can";
    }
    if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
        return "tam giac vuong";
    }
    if ((a + b) < c || (b + c) < a || (c + a) < b) {
        return "khong phai tam giac ";
    }

}