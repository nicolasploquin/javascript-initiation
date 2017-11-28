var personneXML;
var inputFile = document.querySelector('input[type="file"]');
inputFile.addEventListener("change", function(event){
    var reader = new FileReader();
    reader.onload = function(){
        personneXML = reader.result;
        afficheXML();
    };
    reader.readAsText(inputFile.files[0]);

});

function afficheXML(){
    var oParser = new DOMParser();
    var oDOM = oParser.parseFromString(personneXML, "text/xml");
    // print the name of the root element or error message
    console.log(oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);
    console.dir(oDOM);
    var prenom = oDOM.getElementsByTagName("prenom")[0].textContent;
    console.log(prenom);
}