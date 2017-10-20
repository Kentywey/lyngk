"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

//Constructeur d'une intersection
Lyngk.Intersection = function () {
    var etatActuel;
    var couleur;
    var piece=[];
    var coordonne;

    // De base etat = VACANT
    this.init = function () {
        etatActuel = Lyngk.State.VACANT;
    };

    this.init();

    // Getter & Setter
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
        return coordonne;
    };

    this.set_coordonne = function(co){
        this.coordonne = co;
    };

    this.get_hauteur = function () {
        return piece.length;
    };

    // Pose une piece, en quand d'intersection complete, FULL_STACK, si initialiser : VACANT, si une pice = ONE_PIECE
    this.pose = function (p) {
        if(etatActuel != Lyngk.State.FULL_STACK){
            if(etatActuel == Lyngk.State.VACANT){
                etatActuel = Lyngk.State.ONE_PIECE;
                piece.push(p);
            }
            else{
                etatActuel = Lyngk.State.STACK;
                piece.push(p);
                if(piece.length == 5){
                    etatActuel = Lyngk.State.FULL_STACK;
                }
            }
            couleur = p.get_couleur();
        }
    };



};