
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
        xhttp.open('GET', 'https://rawgit.com/cuencaLZ/Examen-autocorrecion/master/Examen.xml', true)
        xhttp.send()

      };

function gestionarXml(xmldoc){
  console.log(xmldoc);
}
