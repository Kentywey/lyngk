'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");

// Story 1
LyngkTestCase.prototype.testStory1 = function () {
    var coordinates = new Lyngk.Coordinates("A", 1);

    assertFalse(coordinates.isValid());
};

// Story 2
LyngkTestCase.prototype.testStory2 = function () {
    var tableauLettre = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    var tableauNombre = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var coordonneOK = 0;

    for (var i = 0; i < tableauLettre.length; i++) {
        for (var j = 0; j < tableauNombre.length; j++) {
            var coordonne = new Lyngk.Coordinates(tableauLettre[i], tableauNombre[j]);

            if (coordonne.isValid()) {
                coordonneOK++;
            }
        }
    }
    assertEquals(43, coordonneOK);
};

// Story 3
LyngkTestCase.prototype.testStory3 = function () {

    var coordonne = new Lyngk.Coordinates("A", 3);
    assertEquals("A3", coordonne);
};

// Story 4
LyngkTestCase.prototype.testStory4 = function () {

    var coordonne = new Lyngk.Coordinates('A', 1);
    assertEquals("invalid", coordonne);

};

// Story 5
LyngkTestCase.prototype.testStory5 = function () {
    var coordonne = new Lyngk.Coordinates('A', 3);
    var coordonneClone = coordonne.clone();
    assertEquals("A", coordonneClone.getLettre());
    assertEquals("3", coordonneClone.getNumero());
};

// Story 6
LyngkTestCase.prototype.testStory6 = function () {
    var lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    var tabEntier = new Array();
    for (var i = 0; i < 9; i++) {
        for (var j = 1; j <= 9; j++) {
            var entierTest = (new Lyngk.Coordinates(lettres[i], j)).hash();
            if (entierTest != 0 && tabEntier.indexOf(entierTest) == -1) {
                tabEntier.push(entierTest);
            }
        }
    }
    assertEquals(9, tabEntier.length);
};

// Story 7
LyngkTestCase.prototype.testStory7 = function () {
    var intersection = new Lyngk.Intersection();
    assertEquals(Lyngk.State.VACANT, intersection.getActualState());
};

// Story 8
LyngkTestCase.prototype.testStory8 = function () {
    var piece = new Lyngk.Piece();
    piece.set_couleur(Lyngk.Couleur.BLEU);
    var intersection = new Lyngk.Intersection();
    intersection.pose(piece);
    assertEquals(Lyngk.State.ONE_PIECE, intersection.getActualState());
    assertEquals(Lyngk.Couleur.BLEU, intersection.getColor());
};

// Story 9
LyngkTestCase.prototype.testStory9 = function () {
    var premierePiece = new Lyngk.Piece();
    premierePiece.set_couleur(Lyngk.Couleur.BLEU);
    var deuxiemePiece = new Lyngk.Piece();
    deuxiemePiece.set_couleur(Lyngk.Couleur.ROUGE);
    var intersection = new Lyngk.Intersection();
    intersection.pose(premierePiece);
    intersection.pose(deuxiemePiece);

    assertEquals(Lyngk.State.STACK, intersection.getActualState());
    assertEquals(Lyngk.Couleur.ROUGE, intersection.getColor());
};

// Story 10
LyngkTestCase.prototype.testStory10 = function () {
    var piece = new Lyngk.Piece();
    piece.set_couleur(Lyngk.Couleur.BLEU);
    var intersection = new Lyngk.Intersection();
    for (var i = 0; i < 5; i++) {
        intersection.pose(piece);
    }

    assertEquals(Lyngk.State.FULL_STACK, intersection.getActualState());
};

LyngkTestCase.prototype.testStory11 = function () {
    var engine = new Lyngk.Engine();
    var intersections = engine.getIntersections();
    var test;
    for (var i = 0; i < intersections.length; i++) {
        if (intersections[i].getActualState() == Lyngk.State.ONE_PIECE) {
            test = true;
        } else {
            test = false;
            break;
        }
    }

    assertEquals(true, test);
};

LyngkTestCase.prototype.testStory12 = function () {
    var engine = new Lyngk.Engine();
    var nbBlack = 0;
    var nbBlue = 0;
    var nbRed = 0;
    var nbIvory = 0;
    var nbGreen = 0;
    var nbWhite = 0;

    var intersections = engine.getIntersections();
    for (var i = 0; i < intersections.length; i++) {
        if (intersections[i].getColor() === Lyngk.Couleur.BLACK)
            nbBlack++;
        if (intersections[i].getColor() === Lyngk.Couleur.BLUE)
            nbBlue++;
        if (intersections[i].getColor() === Lyngk.Couleur.RED)
            nbRed++;
        if (intersections[i].getColor() === Lyngk.Couleur.IVORY)
            nbIvory++;
        if (intersections[i].getColor() === Lyngk.Couleur.GREEN)
            nbGreen++;
        if (intersections[i].getColor() === Lyngk.Couleur.WHITE)
            nbWhite++;
    }
    var test = false;
    if (intersections.length === 43) {
        if (nbBlack === Lyngk.NbCouleur.BLACK
            && nbBlue === Lyngk.NbCouleur.BLUE
            && nbRed === Lyngk.NbCouleur.RED
            && nbIvory === Lyngk.NbCouleur.IVORY
            && nbGreen === Lyngk.NbCouleur.GREEN
            && nbWhite === Lyngk.NbCouleur.WHITE)
            test = true;
    }
    assertEquals(true, test);
};

LyngkTestCase.prototype.testStory13 = function () {

    var test = false;
    var engine = new Lyngk.Engine();
    var intersections = engine.getIntersections();

    for (var i = 0; i < intersections.length; i++) {
        if (intersections[i].getHeight() == 1) {
            test = true;
        } else {
            test = false;
            break;
        }
    }
    assertEquals(true, test);
};

LyngkTestCase.prototype.testStory14 = function () {

    var test = false;
    var engine = new Lyngk.Engine();
    var intersections = engine.getIntersections();

    for (var i = 0; i < intersections.length; i++) {
        if (intersections[i].getColor() === intersections[i].getPieces()[intersections[i].getHeight() - 1].getColor()) {
            test = true;
        } else {
            test = false;
            break;
        }
    }
    assertEquals(true, test);
};

LyngkTestCase.prototype.testStory15 = function () {

    var engine = new Lyngk.Engine();

    var intersections = engine.getIntersections();
    var indexA3 = engine.getIndexIntersections("A3");
    var indexB3 = engine.getIndexIntersections("B3");

    var ancienneCouleur = intersections[indexA3].getColor();
    var ancienneHauteur = intersections[indexB3].getHeight();

    engine.deplacer("A3", "B3");

    assertTrue(intersections[indexA3].getActualState() === Lyngk.State.VACANT
        && intersections[indexB3].getColor() === ancienneCouleur
        && intersections[indexB3].getHeight() === ancienneHauteur + 1);

};

LyngkTestCase.prototype.testStory16 = function () {
    var engine = new Lyngk.Engine();

    var intersections = engine.getIntersections();
    var indexB3 = engine.getIndexIntersections("B3");
    var indexB2 = engine.getIndexIntersections("B2");

    engine.deplacer("A3", "B3");
    var ancienneCouleurB3 = intersections[indexB3].getColor();
    var ancienneHauteurB2 = intersections[indexB2].getHeight();

    engine.deplacer("B3", "B2");
    assertTrue(intersections[indexB3].getActualState() === Lyngk.State.VACANT
        && intersections[indexB2].getColor() === ancienneCouleurB3
        && intersections[indexB2].getHeight() === 3);
};


LyngkTestCase.prototype.testStory17 = function () {
    var engine = new Lyngk.Engine();

    engine.deplacer("B3", "B2");
    engine.deplacer("B2", "B3");

    var intersections = engine.getIntersections();
    assertTrue(intersections[engine.getIndexIntersections("B3")].getActualState() === Lyngk.State.VACANT)
};


LyngkTestCase.prototype.testStory18 = function () {
    var engine = new Lyngk.Engine();

    engine.deplacer("C2", "B3");

    var intersections = engine.getIntersections();
    assertTrue(intersections[engine.getIndexIntersections("B3")].getActualState() === Lyngk.State.ONE_PIECE
        && intersections[engine.getIndexIntersections("C2")].getActualState() === Lyngk.State.ONE_PIECE);
};


LyngkTestCase.prototype.testStory19 = function () {
    var engine = new Lyngk.Engine();


    engine.deplacer("I7", "H6");
    engine.deplacer("H6", "H5");

    var intersections = engine.getIntersections();
    var etatH5 = intersections[engine.getIndexIntersections("H5")].getActualState();

    engine.deplacer("H5", "H8");
    assertTrue(intersections[engine.getIndexIntersections("H5")].getActualState() === etatH5);
    engine.deplacer("H5", "F5");
    assertTrue(intersections[engine.getIndexIntersections("H5")].getActualState() === etatH5);
    engine.deplacer("H5", "F3");
    assertTrue(intersections[engine.getIndexIntersections("H5")].getActualState() === etatH5);
};


LyngkTestCase.prototype.testStory20 = function () {
    var engine = new Lyngk.Engine();
    var intersections = engine.getIntersections();
    engine.deplacer("A3", "B3");
    engine.deplacer("B3", "B2");
    engine.deplacer("B2", "C2");
    engine.deplacer("C2", "D2");
    engine.deplacer("D2", "E2");
    assertTrue(intersections[engine.getIndexIntersections("E2")].getActualState() === Lyngk.State.ONE_PIECE);

};