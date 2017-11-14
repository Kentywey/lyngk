"use strict";

Lyngk.Coordinates = function (c, l) {

    // Fournis un tableau valid
    var tableauJeux = [];
    tableauJeux[0] = ["C"];
    tableauJeux[1] = ["B", "C", "D", "E"];
    tableauJeux[2] = ["A", "B", "C", "D", "E", "F", "G"];
    tableauJeux[3] = ["B", "C", "D", "E", "F", "G"];
    tableauJeux[4] = ["B", "C", "D", "E", "F", "G", "H"];
    tableauJeux[5] = ["C", "D", "E", "F", "G", "H"];
    tableauJeux[6] = ["C", "D", "E", "F", "G", "H", "I"];
    tableauJeux[7] = ["E", "F", "G", "H"];
    tableauJeux[8] = ["G"];


    this.isValid = function () {
        return tableauJeux[l - 1].indexOf(c) !== -1;
    };

    /** Ancien TOSTRING
     * this.toString = function () {
        if (this.isValid())
            return c + l;
        else
            return "Erreur";
    }
     */

    // Tostring pour retourner "invalid" en cas de mauvaise coordonné
    this.toString = function () {
        if (this.isValid()) {
            return c + l;
        } else {
            return "invalid";
        }
    };


    //GETTER
    this.getLettre = function () {
        return c;
    };

    this.getNumero = function () {
        return l;
    };

    // Permet de clone avec les coordonnées
    this.clone = function () {
        return new Lyngk.Coordinates(this.getLettre(), this.getNumero());
    };

    // Calcul un entier unique selon coordonne
    this.hash = function () {
        var lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        if (this.isValid()) {
            var testLetter = lettres.indexOf(this.getLettre() + 1);
            var testNumber = this.getNumero();
            var resultat = testLetter.toString() + testNumber.toString();
            return parseInt(resultat);
        }
        return 0;
    };
};