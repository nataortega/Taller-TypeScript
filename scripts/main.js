import { series } from "./data.js";
console.log("Este es el taller 1 de TS de DSW en equipos");
var contenidoTabla = document.getElementById("contenido");
var titleCard = document.getElementById("title-info");
var textCard = document.getElementById("text-info");
var linkCard = document.getElementById("card-link");
mostrarContenidoTabla();
insertarPromedioTemporadas();
constuirBotones();
function constuirBotones() {
    var _loop_1 = function (i) {
        var serie = series[i - 1];
        var button = document.getElementById("button-".concat(i));
        button.onclick = function () {
            console.log(serie.name);
            titleCard.innerText = serie.name;
            textCard.innerText = serie.description;
            linkCard.innerText = serie.link;
            linkCard.setAttribute("href", serie.link);
            linkCard.setAttribute("target", "_blank");
        };
    };
    for (var i = 1; i <= series.length; i++) {
        _loop_1(i);
    }
}
function mostrarContenidoTabla() {
    var index = 1;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        console.log(serie);
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(index, "</td>\n        <td><button class=\"btn default\" id=\"button-").concat(index, "\">").concat(serie.name, "</button></td>\n        <td>").concat(serie.studio, "</td>\n        <td>").concat(serie.releaseYear, "</td>\n        <td>").concat(serie.seasons, "</td>\n        ");
        contenidoTabla.appendChild(row);
        index++;
    }
}
function obtenerPromedioTemporadas() {
    var suma = 0;
    var nElementos = series.length;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        suma += serie.seasons;
    }
    var avg = suma / nElementos;
    avg = +avg.toFixed(2);
    return avg;
}
function insertarPromedioTemporadas() {
    var avg = obtenerPromedioTemporadas();
    var p_promedio = document.getElementById("avg-p");
    p_promedio.innerHTML = "Promedio de Temporadas: ".concat(avg);
}
