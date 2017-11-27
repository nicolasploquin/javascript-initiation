
class Personne {

    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaiss = new Date();
    }

    get nom(){
        return this._nom;
    }

    get prenom(){
        return this._prenom;
    }

    set nom(nom){
        this._nom = nom.toUpperCase();
    }

    set prenom(prenom){
        this._prenom = prenom.charAt(0).toUpperCase()+prenom.substring(1).toLowerCase();
    }

    calculerAge(){
        return 40;
    }

    toString(){
        return `${this.prenom} ${this.nom}`;
    }
}


let pers1 = new Personne("leblanc", "marc");
ecrire(pers1);

