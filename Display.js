class Calculator {
    add(num1, num2) {
        return num1 + num2
    }
    subtract(num1, num2) {
        return num1 - num2
    }
    split(num1, num2) {
        return num1 / num2
    }
    multiply(num1, num2) {
        return num1 * num2
    }
    percentage(num1, num2) {
        return (num1 / 100) * num2
    }
}

class Display {
    constructor(displayResultValue, displayCurrentValue) {
        this.displayResultValue = displayResultValue
        this.displayCurrentValue = displayCurrentValue
        this.calculator = new Calculator();
        this.typeOfOperation = undefined;
        this.resultValue = "";
        this.currentValue = "";
        this.maxLength = maxLength
        this.signs = {
            add: "+",
            subtract: "-",
            split: "/",
            multiply: "*",
            percentage: "%",
        }

        this.addNumber = this.addNumber.bind(this);
    }

    toggleSign() {
        if (this.currentValue !== "") {
        this.currentValue = (parseFloat(this.currentValue) * -1).toString();
        this.printValue();
        }
    }

    delete() {
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValue();
    }

    deleteAll() {
        this.currentValue = "";
        this.resultValue = "";
        this.typeOfOperation = undefined;
        this.printValue();
    }

    addNumber(number) {
        if(this.currentValue.length >= this.maxLength) return;
        if(number==="." && this.currentValue.includes(".")) return;

        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValue();
    }

    printValue() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayResultValue.textContent = `${this.resultValue} ${this.signs[this.typeOfOperation] || ""}`;
    }

    calculate() {
        const resultValue = parseFloat(this.resultValue); //PASAR VALOR RESULTADO A NUMERO
        const currentValue = parseFloat(this.currentValue); //PASAR VALOR ACTUAL A NUMERO

        if(isNaN(currentValue) || isNaN(resultValue)) return; //SI NO ES UN NUMERO NO HACE NADA
        //SI ES NUMERO
        this.currentValue = this.calculator[this.typeOfOperation](resultValue, currentValue).toString();//BUSCAR OPERACION DESEADA
    }

    compute(type) {
        this.typeOfOperation !== "equal" && this.calculate();
        this.typeOfOperation = type;
        this.resultValue = this.currentValue || this.resultValue;
        this.currentValue = "";
        this.printValue();
    }

}