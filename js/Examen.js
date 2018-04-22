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

    var Coptions = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option').length;
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
    for (var k = 0; k < Coptions; k++) {

        var question = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option')[k].innerHTML;
        var Tradio = document.createElement("input");

        Tradio.setAttribute("type", "radio");
        Tradio.setAttribute("name", i);
        Tradio.setAttribute("value", k);
        Tradio.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(Tradio);

        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "radio");
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }


}

function crearCheck(i) {
    var Coptions = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option').length;
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
    for (var k = 0; k < Coptions; k++) {

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
    var Coptions = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option').length;
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
    for (var k = 0; k < Coptions; k++) {

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
    var Coptions = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option').length;
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
    for (var k = 0; k < Coptions; k++) {

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
    var Coptions = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName('option').length;
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
    for (var k = 0; k < Coptions; k++) {

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
    var element = document.getElementById("cajaForm");

    var div = document.createElement("div");
    div.setAttribute("id", "puntuacion");
    element.appendChild(div);
    var numPreg = xmlDoc.getElementsByTagName('question').length;
    var inc= (numPreg-totalPoints);
    var label = document.createElement('label');
    label.innerHTML = "Numero de peguntas: " + numPreg + "<br>" + "Numero de preguntas correctas: " + totalPoints +"<br>" + "Numero de preguntas incorrectas: " +  inc + "<br>" + "PUNTUACIÓN TOTAL: " + totalPoints;
    div.appendChild(label);
}

function corregirPreguntas() {

    if (!isAlreadyCorrect) {
        var numPreg = xmlDoc.getElementsByTagName('question').length;
        totalPoints = 0;

        for (var i = 0; i < numPreg; i++) {
            var tipo = xmlDoc.getElementsByTagName('question')[i].getElementsByTagName("type")[0].innerHTML;

            if (tipo === "radio") {
                checkRadio(i);
            }
            else if (tipo === "checkbox") {
                checkCheckbox(i);
            }
            else if (tipo === "select") {
                checkSelect(i);
            }
            else if (tipo === "text") {
                checkText(i);
            }
            else if (tipo === "date") {
                checkdate(i);
            }
            else if (tipo === "number") {
                checknumber(i);
            }
        }
        crearPuntuacion();
        document.getElementById("corregir").setAttribute("style", "background-color: blue !important");
        document.getElementById("corregir").innerText ="EL RESULTADO ESTA ARRIBA" ;
        isAlreadyCorrect = true;
    }
    else {
        alert("Has Fallado, asumelo. Pero si quieres volver a probar suerte reinicia la pagina")
    }
}

function checkRadio(x) {

    var radios = document.getElementsByName(x);
    var isNull = true;
    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked) //Selecciona la option seleccionada
        {
            //Comprueba si la seleccion es buena, si lo es suma 1
            var gomal = radios[z].getAttribute("value");
            var resp = xmlDoc.getElementsByTagName("question")[x].getElementsByTagName("option")[gomal].getAttribute("correcto");
            if (resp==="true") {
                totalPoints++;
                document.getElementById("div" + x).style.color = "green";
            }
            else {
                document.getElementById("div" + x).style.color = "red";

            }
        }else {
            document.getElementById("div" + x).style.Color = "red";
        }
        
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
        if (xmlDoc.getElementsByTagName("question")[x].getElementsByTagName("option")[questionSel].getAttribute("correcto")==="true") {
            contCorrectas += 1;
        }

    }

    //Comprobamos cuantas options correctas ha seleccionado el usuario
    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked) //Selecciona la option seleccionada
        {
            var questionSel = radios[z].getAttribute("value");
            var resp = xmlDoc.getElementsByTagName("question")[x].getElementsByTagName("option")[questionSel].getAttribute("correcto");

            if (resp==="true") {
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

        document.getElementById("div" + x).style.color = "green";
    }
    else {
        document.getElementById("div" + x).style.color = "red";

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
        document.getElementById("div" + x).style.color = "green";
    }
    else {
        document.getElementById("div" + x).style.color = "red";

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

            if (resp==="true") {
                totalPoints++;
                document.getElementById("div" + x).style.color = "green";
            }
            else {
                document.getElementById("div" + x).style.color = "red";

            }
            break;
        }
    }
}

function checkdate(x) {
    var points = document.getElementById(x + "date").value;
    var resp = xmlDoc.getElementsByTagName("question")[x].getElementsByTagName("option")[0].innerHTML;
    if (points ===resp) {
        totalPoints++;
        document.getElementById("div" + x).style.color = "green";
    }
    else {
        document.getElementById("div" + x).style.color = "red";
    }
}
function checknumber(x) {
    var points = document.getElementById(x + "number").value;
    var resp = xmlDoc.getElementsByTagName("question")[x].getElementsByTagName("option")[0].innerHTML;
    if (points === resp) {
        totalPoints++;
        document.getElementById("div" + x).style.color = "green";
    }
    else {
        document.getElementById("div" + x).style.color = "red";
    }
}