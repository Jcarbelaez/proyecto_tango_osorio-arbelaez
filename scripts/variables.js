//Array de obejtos literales de informacion mascotas en adopción
const mascotasEnAdopcion = [{
    id: 1,
    nombre: "Taxi",
    sexo: "macho",
    especie: "Perro",
    edad: 2,
    raza: "Criollo",
    tamaño: "pequeño",
    esterilizado: "Si"
},
{
    id: 2,
    nombre: "Tinto",
    sexo: "macho",
    especie: "Perro",
    edad: 1,
    raza: "Dachshund",
    tamaño: "pequeño",
    esterilizado: "No"
},
{
    id: 3,
    nombre: "Bandido",
    sexo: "macho",
    especie: "Perro",
    edad: 4,
    raza: "Pug",
    tamaño: "mediano",
    esterilizado: "No"
},
{
    id: 4,
    nombre: "Marta",
    sexo: "Hembra",
    especie: "Perro",
    edad: 2,
    raza: "Criollo",
    tamaño: "grande",
    esterilizado: "Si"
},
{
    id: 5,
    nombre: "Claudia",
    sexo: "Hembra",
    especie: "Perro",
    edad: 1,
    raza: "Criollo",
    tamaño: "grande",
    esterilizado: "Si"
},
{
    id: 6,
    nombre: "Parce",
    sexo: "Macho",
    especie: "Gato",
    edad: 7,
    raza: "Criollo",
    tamaño: "pequeño",
    esterilizado: "Si"
},
];

//Constructor veterinarios
class profesional {
    constructor(nombre, edad, profesion, especialidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.especialidad = especialidad;
    }
}

//Profesionales
const profesional1 = new profesional("Faustino Asprilla", 33, "Veterinario", "Ortopedista");
const profesional2 = new profesional("Carlos Valderrama", 35, "Veterinario", "Fisioterapeuta");
const profesional3 = new profesional("René Higuita", 32, "Veterinario", "Cirujano");

//Prompt inicial
let solicitudVeterinario = confirm("¿Desea solicitar un medico veterinario?");

//DOM activar botón "¡Quiero adoptar!"
const inputButton = document.querySelector("#inputButton");
//Local storage formulario
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const btnEnviar = document.querySelector('#card_btn_enviar');
//Array de macotas
const seleccionTamañoMascota = []


