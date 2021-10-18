var catalogo = {
    "Peliculas": [
        {"imagen" : "img/juan-robles.jpg",
         "nombre" : "Venom",
         "clasificacion" : "PG-13",
         "duracion" : 97,
         "butacas" : "Tradicionales"},
         {"imagen" : "img/juan-robles.jpg",
         "nombre" : "Space jam: Una nueva era",
         "clasificacion" : "A",
         "duracion" : 115,
         "butacas" : "Tradicionales"},
         {"imagen" : "img/juan-robles.jpg",
         "nombre" : "Black Widow",
         "clasificacion" : "PG-13",
         "duracion" : 133,
         "butacas" : "Tradicionales"},
    ]
};

//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var div = document.getElementById("info");
div.innerHTML = volcarDatos(catalogo.Peliculas);

function volcarDatos(datos){
    var total = datos.length;
    data = "<ul class=\"grid\">\n";
    for(var i=0; i<total; i++){
        data += "<li class=\"box\">\n"; 
        data += "<div class=\"box-shadow\"></div>\n";
        data += "<div class=\"box-gradient\">\n";
        data += "<img src=\"" + datos[i].imagen + "\" alt=\"Avatar de " + datos[i].nombre + " " + datos[i].clasificacion + "\" class=\"avatar\" />\n";
        data += "<h4>\nNombre: " + datos[i].nombre + " "  + "\n</h4>\n";
        data += "<p>\nClasificación: " + datos[i].clasificacion + " " +  "\n</p>\n";
        data += "<p>\nDuración: " + datos[i].duracion + " minutos" + "\n<br />\n";
        data += "Tipos de butacas: " + datos[i].butacas + "\n</p>\n";
        data += "</div>\n";
        data += "</li>\n";
    }
    data += "</ul>\n";
    return data;
}