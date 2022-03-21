if (solicitudVeterinario == true) {
    alert("Tu solicitud será verificada.");

    let seleccioneUnProfesional = parseInt(prompt("Seleccione un profesional 1,2 o 3"));

    switch (seleccioneUnProfesional) {
        case 1:
            alert(`El profesional asignado es: ${profesional1.nombre}. ${profesional1.profesion}. ${profesional1.especialidad}`);
            break;
        case 2:
            alert(`El profesional asignado es: ${profesional2.nombre}. ${profesional2.profesion}. ${profesional2.especialidad}`);
            break;
        case 3:
            alert(`El profesional asignado es: ${profesional3.nombre}. ${profesional3.profesion}. ${profesional3.especialidad}`);
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
        debugger
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

botonTrigger()