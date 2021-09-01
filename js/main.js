let nombre = prompt('Ingrese su nombre:');

let apellido = prompt('Ingrese su apellido:');

let nacimiento = parseInt(prompt('Ingrese su año de nacimiento'))

let fecha = parseInt(prompt('Ingrese el año actual'))

let edad = fecha - nacimiento

let nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto)

alert('Nombre completo: ' + nombreCompleto)

console.log(edad)

alert('Edad: ' + edad)