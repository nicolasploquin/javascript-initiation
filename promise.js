
class Personne {
    nom = "";
    prenom = "";
    dateNaiss = new Date();
    

    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    calculerAge(){
        return 40;
    }
}

function Après(){
    this.traitementSuivant = function(){};
    this.enregistrerSuivant = function(fonction){
        this.traitementSuivant = fonction;
    };
}

function addition(a,b){

    var attente = new Après();

    var temps = Math.random()*20000;
    setTimeout(function(){
        attente.traitementSuivant(a+b);
    },temps);

    return attente;

}

var attente = addition(2,4);
attente.enregistrerSuivant(function(resultat){
    ecrire(resultat);
    var attente2 = addition(4,8);
    attente2.traitementSuivant = ecrire;
});



