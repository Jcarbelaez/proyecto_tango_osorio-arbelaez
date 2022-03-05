// debugger



// let cumpleaños = prompt('Ingrese un dia de junio');
// parseInt(cumpleaños);

// for (let mes = 1; mes <= 12; mes++) {
//     if (mes == 7) {
//         break;
//     }
//     console.log('mes', mes, 'del año 2022');

//     while (cumpleaños !=23) {
//         cumpleaños = prompt('Intentalo nuevamente');
//     }

//     if (mes == 6) {
//         alert('Es ' + cumpleaños + ' de junio, tu cumpleaños.');
//     }

// }
debugger

let solicitudVeterinario = prompt("¿Desea solicitar un medico veterinario?");

if ((solicitudVeterinario == "si") || (solicitudVeterinario == "SI")) {
    alert("Tu solicitud será verificada.");

    function profesional(nombre, edad, profesion, especialidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.especialidad = especialidad;
    }
    const profesional1 = new profesional("Faustino Asprilla", 33, "Veterinario", "Ortopedista");
    const profesional2 = new profesional("Carlos Valderrama", 35, "Veterinario", "Fisioterapeuta");
    const profesional3 = new profesional("René Higuita", 32, "Vterinario", "Cirujano");

    let seleccioneUnProfesional = parseInt(prompt("Seleccione un profesional 1,2 o 3"));

    switch (seleccioneUnProfesional) {
        case 1:
            alert("El profesional asignado es:" + " " + profesional1.nombre + ". " + profesional1.profesion + ". " + profesional1.especialidad + ".");
            break;
        case 2:
            alert("El profesional asignado es:" + " " + profesional2.nombre + ". " + profesional2.profesion + ". " + profesional2.especialidad + ".");
            break;
        case 3:
            alert("El profesional asignado es:" + " " + profesional3.nombre + ". " + profesional3.profesion + ". " + profesional3.especialidad + ".");
            break;
        default:
            alert("El valor ingresado no es válido.");

    }

} else if (solicitudVeterinario === "") {
    solicitudVeterinario = prompt("Ingresa un valor correcto.");
}
while ((solicitudVeterinario != "si") && (solicitudVeterinario != "SI")) {
    alert("Ok. Hasta una próxima vez.");
    break;
}