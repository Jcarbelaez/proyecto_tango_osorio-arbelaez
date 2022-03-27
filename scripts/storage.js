const almacenarDatos = () => {
localStorage.setItem('nombre', nombre.value );
localStorage.setItem('apellido', apellido.value);
}

const rescatarDatos = () => {
    nombre.value = localStorage.getItem('nombre');
    apellido.value = localStorage.getItem('apellido');
}

const limpiarDatos = () => {
    const respuesta = confirm('¿Quieres eliminar los datos guardados?');
    respuesta ? localStorage.clear() : alert('Los datos no han sido eliminados');
}

btnEnviar.addEventListener('click', () => almacenarDatos());

rescatarDatos()