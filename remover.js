/**
 * Developed By Ayman Abo El Azm
 * Simple Enough ;)
 */

setInterval(removeMarketPlace, 1000); // Check every second - decreasing the number costs alot of cpu and memory usage.

function removeMarketPlace() {
    var marketPlace = document.getElementById('rightCol');
    if(marketPlace != null) {
        marketPlace.style.visibility = 'hidden';
    }
}
