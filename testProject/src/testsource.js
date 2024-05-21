
export class TestClass {
    varOne
    varTwo
    multiply

    constructor(value) {
        this.multiply = value;
        this.varOne = 0
        this.varTwo = 0
    }

    calculate() {
        return this.varOne * this.varTwo;
    }

    add(x, y) {
        return x + y
    }

    subtract(x, y) {
        return x - y;
    }

    divide(x, y) {
        if (y === 0) {
            throw new Error("Cannot divide by zero");
        }
        return x / y;
    }

    safeDivide(x, y, defY = 0){
        if (y === 0) {
            y = defY;
        }
        return x / y;
    }
}