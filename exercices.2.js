
var resultat = carre(4);
ecrire(resultat);

direBonjour("Marc");
direBonjour("Laurent");
direBonjour("Benoit");
direBonjour("John");





/*
nombreAtrouver = 4
un nombre ? 6
trop grand
un nombre ? 3
trop petit
un nombre ? 4
Gagné !
*/



/* Exercice 3b */

var nombre = Math.ceil(Math.random() * 10);

do {
    var valeur = lire("un nombre de 1 à 10 ?");
    if (valeur < nombre) {
        ecrire("Trop petit !");
    } else if (valeur > nombre) {
        ecrire("Trop grand !");  
    }   
} while(valeur != nombre);

ecrire("C'est gagné !");


var nb = 1;

switch(nb){
    case 0:
        ecrire("zéro");
        break;
    case 1:
        ecrire("un");
        break;
    default:
        ecrire("je ne connais pas ce chiffre");
}

var tab = [5,2,1,8,0,7,9,4,6,3];

ecrire(tab);

var somme = 0;
for (var i = 0; i < tab.length; i++) {
    somme = tab[i] + somme;
    ecrire(somme);
}
ecrire(somme);
ecrire(somme/tab.length);

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




