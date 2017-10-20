
var chiffre = +lire("un nombre"); // le symbole + convertit le texte en nombre
ecrire(10 + chiffre);


var nombre = +12;

ecrire("Mon deuxième programme en JavaScript !");

var texte = "12";
var nombre = 12;
var test = true;

ecrire(texte);
ecrire(nombre);
ecrire(test);

nombre = 5;
ecrire(nombre);

var nb = lire("Choisir un nombre : ");
ecrire("le nombre est " + nb);

// ecrire un nom et un prenom

var prenom, nom;

prenom = lire("Votre prénom :");
nom = lire("Votre nom :");

ecrire(prenom.length);

if (prenom == "Marc" || nom == "Leblanc") {
    ecrire("Salut Marco !")
} else {
    ecrire("Bonjour " + prenom + " " + nom);
}



// conditions

var premiere = prenom.charAt(0);

ecrire("Bonjour Marc Leblanc");
ecrire("Bonjour N. Leblanc");




var i, resultat;
for (var i = 0; i <= 10; i++) {
    resultat = i * 7;
    ecrire(i + " x 7 = " + resultat);
}
/*
ecrire("0 x 7 = 0");
ecrire("1 x 7 = 7");
ecrire("2 x 7 = 14");
... 
ecrire("10 x 7 = 70");
*/

/*
nombreAtrouver = 4
un nombre ? 6
trop grand
un nombre ? 3
trop petit
un nombre ? 4
Gagné !
*/
var nombre = Math.ceil(Math.random() * 10);

var valeur = lire("un nombre ?");

if (valeur < nombre) {
    ecrire("trop petit !");
} else {
    ecrire("trop grand !");
}
var valeur = lire("un autre nombre ?");

if (valeur < nombre) {
    ecrire("trop petit !");
} else {
    ecrire("trop grand !");
}
var valeur = lire("un nombre ?");


if (valeur != nombre) {
    ecrire("perdu !");
}
if (valeur == nombre) {
    ecrire("gagné !");
} else {
    if (valeur < nombre) {
        ecrire("trop petit !");
    } else {
        ecrire("trop grand !");
    }
}
var nb = 1;
while (nb < 100) {
    ecrire(nb);
    nb = nb * 2;
}