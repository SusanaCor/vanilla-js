let contador = {
  valor: 0,
  siguiente: function () {
    // Inserte el código aquí
      this.valor = this.valor ++
      console.log(this.valor)
    return this.valor;
  },
};

export { contador };

// let saludo = function () {
//   console.log("Hola Mundo");
// };
// let saludoTodos = function () {
//   console.log("Hola Todos");
// };

// function mostrarMensaje(fn) {
//   fn();
// }

// mostrarMensaje(saludo);

// function sumar(...numeros) {
//   return numeros.reduce((acumulador, valorActual) => {
//     return acumulador + valorActual;
//   }, 0);
// }

// const resultado = sumar(1, 2, 3, 4, 10);

// console.log({ resultado });