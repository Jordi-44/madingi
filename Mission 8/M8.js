// Exercice 1 : Somme
function calculerSomme() {
    // Je déclare les variables a et b qui contiennent chacun des prompt avec les valeur a mettre.
    const a = parseFloat(prompt("Entrez le premier nombre :"));
    const b = parseFloat(prompt("Entrez le deuxième nombre :"));
    // je déclare un if si l'utilisateur ne met pas des valeurs conformes ou aucune valeur.
    if ((a) || (b)) {
        alert("Veuillez entrer des nombres valides.");
        return;
    }
    const resultat = a + b;
    alert(`La somme de ${a} et ${b} est : ${resultat}`);
}
function afficherSolution1() {
    // Je déclare cette variable pour la solution
    const solution = `
function somme(a, b) {
    return a + b;
}`;
    alert(solution);
}


// Exercice 2 : Afficher 1 à 10
function afficherUnADix() {
    // dans cette fonction je déclare un tableau
    const nombres = Array.from({ length: 10 }, (_, i) => i + 1);
    alert(`Les nombres de 1 à 10 sont : ${nombres}`);
}

function afficherSolution2() {
    const solution = `
function afficherUnADix() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}`;
    alert(solution);
}


// Exercice 3 : Trouver le plus grand
function trouverPlusGrand() {
    // Dans cette fonction je déclare deux variables qui contient chacun d'eux des prompt
    const a = parseFloat(prompt("Entrez le premier nombre :"));
    const b = parseFloat(prompt("Entrez le deuxième nombre :"));
    if (isNaN(a) || isNaN(b)) {
        // je déclare le if si l'utilisateur met rien ou met quelque chose d'invalide
        alert("Veuillez entrer des nombres valides.");
        return;
    }
    // Je déclare une variable qui va me servir a comparer les deux nombre et et renvoyer la plus grande 
    const plusGrand = a > b ? a : b;
    alert(`Le plus grand entre ${a} et ${b} est : ${plusGrand}`);
}

function afficherSolution3() {
    const solution = `
function plusGrand(a, b) {
    return a > b ? a : b;
}`;
    alert(solution);
}


// Exercice 4 : Vérifier si un nombre est pair ou impair
function verifierPairImpair() {
    // Dans cette fonction je déclare une variable nombre qui contient un prompt où l'utilisateur va entrer un nombre ou un chiffre avec "parseInt" qui fait en sorte de rendre la chaîne de caractère en numérique, un if qui si l'utilisateur met une chaîne de charactère non valide affiche le message 'chaine de charactère non valide'.
    const nombre = parseInt(prompt("Entrez un nombre :"));
    if (isNaN(nombre)) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }
    // je déclare un if qui contient 'nombre % 2 === 0' le 2% celle ci calcul le reste de la division puis le 0 qui vérifie si c'est égale a zéro pour déduire le pair.
    let resultat;
    if (nombre % 2 === 0) {
        resultat = "pair";
    } else {
        resultat = "impair";
    }
    alert(`Le nombre ${nombre} est ${resultat}.`);
}

function afficherSolution4() {
    const solution = `
    let resultat;
    if (nombre % 2 === 0) {
        resultat = "pair";
    } else {
        resultat = "impair";
    }
}`;
    alert(solution);
}


// Exercice 5 : Calculer le carré d’un nombre
function calculerCarre() {
    // Je déclare une variable nombre, qui contient qui un prompt pour que l'utilisateur mette un nombre ou un chiffre
    const nombre = parseFloat(prompt("Entrez un nombre :"));
    //Je déclare un if si l'utilsateur met une donné non valide.
    if (isNaN(nombre)) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }
    // Je déclare une variable  carre qui va servir a faire la racine carré.
    const carre = nombre * nombre;
    alert(`Le carré de ${nombre} est : ${carre}`);
}

function afficherSolution5() {
    const solution = `
function carre(nombre) {
    return nombre * nombre;
}`;
    alert(solution);
}


// Exercice 6 : Trouver le plus petit parmi trois nombres
function trouverPlusPetit() {
    // Je déclare trois variable avec trois prompt dans laquelle l'utilisateur va inscrire les chiffres. 
    const a = parseFloat(prompt("Entrez le premier nombre :"));
    const b = parseFloat(prompt("Entrez le deuxième nombre :"));
    const c = parseFloat(prompt("Entrez le troisième nombre :"));
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        // Je déclare un if pour que si l'utilisateur met de mauvaise donné.
        alert("Veuillez entrer des nombres valides.");
        return;
    }
    // Je déclare une variable qui va grâce a Math.min va prendre le plus petit chiffre.
    const plusPetit = Math.min(a, b, c);
    alert(`Le plus petit nombre est : ${plusPetit}`);
}

function afficherSolution6() {
    const solution = `
function plusPetit(a, b, c) {
    return Math.min(a, b, c);
}`;
    alert(solution);
}

// Exercice 7 : Afficher un tableau de n nombres consécutifs
function afficherNombres() {
    // Je déclare une fonction dans laquelle je déclare une variable n qui va contenir un prompt pour que l'utilisateur entre les nombres
    const n = parseInt(prompt("Entrez le nombre de nombres à afficher :"));
    // Je déclare un if si l'utlisateur ne met pas de chiffre ou nombre
    if (isNaN(n) || n <= 0) {
        alert("Veuillez entrer un nombre entier.");
        return;
    }
    // Ici je déclare une boucle qui va compter les chiffres un à un.
    const nombres = Array.from({ length: n }, (_, i) => i + 1); 
    alert(`Les ${n} premiers nombres sont : ${nombres}`);
}

function afficherSolution7() {
    const solution = `
function afficherNombres(n) {
    return Array.from({ length: n }, (_, i) => i + 1).join(", ");
}`;
    alert(solution);
}

// Exercice 8 : Vérifier si une chaîne est un palindrome
function verifierPalindrome() {
    const chaine = prompt("Entrez une chaîne de caractères :");
    if (!chaine) {
        alert("Veuillez entrer une chaîne valide.");
        return;
    }
    const estPalindrome = chaine === chaine.split("").reverse().join("");
    alert(`La chaîne "${chaine}" est ${estPalindrome ? "" : "non "}un palindrome.`);
}

function afficherSolution8() {
    const solution = `
function estPalindrome(chaine) {
    return chaine === chaine.split("").reverse().join("");
}`;
    alert(solution);
}


// Exercice 9 : Compter les voyelles dans une chaîne
function compterVoyelles() {
    // Fonction dans laquelle il ya un prompt pour rentrer une chaîne de caractère
    const chaine = prompt("Entrez une chaîne de caractères :").toLowerCase();
    // Un if pour si il entre un autre type de donné que les chaîne de caractère 
    if (!chaine) {
        alert("Veuillez entrer une chaîne valide.");
        return;
    }
    // Je déclare une variable voyelle contient des lettre qui sont des voyelles
    const voyelles = "aeiouy";
    // Une variable qui contient chaine.split.filter qui divise la chaine de caractère en tableau de caractère et garde les caractères qui sont dans une voyelle puis compte qui contient les éléments filtrer.
    const count = chaine.split("").filter(char => voyelles.includes(char)).length;
    alert(`La chaîne "${chaine}" contient ${count} voyelle(s).`);
}

function afficherSolution9() {
    const solution = `
function compterVoyelles(chaine) {
    const voyelles = "aeiouy";
    return chaine.split("").filter(char => voyelles.includes(char)).length;
}`;
    alert(solution);
}



// Exercice 10 : Calculer la factorielle d’un nombre
function calculerFactorielle() {
    // Je déclare une fonction dans laquelle il ya une variable qui contient un prompt dans laquelle 'utilisateur doit entrer des donné
    const n = parseInt(prompt("Entrez un nombre entier :"));
    //Un if si l'utisateur insert de mauvaise donné 
    if (isNaN(n) || n < 0) {
        alert("Veuillez entrer un entier positif.");
        return;
    }
    // une variable qui contient le chiffre 1
    let factorielle = 1;
    // Je déclare une boucle 
    for (let i = 1; i <= n; i++) {
    // la variable factorielle multiplie la valeur par i a chaue itération
        factorielle *= i;
    }
    alert(`La factorielle de ${n} est : ${factorielle}`);
}

function afficherSolution10() {
    const solution = `
function factorielle(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}`;
    alert(solution);
}


// Exercice 11 : Vérifier si un nombre est premier
function verifierNombrePremier() {
    // je déclare une fonction nombre premier dans laquelle je place un prompt n dans laquelle l'utilisateur devra tapr un nombre entier
    const n = parseInt(prompt("Entrez un nombre entier :"));
    if (isNaN(n) || n < 2) {
        // un alert si l'utilisateur place de mauvaise donné par exemple 1
        alert("Veuillez entrer un entier supérieur ou égal à 2.");
        return;
    }
    //
    const estPremier = n > 1 && Array.from({ length: n - 2 }, (_, i) => i + 2).every(x => n % x !== 0);
    alert(`Le nombre ${n} est ${estPremier ? "" : "non "}premier.`);
}

function afficherSolution11() {
    const solution = `
function estPremier(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}`;
    alert(solution);
}



// Exercice 12 : Calculer la moyenne d’un tableau
function calculerMoyenne() {
    const valeurs = prompt("Entrez des nombres séparés par des virgules :").split(",").map(Number);
    if (valeurs.some(isNaN)) {
        alert("Veuillez entrer uniquement des nombres.");
        return;
    }
    //La variable somme va additionner et divise la somme par valeur.length 
    const somme = valeurs.reduce((a, b) => a + b, 0);
    const moyenne = somme / valeurs.length;
    alert(`La moyenne des nombres est : ${moyenne}`);
}

function afficherSolution12() {
    const solution = `
function moyenne(valeurs) {
    const somme = valeurs.reduce((a, b) => a + b, 0);
    return somme / valeurs.length;
}`;
    alert(solution);
}


// Exercice 13 : Trouver la somme des carrés des nombres d’un tableau
function sommeDesCarres() {
    //je déclare la fonction sommeDesCarres dasn laquelle il ya un prompt qui indique a l'utilsateur de mettre des chiffres séparer par virule 
    const valeurs = prompt("Entrez des nombres séparés par des virgules :").split(",").map(Number);
   //Un if si la valeur mise par l'utlisateur est contraire a des nombres 
    if (valeurs.some(isNaN)) {
        alert("Veuillez entrer uniquement des nombres.");
        return;
    }
    //je déclare une variable dans laquelle chaque nombre est élver au carré puis ces carré sont additionnés
    const somme = valeurs.reduce((acc, val) => acc + val ** 2, 0);
    alert(`La somme des carrés est : ${somme}`);
}

function afficherSolution13() {
    const solution = `
function sommeCarres(valeurs) {
    return valeurs.reduce((acc, val) => acc + val ** 2, 0);
}`;
    alert(solution);
}



// Exercice 14 : Afficher les multiples de 3 entre 1 et 100
function afficherMultiplesDeTrois() {
    // je déclare une variable un tableau javascript avec les nombres de 1 a 100 puis le filter va servir a diviser les chiffre nombre divisible par 3
    const multiples = Array.from({ length: 100 }, (_, i) => i + 1).filter(x => x % 3 === 0).join(", ");
    alert(`Les multiples de 3 entre 1 et 100 sont : ${multiples}`);
}

function afficherSolution14() {
    const solution = `
function multiplesDeTrois() {
    return Array.from({ length: 100 }, (_, i) => i + 1).filter(x => x % 3 === 0);
}`;
    alert(solution);
}



// Exercice 15 : Inverser une chaîne de caractères
function inverserChaine() {
    //je déclare une fonction InverserChaine ou il y'aura un prompt dans laquelle l'utilisateur va rentrer une donné
    const chaine = prompt("Entrez une chaîne de caractères :");
    if (!chaine) {
        //Une alerte si l'utilisateur rentre de mauvaise donné 
        alert("Veuillez entrer une chaîne valide.");
        return;
    }
    // je déclare une variable inverse où la variable chaine. est renverser par split.reverse et convertie en chaine 
    const inverse = chaine.split("").reverse().join("");
    alert(`La chaîne inversée est : "${inverse}"`);
}

function afficherSolution15() {
    const solution = `
function inverser(chaine) {
    return chaine.split("").reverse().join("");
}`;
    alert(solution);
}