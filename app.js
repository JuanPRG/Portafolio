import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");

inputs.forEach( input => {
    input.addEventListener("blur",(input) => {
        console.log(input.target)
        valida(input.target);
    });
})