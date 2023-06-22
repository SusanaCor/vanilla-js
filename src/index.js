// Inserte el código aqu
import { calculad } from "./calculadora.js";



function calcular(operacion, num, num2) {

    if (operacion == "sumar") {
        console.log(calculad.sumar(num,num2))
} else{
    if(operacion == "resta")
    console.log(calculad.resta(num,num2)) 
}
if (operacion == "multi") {
    console.log(calculad.multi(num,num2))
} else{
if(operacion == "divi")
console.log(calculad.divi(num,num2)) 
}
 
}

calcular("sumar", 6, 3);
calcular("resta", 6, 5);
calcular("multi", 6, 3);
calcular("divi", 6, 5);


