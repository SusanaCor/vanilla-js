function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    dia = momentoActual.getDay()
  
    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo
  
    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto
  
    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora
  
       str_dia = new String (dia)
       if (str_hora.length == 1)
          dia = "0" + dia
  
  
  
          let hoy= new Date().toLocaleDateString('en-ES')
  
          console.log(hoy)
  
  console.log(hoy)
  
  let fecha=document.getElementById("fecha")
  
    horaImprimible = hora + " : " + minuto + " : " + segundo 
  
    fecha.innerText= hoy
  
    document.form_reloj.reloj.value = horaImprimible
  
    setTimeout("mueveReloj()",1000)
  }