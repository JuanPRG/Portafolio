//Haz tú validación en javascript acá

const inputs = document.querySelectorAll("input");

inputs.forEach( input => {
    input.addEventListener("blur",(input) => {
        valida(input.target);
    });
})

function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    // if (validadores[tipoDeInput]) {
    //     validadores[tipoDeInput](input)
    // }

    console.log(input.dataset.tipo)
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
        console.log(input)
        console.log(tipoDeInput)
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "Debe contener máximo 50 caracteres"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio",
        patternMismatch: "Debe contener máximo 50 caracteres"
    },
    password: {
        valueMissing: "El campo contrasena no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "El campo fecha no puede estar vacio",
        customError: "Debes tener al menos 18 anos de edad"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es XXXXXXXXX 10 numeros"
    },

    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 a 40 caracteres"
    },

    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres"
    },

    estado: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres"
    },

    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio",
        patternMismatch: "Debe contener máximo 300 caracteres"
    },
    
}

// const validadores = {
//     nacimiento: input => validarNacimiento(input)
// };

function mostrarMensajeDeError(tipoDeInput,input) {
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            console.log(tipoDeInput, error)
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error])
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}


// function validarNacimiento(input) {
//     const fechaCliente = new Date(input.value)
//     let mensaje = "";
//     if (!mayorDeEdad(fechaCliente)) {
//         mensaje = "Debes tener al menos 18 anos de edad";
//     };

//     input.setCustomValidity(mensaje);
// }

// function mayorDeEdad(fecha) {
//     const fechaActual = new Date();
//     const diferenciaFechas = new Date(
//     fecha.getUTCFullYear() + 18, 
//     fecha.getUTCMonth(), 
//     fecha.getUTCDate()
//     );

//     return diferenciaFechas <= fechaActual;

// }

const textarea = document.querySelectorAll("textarea");

textarea.forEach( input => {
    input.addEventListener("blur",(input) => {
        validaTextarea(input.target);
        console.log(input.target);
    });
})

function validaTextarea(input) {
    const tipoDeInputText = input.dataset.tipo;
    // if (validadores[tipoDeInput]) {
    //     validadores[tipoDeInput](input)
    // }

    console.log(input.dataset.tipo)
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
        console.log(input.value.length);
        if(input.value.length > 300) {
            input.parentElement.classList.add("input-container--invalid");
            input.parentElement.querySelector(".input-message-error").innerHTML = "Debe contener máximo 300 caracteres";
        }
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInputText,input);
        console.log(input.value);
        console.log(tipoDeInputText)
    }
}
