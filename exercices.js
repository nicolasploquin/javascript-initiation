
var resultat = carre(4);
ecrire(resultat);

direBonjour("Marc");
direBonjour("Laurent");
direBonjour("Benoit");
direBonjour("John");

function direBonjour(nom){
    if(nom == "John"){
        ecrire("Hello " + nom);
    }else{
        ecrire("Bonjour " + nom);
    }
}

function carre(val){
    return val * val;
}

function tableMult(nombre){

    ecrire("");
    ecrire(" --- Table de " + nombre + " ---");
    
    var i, resultat;
    for (var i = 0; i <= 10; i++) {
        resultat = i * nombre;
        ecrire(i + " x " + nombre + " = " + resultat);
    }
    
}

// tableMult(5);
// tableMult(3);
// tableMult(9);

var message = "du texte à afficher...";

ecrire(message);

message = message.toUpperCase();

ecrire(message);

var tab = message.split(" ");
for(var i = 0; i < tab.length; i++){
    ecrire(tab[i].toLowerCase())
}

function majNom(prenom, nom){

    var premiere = prenom.charAt(0).toUpperCase();
    var reste = prenom.substring(1).toLowerCase();

    nom = nom.toUpperCase();

    return premiere + reste + " " + nom;
}

var nom1 = majNom("mARc", "LeBLanc"); // Marc LEBLANC

ecrire(nom1);


function minimum(tabNombre){
    var min = Number.MAX_VALUE;

    for(var i=0; i < tabNombre.length; i++){

        if ( tabNombre[i] < min ){
            min = tabNombre[i];
        }

    }

    return min;
}


ecrire( minimum( [3,9,2,4] ) );
ecrire( minimum( [3,9,2,4,-5,24] ) );

ecrire( Math.min(3,9,2,4) );
ecrire( Math.min(...[3,9,2,4]) );


function sapin(taille){
    var pied;
    for (var i = 1; i <= taille; i++) {
        var branche = "";
        for(var j = 0; j < taille - i; j++){
            branche = branche + " ";
        }
        for(var j = 0; j < (2*i-1); j++){
            branche = branche + "*";
        }
        ecrire(branche);
        if(i == Math.floor(taille/10)+1) pied = branche;
    }
    for(var j = 0; j < Math.floor(taille/10)+1; j++){
        ecrire(pied);
    }
}

sapin(3);
ecrire("");
sapin(12);