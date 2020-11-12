const FRIS = 1.20, BIER = 2.30, WIJN = 4.10, BITTERBALSCHALEN = 2.30;
var bestelling, quantity = true;
var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;
var aantalBitterballen = 0;
var stop = false;

function klantBestelling() {
    while(!stop) {
	    bestelling = prompt("Geef een bestelling op. fris, bier, wijn of snack");
        bestelling = bestelling.toLowerCase();          
        if(bestelling === 'stop') {
            alert("je bent gestopt");
            stop = true;
            bon();        
        } else if(bestelling == 'snack') {
            bitterballen();
        } else if(bestelling !== 'fris' && bestelling !== 'bier' && bestelling !== 'wijn' && bestelling !== 'snack') {
            alert("Ongeldige bestelling. fris, bier, wijn of bitterballen"); 
            bestelling = false;
        } else {
            klantQuantity();
        }   
    }
}
function bitterballen() {
    while(!stop) {
        bitterballen = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
        bitterballen = bitterballen.toLowerCase();
        if (bitterballen == 8 || 16) {
            bitterballen = Number(bitterballen);
            aantalBitterballen = Number(aantalBitterballen);
            aantalBitterballen = prompt("Hoeveel bitterbalschalen van " + bitterballen + " stuks wilt u bestellen?");
            alert("Je hebt " + aantalBitterballen + " bitterbalschalen van " + bitterballen + " bitterballen besteld.");
            break;
        }else {
            alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
            break;
        }
    }
}
function klantQuantity() {
    quantity = true;
	while(!stop) {
		quantity = prompt("Hoeveel " + bestelling + " wilt u bestellen?");
        quantity = quantity.toLowerCase();       
	    if(quantity === 'stop') {
	        alert("je bent gestopt");
            stop = true;
            bon();	        
	    } else if(!quantity.match(/^\d+$/)) { //Kijkt of wat er ingevoerd is wel een getal is.
	        alert(`Incorrect number.`); 
	        quantity = false; 
	    } else { 
            quantity = Number(quantity);
            if(bestelling == 'bier'){
                aantalBier = aantalBier + quantity;
            }
            else if(bestelling == 'fris'){
                aantalFris = aantalFris + quantity;
            }
            else if(bestelling == 'wijn'){
                aantalWijn = aantalWijn + quantity;
            }
            alert("Je hebt " + quantity + "x " + bestelling + " besteld.");
            break;
	    }
	}
}
function bon() {
	document.write("hier is uw bon <br>");
    var totaalPrijsFris = Math.round((aantalFris * FRIS) * 100) / 100; //Mat.round rond Numbers af
    var totaalPrijsBier = Math.round((aantalBier * BIER) * 100) / 100;
    var totaalPrijsWijn = Math.round((aantalWijn * WIJN) * 100) / 100;
    var totaalPrijsBitterballen = Math.round((aantalBitterballen * BITTERBALSCHALEN) * 100) / 100;

    document.write("bier " + aantalBier + " x " + BIER + " = " + totaalPrijsBier + "<br>");
    document.write("fris " + aantalFris + " x " + FRIS + " = " + totaalPrijsFris + "<br>");
    document.write("wijn " + aantalWijn + " x " + WIJN + " = " + totaalPrijsWijn + "<br>");
    document.write("bitterbalschalen " + aantalBitterballen + " x " + BITTERBALSCHALEN + " = " + totaalPrijsBitterballen + "<br>");

    document.write('totaal = ' + (totaalPrijsBier + totaalPrijsWijn + totaalPrijsFris + totaalPrijsBitterballen));
}
klantBestelling();