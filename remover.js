/**
 * Developed By Ayman Abo El Azm
 * Simple Enough ;)
 */
setInterval(removeMarketPlace, 10);

function removeMarketPlace () {
    var marketPlace = document.getElementById('rightCol');
    if (marketPlace != null) {
        marketPlace.style.visibility = 'hidden';
    }
}
