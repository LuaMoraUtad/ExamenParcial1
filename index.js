//Declaración de variables
var turno = 1;
var contJugador1 = 0;
var contJugador2 = 0;
var contJugador3 = 0;
var bloqueo = 0;

$(document).ready(function(){
    $('#puntuacionJ1').text(contJugador1);
    $('#puntuacionJ2').text(contJugador2);
    $('#puntuacionJ3').text(contJugador3);
});

//Función para mover mano
function moverMano(mano){
    if(bloqueo == 0){
        var mano_id = parseInt(mano.id, 10);

        if(turno == 1){
            if(mano_id == 0){
                document.getElementById("manoJ1").src = document.getElementById(mano_id).src;
            }else if(mano_id == 1){
                document.getElementById("manoJ1").src = document.getElementById(mano_id).src;
            }else if(mano_id == 2){
                document.getElementById("manoJ1").src = document.getElementById(mano_id).src;
            }

            if(mano_id <=2 ){
                document.getElementById("ET").src = document.getElementById("personaJ1").src;
                turno = 2;
            }
        }else if(turno == 2){
            if(mano_id == 3){
                document.getElementById("manoJ2").src = document.getElementById(mano_id).src;
            }else if(mano_id == 4){
                document.getElementById("manoJ2").src = document.getElementById(mano_id).src;
            }else if(mano_id == 5){
                document.getElementById("manoJ2").src = document.getElementById(mano_id).src;
            }
            
            if(mano_id > 2 && mano_id <= 5){
                document.getElementById("ET").src = document.getElementById("personaJ2").src;
                turno = 3;
            }
        }else{
            if(mano_id == 6){
                document.getElementById("manoJ3").src = document.getElementById(mano_id).src;
                quienEsElGanador();
            }else if(mano_id == 7){
                document.getElementById("manoJ3").src = document.getElementById(mano_id).src;
                quienEsElGanador();
            }else if(mano_id == 8){
                document.getElementById("manoJ3").src = document.getElementById(mano_id).src;
                quienEsElGanador();
            }
            
            if(mano_id>=6){
                document.getElementById("ET").src = document.getElementById("personaJ3").src;
                turno = 1;
            }
        }
    }
}

//Función quién gana
function quienEsElGanador(){
    var izq = document.getElementById("manoJ1").src;
    var med = document.getElementById("manoJ2").src;
    var der = document.getElementById("manoJ3").src;

    if(izq.includes("Uno") && (med.includes("Dos") && der.includes("Dos"))){
        $("#Ganador").text("Ganador: Jugador 1");
        contJugador1++;
        $('#puntuacionJ1').text(contJugador1);
    }else if(med.includes("Uno") && (izq.includes("Dos") && der.includes("Dos"))){
        $("#Ganador").text("Ganador: Jugador 2");
        contJugador2++;
        $('#puntuacionJ2').text(contJugador2);
    }else if(der.includes("Uno") && (izq.includes("Dos") && med.includes("Dos"))){
        $("#Ganador").text("Ganador: Jugador 3");
        contJugador3++;
        $('#puntuacionJ3').text(contJugador3);
    }

    if(izq.includes("Dos") && (med.includes("Uno") && der.includes("Uno"))){
        $("#Ganador").text("Ganador: Jugador 1");
        contJugador1++;
        $('#puntuacionJ1').text(contJugador1);
    }else if(med.includes("Dos") && (izq.includes("Uno") && der.includes("Uno"))){
        $("#Ganador").text("Ganador: Jugador 2");
        contJugador2++;
        $('#puntuacionJ2').text(contJugador2);
    }else if(der.includes("Dos") && (izq.includes("Uno") && med.includes("Uno"))){
        $("#Ganador").text("Ganador: Jugador 3");
        contJugador3++;
        $('#puntuacionJ3').text(contJugador3);
    }

    if((izq.includes("Uno") && med.includes("Uno") && der.includes("Uno")) || (izq.includes("Dos") && med.includes("Dos") && der.includes("Dos"))){
        $("#Ganador").text("Empate");
    }

    bloqueo = 1;
}

//Función reset
function reset(){
    bloqueo = 0;
    contJugador1 = 0;
    $('#puntuacionJ1').text(contJugador1);

    contJugador2 = 0;
    $('#puntuacionJ2').text(contJugador2);

    contJugador3 = 0;
    $('#puntuacionJ3').text(contJugador3);

    document.getElementById("manoJ1").src = "./dos_o_uno_assets/Interrogante.jpg";
    document.getElementById("manoJ2").src = "./dos_o_uno_assets/Interrogante.jpg";
    document.getElementById("manoJ3").src = "./dos_o_uno_assets/Interrogante.jpg";
    document.getElementById("ET").src = "./dos_o_uno_assets/EsperarTurno.jpg";
}

//Función siguiente ronda
function nextRound(){
    bloqueo = 0;

    document.getElementById("manoJ1").src = "./dos_o_uno_assets/Interrogante.jpg";
    document.getElementById("manoJ2").src = "./dos_o_uno_assets/Interrogante.jpg";
    document.getElementById("manoJ3").src = "./dos_o_uno_assets/Interrogante.jpg";
    document.getElementById("ET").src = "./dos_o_uno_assets/EsperarTurno.jpg";
}
