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
class Profesional {
    constructor(id, nombre, edad, profesion, especialidad, ubicacion, cuota) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.especialidad = especialidad;
        this.ubicacion = ubicacion;
        this.cuota = cuota;
    }

    //Metodo de la clase
    informacionProfesional() {
        return `El profesional asignado es: ${this.nombre}. Edad: ${this.edad}. Profesion: ${this.profesion}. Especialidad: ${this.especialidad}`;
    }
}

// Clase instanciada
const profesional1 = new Profesional(1, "Franco Armani", 28, "Veterinario", "Cirujano", "Medellin", 4.00);
const profesional2 = new Profesional(2, "Alexander Mejía", 30, "Veterinario", "Ortopedista", "Bello", 2.00);
const profesional3 = new Profesional(3, "Macnelly Torres", 28, "Veterinario", "Cirujano", "Envigado", 2.00);
const profesional4 = new Profesional(4, "Davinson Sanchez", 30, "Veterinario", "Anestesiologo", "Sabaneta", 3.00);
const profesional5 = new Profesional(5, "Alexis Henriquez", 33, "Veterinario", "Dermatologo", "Medellin", 3.00);

//Array de obejtos literales de informacion de profesionales
const profesionalesDisponibles = [profesional1, profesional2, profesional3, profesional4, profesional5]

//Prueba de filtro del array
// const resultProfesionales = profesionalesDisponibles.find (profesionales => profesionales.especialidad === "Cirujano");
// console.table(resultProfesionales);


//Constructor Productos
class Producto {
    constructor(id, nombre, categoria, precio) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

//Clase instanciada
const producto1 = new Producto(1, "Kong", "Juguetes", 20.00 );
const producto2 = new Producto(2, "Purina Pro Plan", "Alimento", 13.00 );
const producto3 = new Producto(3, "Pienso Taste Of The Wild", "Alimento", 15.00 );
const producto4 = new Producto(4, "ShedX", "Suplementos", 30.00 );


//Array de productos
const objetoProductos = [producto1, producto2, producto3, producto4]

//Prueba de filtro del array
// const result = objetoProductos.filter (precio => precio.precio === 13)
// console.table(result)

