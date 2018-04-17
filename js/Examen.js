var DOC;


window.onload = function () {
  parseXml()

}
function parseXml() {

  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // gestionarXml(this.responseXML)
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
      DOC = xmlDoc.getElementsByTagName('question');
    } else {
    }
  }
  xhttp.open('GET', 'https://rawgit.com/cuencaLZ/Examen-autocorrecion/master/rato.xml', true)

  xhttp.send()

};

function gestionarXml(xmldoc) {

  var Contenedor = document.getElementById("exam");
  var enunciado = document.createElement("h3");
  enunciado.innerHTML = xmldoc.getElementsByTagName("text")[0].innerHTML

  var preguntas = xmldoc.childNodes;
  preguntas = preguntas[0].children;
  pregunta = ""

  for (i = 0; i < preguntas.length; i++) {
    preguntas[i].setAttribute("onchange", function () { })
    idPregunta = preguntas[i].getAttribute("id").onchange;
    Contenedor.append(preguntas[i].getElementsByTagName('text')[0].innerHTML);
    var boton = document.createElement("Button")
    boton.setAttribute('Onlick', " Corregir()")
    boton.innerHTML = "enviar";
    if ("select" != xmldoc.getElementsByTagName("type")[i].innerHTML) {
      for (j = 0; j < preguntas[i].getElementsByTagName('option').length; j++) {
        var tipo = xmldoc.getElementsByTagName('option')[j].getAttribute('type');
        console.log(tipo)
        console.log(xmldoc.getElementsByTagName('option')[j].getAttribute('type'))
        switch (tipo) {
          case 'radio' || 'checkbox':
            typopregunta = document.createElement(xmldoc.getElementsByTagName("question")[i].childNodes[1].innerHTML);
            typopregunta.setAttribute("onchange", " mama()");
            typopregunta.setAttribute("value", preguntas[i].getElementsByTagName('option')[j].getAttribute("value"));
            typopregunta.setAttribute("type", preguntas[i].getElementsByTagName('option')[j].getAttribute("type"));
            typopregunta.setAttribute("name", i);
            var span = document.createElement("SPAN");
            span.innerHTML = preguntas[i].getElementsByTagName('option')[j].innerHTML
            Contenedor.appendChild(document.createElement("br"))
            Contenedor.appendChild(typopregunta)
            Contenedor.appendChild(span)
            break;
          case 'date' || 'text' || 'number':
            typopregunta = document.createElement(xmldoc.getElementsByTagName("question")[i].childNodes[1].innerHTML);
            typopregunta.setAttribute("value", preguntas[i].getElementsByTagName('option')[j].getAttribute("value"));
            typopregunta.setAttribute("type", preguntas[i].getElementsByTagName('option')[j].getAttribute("type"));
            typopregunta.setAttribute("name", idPregunta);
            var span = document.createElement("SPAN");
            span.innerHTML = preguntas[i].getElementsByTagName('option')[j].innerHTML
            Contenedor.appendChild(document.createElement("br"))
            Contenedor.appendChild(typopregunta)
            Contenedor.appendChild(span)
            break;
          default:
            console.log("Error Switch");
        }
      }
    }
    else {
      console.log("select tu madre")
      var select = document.createElement("select")
      select.id = 'identificador' + i
      select.setAttribute("onchange", " mama()")
      for (t = 0; t < preguntas[i].getElementsByTagName('option').length; t++) {
        var option = document.createElement('option')
        option.setAttribute("value", preguntas[i].getElementsByTagName('option')[t].getAttribute("value"));
        option.innerHTML = preguntas[i].getElementsByTagName('option')[t].innerHTML
        select.appendChild(option)

      }
      Contenedor.appendChild(document.createElement("br"))
      Contenedor.appendChild(select)
      Contenedor.appendChild(document.createElement("br"))
    }
    Contenedor.appendChild(document.createElement("br"))


  }
  Contenedor.appendChild(boton)
}


function crearRadioButton(){}
function crerCheckBox(){}
function crearSelect() {}
function crearDate(){}
function crearNumber(){}
/* ---------- CORREIR -----------*/


function mama(j) {
  console.log(j)
  var x = document.getElementsByTagName('option')[j].getAttribute('value');
  console.log(x)


    function checkRadio(x) {

      var radios = document.getElementsByName(x);
      var isNull = true;
      for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked) //Selecciona la respuesta seleccionada
        {
          //Comprueba si tiene el atributo correcto=true, y si es así, suma 1 a los puntos
          var preguntaSel = radios[z].getAttribute("value");

          var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[preguntaSel].getAttribute("correcto");

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

    }
  }
