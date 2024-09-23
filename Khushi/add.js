 
 function addNumbers() {

    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);


    let sum = num1 + num2;

    // Display the result
    document.getElementById('result').textContent = "The sum is: " + sum;
}