
window.onload= function(){
    parseXml () 

}
function parseXml (){
        
        let xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            gestionarXml(this.responseXML)
          
          } else {
          }
        }
        xhttp.open('GET', '', true)

        xhttp.send()

      };

function gestionarXml(xmldoc){
  var Contenedor= document.getElementById("exam");
  var enunciado = document.createElement("enunciado");
  enunciado.innerHTML = xmldoc.getElementsByTagName("text")[0].innerHTML
  
  var preguntas = xmldoc.childNodes;
  preguntas = preguntas[0].children;
  pregunta = ""
  for (i=0; i<preguntas.length;i++) {
    idPregunta = preguntas[i].getAttribute("id");  
     Contenedor.append(preguntas[i].getElementsByTagName('text')[0].innerHTML);
     if ("select" != xmldoc.getElementsByTagName("type")[i].innerHTML){
      for (j=0; j < preguntas[i].getElementsByTagName('option').length ; j++){
        typopregunta = document.createElement(xmldoc.getElementsByTagName("question")[i].childNodes[1].innerHTML);
        typopregunta.setAttribute("value",preguntas[i].getElementsByTagName('option')[j].getAttribute("value"));
        typopregunta.setAttribute("type", preguntas[i].getElementsByTagName('option')[j].getAttribute("type"));
        typopregunta.setAttribute("name", idPregunta);
        var span = document.createElement("SPAN");
        span.innerHTML = preguntas[i].getElementsByTagName('option')[j].innerHTML
        Contenedor.appendChild(document.createElement("br"))
        Contenedor.appendChild(typopregunta)
        Contenedor.appendChild(span)
      }
      }
      else {
         console.log("select tu madre")
        var select = document.createElement("select")
        for (t=0; t < preguntas[i].getElementsByTagName('option').length ; t++){
        var option = document.createElement('option')
       option.innerHTML = preguntas[i].getElementsByTagName('option')[t].innerHTML
         select.appendChild(option)
       
      }
      Contenedor.appendChild(document.createElement("br"))
      Contenedor.appendChild(select)
      Contenedor.appendChild(document.createElement("br"))
      }
      Contenedor.appendChild(document.createElement("br"))
  }
  /*Contenedor.appendChild(enunciado)
  for (i=0;i<4;i++){
    var span = document.createElement("SPAN")
    var Contenedor= document.getElementById("exam")
    var typopregunta=  document.createElement(xmldoc.getElementsByTagName("question") [0].childNodes[1].innerHTML)
    typopregunta.setAttribute("type", xmldoc.getElementsByTagName("option")[i].getAttribute("type"))
    span.innerHTML = xmldoc.getElementsByTagName("option")[i].innerHTML
  Contenedor.appendChild(document.createElement("br"))
  Contenedor.appendChild(typopregunta)
  Contenedor.appendChild(span)

  }*/
}


