// algo du musée


// On définie les variables
var tarifAdulte = 10;
var tarifEnfant = 8;
var ageAdulte = 15;
var ageEnfant = 6;
var ticketPrice = '';
var nbBillet = 4;

function controle() {

    //On récupère la valeur rentré dans le champs de texte
    var response = document.getElementById("input").value;

    //Conditions  distributions de bilets
    if (nbBillet > 0) {
        if (response >= ageAdulte) {
            ticketPrice = `Le prix de votre billet est de ${tarifAdulte} €`;
            ticketPrice = " Le prix de votre billet sera de " + tarifAdulte + " € ";
        } else if (response < 15 && response >= 6) {
            ticketPrice = `Le prix de votre billet est de ${tarifEnfant} €`;
        } else {
            ticketPrice = 'Le prix du billet est gratuit';
        }

        //Affichage des du Prix celon l'age et du nombre de ticket restant
        document.getElementById("demo").innerHTML = ticketPrice;
        document.getElementById("demo2").innerHTML = nbBillet;
        nbBillet--;
    } else {
        //si il n'y a plus de tickets
        document.getElementById("demo2").innerHTML = "Billet épuisée";
    }



}