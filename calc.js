const displayCurrentValue = document.getElementById("currentValue")
const displayResultValue = document.getElementById("resultValue")
const buttonsNumbers = document.querySelectorAll(".regular-numbers")
const buttonsOperators = document.querySelectorAll(".operators")



const maxLength = 10
const display = new Display(displayResultValue, displayCurrentValue, maxLength)

buttonsNumbers.forEach(button => {
    button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

buttonsOperators.forEach(button => {
    button.addEventListener("click", () => display.compute(button.value));
})