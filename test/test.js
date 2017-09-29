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
    var toString="";
    var coordinates = new Lyngk.Coordinates("A",3);
    if (coordinates.is_valid()){
        toString=coordinates.getLettre()+coordinates.getNombre();
    }
    assertEquals("A3",toString);
};