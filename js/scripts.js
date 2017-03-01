function rysujZnaki(x, c) {
    var gwiazdka = "";
    for (var i = 1; i <= x; i++) {
        gwiazdka = gwiazdka.concat(c);
    }
    return gwiazdka;
}

function rysujChoinke(y) {
    for (var i = 1; i <= y; i++) {
        console.log(rysujZnaki(y - i, " ") + rysujZnaki(i * 2 - 1, "*"))
    }
}

rysujChoinke(7);