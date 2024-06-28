let intentos = 6;
document.getElementById("intentos").innerHTML=intentos;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
let posicion = Math.floor(Math.random() * diccionario.length);
let palabra = diccionario[posicion];
let BOTON = document.getElementById("guess-button");
BOTON.addEventListener("click",intentar);

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE BRO, RUIDO DE VAPE😎</h1>");
        swal("Excelente 😎", "Eres el mejor", "success");
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW);
    intentos--
    //actualizo los intentos
    document.getElementById("intentos").innerHTML=intentos;
    if (intentos==0){
        document.getElementById('grid').innerHTML="";
        //hago aparecer btn reset
        document.getElementById("reset").style.display="block";
        terminar("<h1>PERDISTE BRO 😢</h1>");
        swal("Oops!", "Ha terminado tus oportunidades, presiona el boton reset y juega de nuevo", "error");
        return
    }
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

//Funcion de btn reset
let btnReset = document.getElementById("reset");
btnReset.addEventListener("click", function(){
    intentos = 6;
    document.getElementById("intentos").innerHTML=intentos;
    //hago desaparecer btn reset
    document.getElementById("reset").style.display="none";
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = false;
    BOTON.disabled = false;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = "";
})