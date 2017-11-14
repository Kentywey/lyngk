"use strict";

// enums definition
Lyngk.Couleur = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {
    var intersections = [];

    this.init = function () {
        for (var i = 0; i < 9; i++) {
            this.initBoard(i);
        }
    };

    this.initBoard = function(i) {
        var lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        for (var j = 1; j <= 9; j++) {
            var coordonne = new Lyngk.Coordinates(lettres[i], j);
            if (coordonne.isValid()) {
                var intersection = new Lyngk.Intersection();
                intersection.setCoordinate(coordonne);
                var piece = new Lyngk.Piece();
                piece.addColorInit(intersections);
                intersection.pose(piece);
                intersections.push(intersection);
            }
        }
    };

    this.init();

    this.getIntersections = function () {
        return intersections;
    };


    this.getIndexIntersections = function (coordInt) {
        for (var i = 0; i < intersections.length; i++) {
            var test = intersections[i].getCoordinate().toString();
            if (test === coordInt.toString()) {
                return i;
            }
        }
    };


    this.deplacer = function (coordA, coordB) {

        var lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        var diffLettres = lettres.indexOf(coordA[0])-lettres.indexOf(coordB[0]);
        var diffNombres = parseInt(coordA[1]) - parseInt(coordB[1]);

        if (intersections[this.getIndexIntersections(coordB)].getActualState() !== Lyngk.State.VACANT
            && ((Math.abs(diffLettres) === 1 && Math.abs(diffNombres) === 0)
                || (Math.abs(diffLettres) === 0 && Math.abs(diffNombres) === 1)
                || diffLettres === 1 && diffNombres === 1
                || diffLettres === -1 && diffNombres === -1)
            && intersections[this.getIndexIntersections(coordA)].getActualState() !== Lyngk.State.FULL_STACK){
            intersections[this.getIndexIntersections(coordA)].retirer(intersections[this.getIndexIntersections(coordB)]);
        }
    };

};