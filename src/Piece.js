"use strict";

Lyngk.NbCouleur = {BLACK: 8, IVORY: 8, BLUE: 8, RED: 8, GREEN: 8, WHITE: 3};
// Constructeur + Getter & Setter
Lyngk.Piece = function () {
    var couleur;

    this.set_couleur = function(c){
        couleur = c;
    };

    this.get_couleur = function () {
        return couleur;
    };

    this.addColorInit = function(intersections){
        var nbBlack = 0;
        var nbBlue = 0;
        var nbRed = 0;
        var nbIvory= 0;
        var nbGreen = 0;
        var nbWhite = 0;
        for (var i = 0 ; i < intersections.length ; i++) {
            if (intersections[i].get_couleur() === Lyngk.Couleur.BLACK)
                nbBlack++;
            if (intersections[i].get_couleur() === Lyngk.Couleur.BLUE)
                nbBlue++;
            if (intersections[i].get_couleur() === Lyngk.Couleur.RED)
                nbRed++;
            if (intersections[i].get_couleur() === Lyngk.Couleur.IVORY)
                nbIvory++;
            if (intersections[i].get_couleur() === Lyngk.Couleur.GREEN)
                nbGreen++;
            if (intersections[i].get_couleur() === Lyngk.Couleur.WHITE)
                nbWhite++;
        }

        var test = false;
        while(!test){
            var colorAlea = Math.floor(Math.random() * (5+1));

            if(colorAlea === Lyngk.Couleur.BLACK && nbBlack < Lyngk.NbCouleur.BLACK) {
                this.set_couleur(Lyngk.Couleur.BLACK);
                test = true;
            }
             if(colorAlea === Lyngk.Couleur.BLUE && nbBlue < Lyngk.NbCouleur.BLUE) {
                this.set_couleur(Lyngk.Couleur.BLUE);
                test = true;
            }
             if(colorAlea === Lyngk.Couleur.RED && nbRed < Lyngk.NbCouleur.RED) {
                this.set_couleur(Lyngk.Couleur.RED);
                test = true;
            }
             if(colorAlea === Lyngk.Couleur.IVORY && nbIvory < Lyngk.NbCouleur.IVORY) {
                this.set_couleur(Lyngk.Couleur.IVORY);
                test = true;
            }
             if(colorAlea === Lyngk.Couleur.GREEN && nbGreen < Lyngk.NbCouleur.GREEN) {
                this.set_couleur(Lyngk.Couleur.GREEN);
                test = true;
            }
             if(colorAlea === Lyngk.Couleur.WHITE && nbWhite < Lyngk.NbCouleur.WHITE) {
                this.set_couleur(Lyngk.Couleur.WHITE);
                test = true;
            }

        }



    };


};
