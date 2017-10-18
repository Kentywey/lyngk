"use strict";

// Defini couleur possible d'une piece
Lyngk.Couleur = {IVOIRE : 0 , BLEU : 1 , ROUGE : 2 , NOIR : 3 , VERT : 4};

// Constructeur + Getter & Setter
Lyngk.Piece = function () {
    var couleur;

    this.set_couleur = function(c){
        couleur = c;
    };

    this.get_couleur = function () {
        return couleur;
    };


};
