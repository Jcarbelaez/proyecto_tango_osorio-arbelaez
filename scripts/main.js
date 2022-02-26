// debugger



let cumpleaños = prompt('Ingrese un dia de junio');
parseInt(cumpleaños);

for (let mes = 1; mes <= 12; mes++) {
    if (mes == 7) {
        break;
    }
    console.log('mes', mes, 'del año 2022');

    while (cumpleaños !=23) {
        cumpleaños = prompt('Intentalo nuevamente');
    }

    if (mes == 6) {
        alert('Es ' + cumpleaños + ' de junio, tu cumpleaños.');
    }

}
