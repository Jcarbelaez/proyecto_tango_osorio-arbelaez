if (solicitudVeterinario == true) {
    alert("Tu solicitud será verificada.");

    let seleccioneUnProfesional = parseInt(prompt("Seleccione un profesional 1,2 o 3"));

    switch (seleccioneUnProfesional) {
        case 1:
            alert (`${profesional1.informacionProfesional()}`);
            break;
        case 2:
            alert (`${profesional2.informacionProfesional()}`);
            break;
        case 3:
            alert (`${profesional3.informacionProfesional()}`);
            break;
        default:
            alert("El valor ingresado no es válido.");

    };

} else if (solicitudVeterinario === "") {
    solicitudVeterinario = prompt("Ingresa un valor correcto.");
}
while (!solicitudVeterinario) {
    alert("Ok. Hasta una próxima vez.");
    break;
};


//Funcion botón "¡Quiero adoptar!"
const botonTrigger = () => {
    inputButton.addEventListener("click", () => {
        // debugger
        inputButton.value = "    ¡Genial!    ";
        let confirmacionBusqueda = confirm("¿Desea iniciar el proceso de adopción?");
        if (confirmacionBusqueda == true) {
            let ingreseTamaño = prompt("Ingrese busqueda por tamaño de la mascota pequeño, mediano o grande");
            let tamaño = ingreseTamaño.toLowerCase();
            let filtroBusquedaMascota = mascotasEnAdopcion.filter(resultado => resultado.tamaño == tamaño);
            console.table(filtroBusquedaMascota);
        } else {
            alert("Ok. Hasta una próxima vez.");
        };
    })
};

botonTrigger();



// CODE WARS


// const greet = () => {
//   const hello = ['h','e','l','l','o'];
//   const world = ['w','o','r','l','d','!'];

//   const prueba = hello.join ("");
//   const prueba2 = world.join ("");
//   const concatenar = `${prueba} ${prueba2}`



//   return concatenar
// }

// console.log(greet())


// const points = [100, 40, 34, 57, 29, 72, 57, 88];
// let sum = 0

// for (let i = 0; i < points.length; i++) {
//   sum += points[i];
// }
// console.log(sum)    


// const operacion = (n) => {
// const resultScores = points.length;
// console.log(resultScores);
// const average = sum / resultScores
// console.log(average);
// const result = average <= n ? true : false
// return result

// }

// console.log(operacion(50));