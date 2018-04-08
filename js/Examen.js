
window.onload= function(){
    parseXml () 

}
function parseXml (){
        
        let xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            gestionarXml(this.responseXML)
          
          } else {
            console.log("esta todo fatal")
          }
        }
        xhttp.open('GET', 'https://rawgit.com/cuencaLZ/Examen-autocorrecion/master/rato.xml', true)
        xhttp.send()

      };

function gestionarXml(xmldoc){
  console.log(xmldoc);
  var Contenedor= document.getElementById("exam")
  var enunciado = document.createElement("enunciado")
  enunciado.innerHTML = xmldoc.getElementsByTagName("text")[0].innerHTML
  Contenedor.appendChild(enunciado)
  for (i=0;i<4;i++){
    var span = document.createElement("SPAN")
    var Contenedor= document.getElementById("exam")
    var typopregunta=  document.createElement(xmldoc.getElementsByTagName("question") [0].childNodes[1].innerHTML)
    typopregunta.setAttribute("type", xmldoc.getElementsByTagName("option")[i].getAttribute("type"))
    span.innerHTML = xmldoc.getElementsByTagName("option")[i].innerHTML
  Contenedor.appendChild(document.createElement("br"))
  Contenedor.appendChild(typopregunta)
  Contenedor.appendChild(span)

  }
  
  console.log(xmldoc.getElementsByTagName("question") [0].childNodes[1])
  console.log(xmldoc.getElementsByTagName("option")[0].getAttribute("type"))
  console.log(document.createElement(xmldoc.getElementsByTagName("question") [0].childNodes[2].innerHTML))
}


