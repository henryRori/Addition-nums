// let numberInput = document.getElementById("enternum").value;
// let Btn = document.getElementById("btn-calc");
// let result = document.getElementById('output');
// btn.addEventListener('click', () => {
//     numberInput = document.getElementById("enternum").value;
//     result = document.getElementById('output');
//     if (numberInput <= 35) {
//         result.innerHTML = "Grade" + " " + "F";
//     }
//     else if (numberInput <= 40) {
//         result.innerHTML = "Grade" + " " + "E";
//     }
//     else if (numberInput <= 50) {
//         result.innerHTML = "Grade" + " " + "D";
//     }
//     else if (numberInput <= 60) {
//         result.innerHTML = "Grade" + " " + "C";
//     }
//     else if (numberInput <= 70) {
//         result.innerHTML = "Grade" + " " + "B";
//     }
//     else {
//         result.innerHTML = "Grade" + " " + "A";
//     }
// });
// convertNumber();

var inputOne = document.getElementById("#inputone");
var inputTwo = document.getElementById("#inputtwo");
var add = document.querySelector("#submit");
submit.addEventListener("click",function(){
 var add = inputOne.value + inputTwo.value
console.log(add)
});