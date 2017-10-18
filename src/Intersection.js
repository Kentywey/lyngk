"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function () {
    var etatActuel;
    var couleur;
    var nbPiece;

    this.init = function () {
        etatActuel = Lyngk.State.VACANT;
    };

    this.init();

    this.get_etatActuel = function () {
        return etatActuel;
    };

    this.get_couleur = function(){
        return couleur;
    };

    this.pose = function (piece) {
        if (etatActuel == Lyngk.State.VACANT) {
            etatActuel = Lyngk.State.ONE_PIECE;
            nbPiece = 1;
        }
        else {
            etatActuel = Lyngk.State.STACK;
            nbPiece++;
        }
        couleur = piece.get_couleur();
    };
};