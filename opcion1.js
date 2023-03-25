//Usted tiene 2 notas:

// 0. Una variable puede declararse usando let o const
// 1. Un arreglo es un conjunto de datos ordenados

// ------------------------
//¿Qué desea hacer?
// 1. Crear nota
// 2. Editar nota
// 3. Eliminar nota

let notas = [];

// En la consola nos permite escribir funciones o sentencias de Javascript que estarán actuando en la página que se encuentra en la pestaña actual del navegador.

function mostrarMenu() {
  console.log(`Cantidad de notas: ${notas.length}`);
  console.log(`Lista de notas: ${notas}`);
  console.log('Menu de acciones:');
  console.log('1. Crear nota');
  console.log('2. Editar nota');
  console.log('3. Eliminar nota');
}

function crearNota() {
  const nota = prompt('Ingrese el texto de la nueva nota:');
  notas.push(nota);
  mostrarMenu();
}

// El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array

function editarNota() {
  let indice = prompt('Ingrese el índice de la nota a editar:');
  while (isNaN(indice) || indice < 0 || indice >= notas.length) {
    indice = prompt('Índice inválido. Ingrese el índice de la nota a editar:');
  }
  const nota = prompt('Ingrese el nuevo texto de la nota:');
  notas[indice] = nota;
  mostrarMenu();
}

function eliminarNota() {
  let indice = prompt('Ingrese el índice de la nota a eliminar:');
  while (isNaN(indice) || indice < 0 || indice >= notas.length) {
    indice = prompt('Índice inválido. Ingrese el índice de la nota a eliminar:');
  }
  notas.splice(indice, 1);
  mostrarMenu();
}

mostrarMenu();

while (true) {
  const opcion = prompt('Seleccione una opción (1, 2 o 3):');
  if (opcion === null) {
    console.log('¡Gracias por usar Notas!');
    break;
  } else if (opcion === '1') {
    crearNota();
  } else if (opcion === '2') {
    editarNota();
  } else if (opcion === '3') {
    eliminarNota();
  } else {
    console.log('Opción inválida. Seleccione una opción (1, 2 o 3):');
  }
}