'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.testStory1 = function () {
    var coordinates = new Lyngk.Coordinates("A", 1);

    assertFalse(coordinates.is_valid());
};

LyngkTestCase.prototype.testStory2 = function () {
    var tableauLettre = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    var tableauNombre = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var coordonneOK = 0;

    for (var i = 0; i < tableauLettre.length; i++) {
        for (var j = 0; j < tableauNombre.length; j++) {
            var coordonne = new Lyngk.Coordinates(tableauLettre[i], tableauNombre[j]);

            if (coordonne.is_valid()) {
                coordonneOK++;
            }
        }
    }
    assertEquals(43, coordonneOK);
};

LyngkTestCase.prototype.testStory3 = function() {

    var coordonne = new Lyngk.Coordinates("A",3);
    assertEquals("A3", coordonne);
};

LyngkTestCase.prototype.testStory4 = function() {

    var coordonne = new Lyngk.Coordinates('A', 1);
    assertEquals("invalid", coordonne);

};

LyngkTestCase.prototype.testStory5 = function() {
    var coordonne = new Lyngk.Coordinates('A', 3);
    var coordonneClone = coordonne.clone();
    assertEquals("A", coordonneClone.getLettre());
    assertEquals("3", coordonneClone.getNumero());
};

LyngkTestCase.prototype.testStory6 = function(){
    var lettres = ["A", "B", "C", "D", "E", "F", "G","H", "I"];
    var tabEntier = new Array();
    for(var i = 0 ; i < 9 ; i++) {
        for (var j = 1; j <= 9; j++) {
            var entierTest = (new Lyngk.Coordinates(lettres[i], j)).hash();
            if (entierTest != 0 && tabEntier.indexOf(entierTest) == -1) {
                tabEntier.push(entierTest);
            }
        }
    }
    assertEquals(9, tabEntier.length);
};

LyngkTestCase.prototype.testStory7 = function(){
    var intersection = new Lyngk.Intersection();
    assertEquals(Lyngk.State.VACANT, intersection.get_etatActuel());
};

LyngkTestCase.prototype.testStory8 = function(){
    var piece = new Lyngk.Piece();
    piece.set_couleur(Lyngk.Couleur.BLEU);
    var intersection = new Lyngk.Intersection();
    intersection.pose(piece);
    assertEquals(Lyngk.State.ONE_PIECE, intersection.get_etatActuel());
    assertEquals(Lyngk.Couleur.BLEU , intersection.get_couleur());
};

LyngkTestCase.prototype.testStory9 = function() {
    var PremierePiece = new Lyngk.Piece();
    PremierePiece.set_couleur(Lyngk.Couleur.BLEU);
    var deuxiemePiece = new Lyngk.Piece();
    deuxiemePiece.set_couleur(Lyngk.Colors.ROUGE);
    var intersection = new Lyngk.Intersection();
    intersection.pose(PremierePiece);
    intersection.pose(DeuxiemePiece);

    assertEquals(Lyngk.State.STACK, intersection.get_etatActuel());
    assertEquals(Lyngk.Couleur.ROUGE , intersection.get_couleur());
};