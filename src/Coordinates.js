"use strict";

Lyngk.Coordinates = function (c, l) {

    this.is_valid = function () {

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

        return tableauJeux[l - 1].indexOf(c) !== -1;
    };

    /**
     * this.toString = function () {
        if (this.is_valid())
            return c + l;
        else
            return "Erreur";
    }
     */
        this.toString = function () {
        if (this.is_valid())
            return c + l;
        else
            return "invalid";
    }

};
