"use strict";

Lyngk.Couleur = {IVOIRE : 0 , BLEU : 1 , ROUGE : 2 , NOIR : 3 , VERT : 4};

Lyngk.Piece = function () {
    var couleur;

    this.set_couleur = function(c){
        couleur = c;
    };

    this.get_couleur = function () {
        return couleur;
    };


};
