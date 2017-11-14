"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

//Constructeur d'une intersection
Lyngk.Intersection = function () {
    var actualState;
    var piece = [];


    // De base etat = VACANT
    this.init = function () {
        actualState = Lyngk.State.VACANT;
    };

    this.init();

    // Getter & Setter
    this.getActualState = function () {
        return actualState;
    };

    /**
     * this.set_etatActuel= function(state){
        actualState = state;
    };
     * @param state
     */


    this.getColor = function () {
        return piece[piece.length - 1].getColor();
    };

    this.getPieces = function () {
        return piece;
    };

    this.getCoordinate = function () {
        return this.coordonne;
    };


    this.setCoordinate = function (co) {
        this.coordonne = co;
    };

    this.getHeight = function () {
        return piece.length;
    };

    this.pose = function (p) {
        if (actualState !== Lyngk.State.FULL_STACK) {
            piece.push(p);
            if (piece.length >= 3) {
                actualState = piece.length - Math.floor(piece.length / 2);
            }
            else {
                actualState = piece.length;
            }
        }
    };

    this.retirer = function (intersection) {
        actualState = Lyngk.State.VACANT;
        for (var i = 0; i < piece.length; i++) {
            intersection.pose(piece[i]);
        }
        while (piece.length > 0) {
            piece.pop();
        }
    };

};