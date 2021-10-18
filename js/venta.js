//
btn = document.getElementById("btn-compra");
btnShow = document.querySelector("#btn-mostrar");
var ComprasTotales = [];
localStorage.setItem(ComprasTotales);
btn.addEventListener('click', cargar, true);
btn.addEventListener('click', subir, true);

function cargar(){
    var name = document.getElementById("user").value;
    var movie = document.getElementById("op").value;
    var tickets = parseInt(document.getElementById("nTickets").value);
    var hour= "";
    var Gasto = 0;

    if (UserMovie = "Venom $3.50") {
        UserHour = "8:30 AM"
        Gasto = 3.50 * tickets;
    }
   
   
    if (UserMovie = "Space Jam $4.50"){
        UserHour = "1:30 PM"
        Gasto = 4.50 * tickets;
    }
   
   
    if (UserMovie = "Black Widow $3.00"){
        UserHour = "11:30 AM"
        Gasto = 3 * tickets;
    }

    
    
    var ticket = {
        "user": name,
        "pel": movie,
        "hora": hour,
        "total": gasto + "$"
    }


    alert("Su compra es la mostrada a continuación: \n Nombre: " + ticket.user + "\n Película: " 
    + ticket.pel + "\n Horario: " + ticket.hora + "\n Total a gastar: " + ticket["total"]);
   ComprasTotales.push(JSON.stringify(ticketJSON));
}

function subir(){
    document.getElementsByClassName("cont").innerHTML = "<p>"+ComprasTotales+"</p>"
}