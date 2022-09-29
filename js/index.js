/*Seleccionar la opcion correcta*/


function prueba() {
    /*Establecer variables*/
    var opcion1 = document.getElementById("opcion1"); /*enlazar dom con var */
    var opcion2 = document.getElementById("opcion2");
    var opcion3 = document.getElementById("opcion3");
    var numPregunta=document.getElementById("pregunta");
  
  
    /*Condicionales para verficiar cual es la respuesat correcta*/
    if (opcion1.checked || opcion2.checked || opcion3.checked) { /*si es que cualquiera de las 3 opciones es marcada, va a verificar */

        if (numPregunta.classList.contains("pregunta1") || numPregunta.classList.contains("pregunta2")){
            document.getElementById("PasarPregunta").style.display =
            "block"; /*Mostrar para pasar a otra pregunta*/
        }
        document.getElementById("buttonSend").style.display = "none";
  
        if (numPregunta.classList.contains("pregunta1")){
            /*Verificar pregunta 1*/
            if (opcion3.checked) {
                document.getElementById("correct").style.display = "block"; /*Mostrar*/
                document.getElementById("incorrect").style.display = "none"; /*Ocultar*/
            } else {
                document.getElementById("incorrect").style.display = "block";
                document.getElementById("correct").style.display = "none";
            }
        } else if (numPregunta.classList.contains("pregunta2")){
                /*Verificar pregunta 2*/
                if (opcion2.checked) {
                    document.getElementById("correct").style.display = "block"; /*Mostrar*/
                    document.getElementById("incorrect").style.display = "none"; /*Ocultar*/
                } else {
                    document.getElementById("incorrect").style.display = "block";
                    document.getElementById("correct").style.display = "none";
                }
            }else if (numPregunta.classList.contains("pregunta3")){
                if (opcion1.checked) {
                    document.getElementById("correct").style.display = "block"; /*Mostrar*/
                    document.getElementById("incorrect").style.display = "none"; /*Ocultar*/
                } else {
                    document.getElementById("incorrect").style.display = "block";
                    document.getElementById("correct").style.display = "none";
                }
            }
    } else {
        alert("Debe seleccionar una opción");
    }
}
/*Tomar lo del boton enviar y al hacer click se le asigna la funcion prueba*/
var boton = document.getElementById("buttonSend");
boton.addEventListener("click", prueba);