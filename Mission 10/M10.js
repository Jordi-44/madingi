//Jordi Madingi
function Total() {
    // dans la fonction total je déclare une variable lignes qui va cibler "tbody tr"
    const lignes = document.querySelectorAll("tbody tr");


    lignes.forEach((ligne) => {
        //Cette fonctioon sert a parcourir les class qte, prix leur donner une valeur et la classe total 
        
        const qte = ligne.querySelector(".qte").value; 
        const prix = ligne.querySelector(".prix").value; 
        const total = ligne.querySelector(".total"); 

        //je déclare une variable qui va calculer qte et prix 
         const montant = (parseFloat(qte) || 0) * (parseFloat(prix) || 0);

        //Cette variable va donner la variable montant
        total.value = montant.toFixed(2);
    });
}


function ajouterLigne() {
    var a = document.querySelector(".desc").value; 
var b = document.querySelector(".qte").value; 
var c = document.querySelector(".prix").value; 
var d = document.querySelector(".total").value;

// Avec ce if je vérifie si les champs sont rempli
if (a == "" || b == "" || c == "" || d == "") {
    alert("Un ou plusieurs champs sont vides !");
    return; // le returne sert a arreter la fonction si un champ est vide
}

// dans cette variable je récupere le tableau
var table = document.getElementById("table_inv");

// Cette fonction va servir a insérer une nouvelle ligne 
var newRow = table.insertRow(-1); // le "-1" sert a inserer la nouvelle ligne a la derniere ligne du tableau


var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);

// Par ses variables j'insere des données dans la nouvelle ligne
cell1.innerHTML = a; 
cell2.innerHTML = b; 
cell3.innerHTML = c; 
cell4.innerHTML = d; 
}







function annuller(){
//Fonction avec "location.reload" a l'intérieur qui sert réinstalliser la page 
    location.reload(); 

}








function sousTotal(){


}



function sousTotalMoins(){

}




function taxeTotal(){

}


function solde(){

}   

