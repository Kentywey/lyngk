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
    };


    this.get_indexIntersections = function(coordInt) {
        for(var i=0; i< intersections.length; i++){
            if(intersections[i].get_coordonne().toString() === coordInt.toString()){
                return i;
            }
        }
    };


    this.deplacer = function (coordA, coordB){
        var etatVacant = Lyngk.State.VACANT;
        if(!(intersections[this.get_indexIntersections(coordB)].get_etatActuel() === Lyngk.State.VACANT))
            intersections[this.get_indexIntersections(coordA)].retirer(intersections[this.get_indexIntersections(coordB)])
    };
};