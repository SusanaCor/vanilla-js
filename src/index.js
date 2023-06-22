//Inserte el código aquí


// function mueveReloj(){

//     let h4=document.getElementById("valor")

//    let momentoActual = new Date()
//     let hora = momentoActual.getHours()
//     let minuto = momentoActual.getMinutes()
//     let segundo = momentoActual.getSeconds()

//    let horaImprimible = hora + " : " + minuto + " : " + segundo

//     h4.innerHTML = horaImprimible
//     console.log(horaImprimible)

// return horaImprimible
// }
// let hora1=mueveReloj()
// function actualizar(hora1){

//     return hora1
// updateTime()
// setInterval(actualizar(hora1),1000)
// }
//ejercicio 2


function ObtenerListaUsuarios() {
    fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) =>{
        console.log("Lista de usuarios",data);

        

   })
   .catch((error)=>{
    console.error("Error al obtener la lista de usuarios", error)
   })
    
}
const getUsuarios = () =>{
    return new Promise((resolve) =>{
    
    setTimeout (() =>{
     resolve (ObtenerListaUsuarios());
     }, 3500);
      
    });
}
async function Datos (){
    try {
        const usuariosD = await getUsuarios();
        console.log(usuariosD);
    } catch (error) {
        console.log(error);
    }
  
}
Datos();






