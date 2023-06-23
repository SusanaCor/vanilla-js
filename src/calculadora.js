
export { sumar, restar, dividir, multiplicar, numerospares, numerosresiduos };

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function restar(numero1, numero2) {
  return numero1 - numero2;
}
function dividir(numero1, numero2) {
  return numero1 / numero2;
}
function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function numerospares(list) {
  console.log(list);
  const Lista1 = list.filter((list) => list % 2 === 0);

  console.log(Lista1);
  //este procedimiento es para determinar el valos del test

  if (Lista1[0] % 2 === 0) {
    console.log("VERDAERO");

    return 0;
  }
}


function numerosresiduos(listar) {
    console.log(listar);
    const array = listar.filter((listar) => listar % 5 === 0);

    console.log(array);
    //este procedimiento es para determinar el valos del test

    if (array[0] % 5 === 0) {
        console.log("VERDADERO");

        return 0;
    }

    // function numerosresiduos(Listado) {
    //   const lista2 = Listado.filter((Listado) => Listado % 5 === 0);

    //   for (let index = 0; index < lista2.length; index++) {
    //     if (lista2[index] % 5 === 0) {
    //       console.log("Verdadero");
    //       return 0, 5;
    //     } else {
    //       console.log("falso");
    //       return 1;
    //     }
    //   }
    // }
  }




































// var express = require("express");
// var cors = require("cors");

// var app = express();

// app.use(cors())

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// app.get("/users", (req, res, next) => {
//   res.json([
//     { id: 1, name: "Maria", birth: 1990 },
//     { id: 2, name: "Luis", birth: 1980 },
//   ]);
// });
