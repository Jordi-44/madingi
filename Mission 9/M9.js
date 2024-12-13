//Jordi Madingi
function corrige(){window.location.href="reponse.html";} //Cette fonction sert a faire la connexion avec la page html de la correction

function testqcm() {
//je déclare une fonction testqcm que je connecte au bouton testqcm
    const reponses = {
        // Je déclare une variable qui va contenir toute les bonne réponse 
        q1: "1", q2: "1", q3: "1,2", q4: "1",
        q5: "1", q6: "1", q7: "1,2,3", q8: "1",
        q9: "2", q10: "2,3"
    };

    let score = 0; // ce let score va etre initialement a zéro 

    for (let question in reponses) {
        // je créer une boucle for qui va me servir a récupérer les valeur des input checkbox
        const valeursCochees = Array.from(document.querySelectorAll(`input[name="${question}"]:checked`))
                                   .map(input => input.value).join(",");
        if (valeursCochees === reponses[question]) score++; // Ici si valeur cocher est bon alors le score augmente 
    }

    alert(`Score : ${score}/${Object.keys(reponses).length}`); // ici je créer la réponse avec le score d" l'utilisateur lorsqu'il a fini le quizz
}

function effacer(){
    //Dans cette fonction on a location.reload() qui sert a refresh la page   
    location.reload(); 

}


