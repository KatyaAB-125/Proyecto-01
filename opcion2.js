let notas = ["Una variable puede declararse usando let o const", "Un arreglo es un conjunto de datos ordenados"];

function mostrarNotas() {
  console.log(`Usted tiene ${notas.length} notas:\n`);
  notas.forEach((nota, index) => {
    console.log(`${index}. ${nota}`);
  });
}

function crearNota() {
  const nuevaNota = prompt("Ingrese el texto de la nota:");
  notas.push(nuevaNota);
  console.log("Nota creada exitosamente.\n");
}

function editarNota() {
  let indice = prompt("Ingrese el índice de la nota que desea editar:");
  while (isNaN(indice) || indice < 0 || indice >= notas.length) {
    indice = prompt("Indice de nota inválido. Ingrese un índice válido:");
  }
  const nuevaNota = prompt("Ingrese el nuevo texto de la nota:");
  notas[indice] = nuevaNota;
  console.log("Nota editada exitosamente.\n");
}

function eliminarNota() {
  let indice = prompt("Ingrese el índice de la nota que desea eliminar:");
  while (isNaN(indice) || indice < 0 || indice >= notas.length) {
    indice = prompt("Indice de nota inválido. Ingrese un índice válido:");
  }
  notas.splice(indice, 1);
  console.log("Nota eliminada exitosamente.\n");
}

function mostrarMenu() {
  console.log("------------------------");
  mostrarNotas();
  console.log("\n¿Qué desea hacer?\n1. Crear nota\n2. Editar nota\n3. Eliminar nota");
}

mostrarMenu();

let opcion = prompt("Ingrese una opción:");

while (opcion !== null) {
  if (opcion === "1") {
    crearNota();
  } else if (opcion === "2") {
    editarNota();
  } else if (opcion === "3") {
    eliminarNota();
  } else {
    console.log("Opción inválida.");
  }
  mostrarMenu();
  opcion = prompt("Ingrese una opción:");
}

console.log("¡Gracias por usar Notas!");

//Este código define cuatro funciones: mostrarNotas, crearNota, editarNota y eliminarNota, y una función mostrarMenu que muestra las notas, el menú de acciones y solicita al usuario que seleccione una opción.
//La función mostrarNotas muestra la cantidad de notas y la lista de notas utilizando el método forEach.
//La función crearNota solicita al usuario que ingrese el texto de la nota utilizando el método prompt y agrega la nueva nota al array de notas utilizando el método push.
//La función editarNota solicita al usuario que ingrese el índice de la nota que desea editar y el nuevo texto de la nota utilizando el método prompt. Luego, actualiza la nota en el array de notas utilizando el índice proporcionado y el método splice.
//La función eliminarNota solicita al usuario el programa debe mostrar solicitando el indice de la nota a eliminar. 



