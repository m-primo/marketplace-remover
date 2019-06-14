/**
    * Developed By Ayman Abo El Azm
    * Simple Enough ;)
*/

// Check every 3 seconds for market place
// decreasing the number causes more CPU & memory usage.
setInterval(removeMarketPlace, 3000);

function removeMarketPlace() {
    var marketPlace = document.getElementById('rightCol');
    if(marketPlace != null) {
        console.log('Market Place detected. Removing...');
        marketPlace.style.visibility = 'hidden';
        console.log('Market Place has been removed.');
    }
}
