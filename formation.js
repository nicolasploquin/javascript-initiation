"use strict";
function ecrire(texte) {
	document.body.innerHTML += (texte||"") + "<br/>";
}
function lire(texte) {
	var saisie = prompt(texte);
	if(!isNaN(saisie)) {
		saisie = parseFloat(saisie);
	}
	return saisie;
}

