"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

//Constructeur d'une intersection
Lyngk.Intersection = function () {
    var etatActuel;
    var couleur;
    var nbPiece;

    // De base etat = VACANT
    this.init = function () {
        etatActuel = Lyngk.State.VACANT;
    };

    this.init();

    // Getter
    this.get_etatActuel = function () {
        return etatActuel;
    };

    this.set_etatActuel= function(state){
        etatActuel = state;
    };


    this.get_couleur = function(){
        return couleur;
    };

    this.get_pieces = function(){
        return pieces;
    };

    this.get_coordonne = function(){
        return coordone;
    };

    this.set_coordonne = function(co){
        this.coordonne = co;
    };

    // Pose une piece, en quand d'intersection complete, FULL_STACK, si initialiser : VACANT, si une pice = ONE_PIECE
    this.pose = function (piece) {
        if(etatActuel != Lyngk.State.FULL_STACK){
            if(etatActuel == Lyngk.State.VACANT){
                etatActuel = Lyngk.State.ONE_PIECE;
                nbPiece = 1;
            }
            else{
                etatActuel = Lyngk.State.STACK;
                nbPiece++;
                if(nbPiece == 5){
                    etatActuel = Lyngk.State.FULL_STACK;
                }
            }
            couleur = piece.get_couleur();
        }
    };



};