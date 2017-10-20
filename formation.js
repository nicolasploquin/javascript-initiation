"use strict";
function ecrire(texte) {
	document.body.innerHTML += texte + "<br/>";
}
function lire(texte) {
	var saisie = prompt(texte);
	return saisie;
}

