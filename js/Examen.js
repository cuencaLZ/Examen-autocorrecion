var xmlDoc;
var numquestions = 0;
var totalPoints = 0;
var isAlreadyCorrect = false;

window.onload = function () {
    mostrarXml();

};
function mostrarXml() {
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
           xmlDoc= this.responseXML
            numquestions = xmlDoc.getElementsByTagName('question').length;
            imprimirquestions();
        }
    };
    xhttp.open('POST', 'rato.xml', true);

    xhttp.send();

}

function imprimirquestions() {

    for (var i = 0; i < numquestions; i++) {

        var tipo = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('type')[0].innerHTML;

        switch (tipo) {
            case "radio":
                crearRadio(i);
                break;
            case "checkbox":
                crearCheck(i);
                break;
            case "text":
                crearText(i);
                break;
            case "select":
                crearSelect(i);
                break;
            case "number":
                crearnumber(i);
                break;
            case "date":
                creardate(i);
                break;
            default:
                console.log("default");
        }
    }
}

function crearRadio(i) {

    var numSol = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option').length;
    var element = document.getElementById("formu");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    element.appendChild(div);
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('text')[0].innerHTML + "<br>";
    div.appendChild(enunciado)
    // inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option')[k].innerHTML;
        var radioBut = document.createElement("input");

        radioBut.setAttribute("type", "radio");
        radioBut.setAttribute("name", i);
        radioBut.setAttribute("value", k);
        radioBut.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut);

        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "radio");
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }


}

function crearCheck(i) {
    var numSol = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option').length;
    var element = document.getElementById("formu");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    element.appendChild(div);

    //enunciado
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('text')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    //Radio inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option')[k].innerHTML;
        var check = document.createElement("input");

        check.setAttribute("type", "checkbox");
        check.setAttribute("name", i);
        check.setAttribute("value", k);
        check.setAttribute('id', "div" + i + k + "check");
        div.appendChild(check);

        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "check");
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }
}

function crearText(i) {
    var numSol = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option').length;
    var element = document.getElementById("formu");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    element.appendChild(div);

    //pregunta
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('text')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    // inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option')[k].innerHTML;
        var text = document.createElement("input");

        text.setAttribute("type", "text");
        text.setAttribute("name", i);
        text.setAttribute('id', i + "text");
        div.appendChild(text);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = "<br>";
        div.appendChild(label);
    }
}

function crearSelect(i) {
    var numSol = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option').length;
    var element = document.getElementById("formu");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    element.appendChild(div);

    //enunciado
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('text')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    var select = document.createElement("select");
    select.setAttribute("id", i + "select");
    select.setAttribute("name", i);
    div.appendChild(select);

    //Option inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option')[k].innerHTML;
        var option = document.createElement("option");

        option.setAttribute("name", i);
        option.setAttribute("value", k);
        option.setAttribute('id', k + "check");
        option.innerHTML = question;
        select.appendChild(option);

        var label = document.createElement('label');
        label.setAttribute('for', i);
    }
    label.innerHTML = "<br>";

    div.appendChild(label);
}

function crearnumber(i) {

    var element = document.getElementById("formu");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    element.appendChild(div);

    //enunciado
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('text')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    var number = document.createElement("input");

    number.setAttribute("type", "number")
   number.setAttribute("name", i);
    number.setAttribute("value", 1900);
    number.setAttribute('id', i + "number");
    div.appendChild(number);

    var label = document.createElement('label');
    label.setAttribute('for', i);
    label.innerHTML = "<br>";

    div.appendChild(label);
}
function creardate(i) {
    var numSol = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option').length;
    var element = document.getElementById("formu");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "question");
    element.appendChild(div);

    //pregunta
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('text')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    // inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option')[k].innerHTML;
        var date = document.createElement("input");

        date.setAttribute("type", "date");
        date.setAttribute("name", i);
        date.setAttribute('id', i + "date");
        div.appendChild(date);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = "<br>";
        div.appendChild(label);
    }
}

function crearPuntuacion() {
    var element = document.getElementById("cabecera");

    var div = document.createElement("div");
    div.setAttribute("id", "puntuacion");
    element.appendChild(div);

    var label = document.createElement('label');
    label.innerHTML = "Puntuacion total:" + totalPoints;
    div.appendChild(label);
}

function checkquestions() {

    if (!isAlreadyCorrect) {
        var numPreg = xmlDoc.getElementsByTagName('question').length;
        totalPoints = 0;

        for (var i = 0; i < numPreg; i++) {
            var tipo = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName("tipo")[0].innerHTML;

            if (tipo === "radio") {
                checkRadio(i);
            }
            else if (tipo === "check") {
                checkCheckbox(i);
            }
            else if (tipo === "select") {
                checkSelect(i);
            }
            else if (tipo === "text") {
                checkText(i);
            }
            else if (tipo === "range") {
                checkRange(i);
            }
        }
        crearPuntuacion();
        document.getElementById("boton").setAttribute("style", "background-color: grey !important");
        document.getElementById("boton").innerText = totalPoints + "/" + numPreg + " questions correctas";
        isAlreadyCorrect = true;
    }
    else {
        alert("Examen ya corregido. Recarga la página para volver a intentarlo.")
    }
}

function checkRadio(x) {

    var radios = document.getElementsByName(x);
    var isNull = true;
    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked) //Selecciona la option seleccionada
        {
            //Comprueba si tiene el atributo correcto=true, y si es así, suma 1 a los puntos
            var questionSel = radios[z].getAttribute("value");

            var resp = xmlDoc.getElementsByTagName("question")[x].getElementsByTagName("option")[questionSel].getAttribute("correcto");

            if (resp) {
                totalPoints++;
                document.getElementById("div" + x).style.backgroundColor = "green";
            }
            else {
                document.getElementById("div" + x).style.backgroundColor = "red";

            }

            break;
        }

        if (isNull) {
            document.getElementById("div" + x).style.backgroundColor = "red";
        }
    }

    var imagen = xmlDoc.getElementsByTagName('question')[x].getElementsByTagName('img')[0];
    if (imagen) {
        var image = document.getElementById("jirafa");
        image.src = "img/jirafa_ans.jpg"

    }


}

function checkCheckbox(x) {

    var contCorrectas = 0;
    var contSeleccionadas = 0;
    var contSelecCorrectas = 0;
    var radios = document.getElementsByName(x);

    //Cuenta cuantas options tienen que ser seleccionadas
    for (var z = 0, length = radios.length; z < length; z++) {
        var questionSel = radios[z].getAttribute("value");
        if (xmlDoc.getElementsByTagName("question")[x].getElementsByTagName("option")[questionSel].getAttribute("correcto")) {
            contCorrectas += 1;
        }

    }

    //Comprobamos cuantas options correctas ha seleccionado el usuario
    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked) //Selecciona la option seleccionada
        {
            var questionSel = radios[z].getAttribute("value");
            var resp = xmlDoc.getElementsByTagName("question")[x].getElementsByTagName("option")[questionSel].getAttribute("correcto");

            if (resp) {
                contSelecCorrectas++;
                contSeleccionadas++;
            }
            else {
                contSeleccionadas++;
            }
            // break;
        }
    }

    //Comprobacion final
    if (contSelecCorrectas === contCorrectas && contCorrectas === contSeleccionadas) {
        totalPoints++;

        document.getElementById("div" + x).style.backgroundColor = "green";
    }
    else {
        document.getElementById("div" + x).style.backgroundColor = "red";

    }

}

function checkText(x) {
    try {
        var userAns = document.getElementById(x + "text").value;
    } catch (e) {
    }
    var resp = xmlDoc.getElementsByTagName("question")[x].getElementsByTagName("option")[0].innerHTML;

    if (resp === userAns) {
        totalPoints++;
        document.getElementById("div" + x).style.backgroundColor = "green";
    }
    else {
        document.getElementById("div" + x).style.backgroundColor = "red";

    }
}

function checkSelect(x) {

    var option = document.getElementsByName(x);
    // var option = document.getElementById(x+"select").value;


    for (var z = 0, length = option.length; z < length; z++) {
        if (option[z].selected) //Selecciona la option seleccionada
        {
            //Comprueba si tiene el atributo correcto=true, y si es así, suma 1 a los puntos
            var questionSel = document.getElementById(x + "select").value;

            var resp = xmlDoc.getElementsByTagName("question")[x].getElementsByTagName("option")[questionSel].getAttribute("correcto");

            if (resp) {
                totalPoints++;
                document.getElementById("div" + x).style.backgroundColor = "green";
            }
            else {
                document.getElementById("div" + x).style.backgroundColor = "red";

            }
            break;
        }
    }
}

function checkRange(x) {
    var points = document.getElementById(x + "range").value;
    var resp = xmlDoc.getElementsByTagName("question")[x].getElementsByTagName("option")[0].innerHTML;
    if (points === resp) {
        totalPoints++;
        document.getElementById("div" + x).style.backgroundColor = "green";
    }
    else {
        document.getElementById("div" + x).style.backgroundColor = "red";
    }
}