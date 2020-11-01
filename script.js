var fris = Number(1.20), bier = Number(2.30), wijn = Number(4.10);
var bestelling, quantity;
var totaalBestelling = quantity * bestelling;
var aantalBitterballen;
var bitterbalschalen;

function klantBestelling() {
    while(!bestelling) {
	    bestelling = prompt("Geef een bestelling op. fris, bier, wijn of bitterballen");
        bestelling = bestelling.toLowerCase();          
        if(bestelling === 'stop') {
            alert("je bent gestopt");
            bon();
            break; 
        } else if(bestelling !== 'fris' && bestelling !== 'bier' && bestelling !== 'wijn' && bestelling !== 'snack') {
            alert("Ongeldige bestelling. fris, bier, wijn of bitterballen"); 
            bestelling = false;
            if(bestelling === 'snack') {
            	aantalBitterballen = prompt("Hoeveel bitterballen wilt u  toevoegen (8 of 16)?");
                bitterbalschalen = prompt("Hoeveel bitterbalschalen van " + aantalBitterballen + " stuks wilt u bestellen?");
                bestelling();
            } 
        } else { 
            klantQuantity();
            break;
        };
    };
};
function klantQuantity() {
	while(!quantity) {
		quantity = prompt("Hoeveel " + bestelling + " wilt u bestellen?");
        quantity = quantity.toLowerCase();       
	    if(quantity === 'stop') {
	        alert("je bent gestopt");
	        bon();
	        break; 
	    } else if(!quantity.match(/^\d+$/)) {
	        alert(`Incorrect number.`); 
	        quantity = false; 
	    } else { 
            alert("Je hebt " + quantity + "x " + bestelling + " besteld.");
	        bestelling = false, quantity = false;
	        klantBestelling();
	        break;
	    };
	};
};
function bon() {
	document.write("hier is uw bon" + "<br");
	document.write(quantity + " x " + bestelling + " = " + totaalBestelling);
}
klantBestelling();