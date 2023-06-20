class Persona{
    nombre = "";
   constructor(nombre){
    this.nombre = nombre;
   }
   saludo(){
    console.log("hola soy", this.nombre);
   }
}
//solo un molde
const persona = new Persona ("Maria")
// persona 1 salude y ejecuta con parentesis
persona1.saludo();

const persona2 = {
    nombre: "Pablo",
    saludo: function () {
        console.log("Hola soy", this.nombre);
        
    },
    
}