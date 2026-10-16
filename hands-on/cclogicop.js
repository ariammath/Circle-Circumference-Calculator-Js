
const PI = 3.14

let radius;
document.getElementById("sub").onclick = function(){
    radius = Number(document.getElementById("radius").value); 

    circumference = 2 * radius * PI

    document.getElementById("result").textContent = `The result is: ${circumference}`};