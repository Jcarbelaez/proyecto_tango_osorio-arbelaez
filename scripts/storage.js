const almacenarDatos = () => {
localStorage.setItem('nombre', nombre.value );
localStorage.setItem('aoellido', apellido.value);
}

btnEnviar.addEventListener('click', () => almacenarDatos());
