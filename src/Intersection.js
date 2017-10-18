"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function () {
    var etatActuel;

    this.init = function () {
        etatActuel = Lyngk.State.VACANT;
    };

    this.init();

    this.get_etatActuel = function () {
        return etatActuel;
    };
};