"use strict";

// enums definition
Lyngk.Couleur = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {
    var intersections = [];

    this.init = function(){
        var lettres = ["A", "B", "C", "D", "E", "F", "G","H", "I"];
        for(var i = 0 ; i < 9 ; i++) {
            for (var j = 1; j <= 9; j++) {
                var coordonne = new Lyngk.Coordinates(lettres[i], j);
                if (coordonne.is_valid()) {
                    var intersection = new Lyngk.Intersection();
                    intersection.set_coordonne(coordonne);
                    var piece = new Lyngk.Piece();
                    piece.addColorInit(intersections);
                    intersection.pose(piece);
                    intersections.push(intersection);
                }
            }
        }
    };

    this.init();

    this.get_intersections = function(){
        return intersections;
    }
};