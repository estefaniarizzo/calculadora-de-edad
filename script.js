document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const birthdateInput = document.getElementById("birthdate");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const birthdate = new Date(birthdateInput.value);
        const today = new Date();
        const age = today.getFullYear() - birthdate.getFullYear();

        resultElement.textContent = `Tu edad es: ${age} años`;
    });
});
