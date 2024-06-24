const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");
const input = document.getElementById("user-input");

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;


const isValid = (num) => regex.test(num);



checkButton.addEventListener("click",() => {
  if( input.value === ""){
    alert("Please provide a phone number");
    return;
  }
  resultDiv.textContent = isValid(input.value)
    ? `Valid US number: ${input.value}`
    : `Invalid US number: ${input.value}`;
});
clearButton.addEventListener("click",() => {
  input.value = "";
  resultDiv.textContent = "";
});
