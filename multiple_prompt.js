/* practice question : enter a number using prompt and check if 
the number is a multiple of 5 or not.*/

let num = prompt("enter a number:");

if(num % 5 == 0){
    console.log(num, "is multiple of 5");
}else{
    console.log(num, "is NOT multiple of 5");
}