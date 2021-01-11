function celsius(temp) {
  return (temp - 32)/1.8;
}
function fahrenheit(temp) {
  return (9/5) * temp + 32;
}
const temp = parseFloat(prompt("Enter temperature to be converted:"))
const result = celsius(temp)
alert("That is " + result + " degrees")

/* 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = divide(number1, number2);
alert(result);   */