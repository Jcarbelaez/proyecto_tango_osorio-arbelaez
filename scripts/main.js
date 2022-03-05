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
let solicitudVeterinario = prompt("¿Desea solicitar un medico veterinario?");
solicitudVeterinario.toLowerCase()

if ((solicitudVeterinario == "si") || (solicitudVeterinario == "SI")) {
    alert("Tu solicitud será verificada.");

    function profesional(nombre, edad, profesion, especialidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.especialidad = especialidad;
    }
    const profesional1 = new profesional("Juan Arbelaez", 33, "Veterinario", "Ortopedista");
    alert("El profesional asignado es:" + " " + profesional1.nombre + ", " + profesional1.profesion + ".");
}
while ((solicitudVeterinario != "si") && (solicitudVeterinario != "SI")) {
    alert("Ok, hasta una próxima vez");
    break;
}