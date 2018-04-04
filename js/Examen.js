
window.onload= function(){
    parseXml () {
        let sel = this
        let xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            sel.gestionarXml(this.responseXML)
            sel.XMLparseado = this.responseXML
          } else {
          }
        }
        xhttp.open('GET', 'https://rawgit.com/Ulisesuarez/TESTGO/master/ignorantia/src/assets/preguntas.xml', true)
        xhttp.send()
      }

}
