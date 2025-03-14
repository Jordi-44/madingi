<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Connexion</title>
</head>
<body>





<div class="container">
        <div class="left">
            <h1>Bienvenue sur Analogue Drum</h1>
            <img src="../img/d06da9a70e13878c0e44bdbd1b96ac89.jpg" class="pic" alt="main-photo" >

        </div>
        <div class="right">
            <h2>Connecter vous</h2>
            <form action="login.php" method="post">
                <label for="email"><p class="mail">Veuillez entrer votre login : </p></label>
                <input type="email" name="login" class="login" placeholder="producer@gmail.com">
                
                <label for="password"><p class="mdp">Veuillez entrer votre mot de passe : </p></label>
                <input type="password" class="mdp" name="mdp" placeholder="********">
                
                    <button><strong>CONNEXION</strong></button>
                
                <p class="signup">
                    Vous avez pas de compte? <a href="#">Inscrivez vous.</a></p>
                    <div class="pascompte">
                        <a href="abonnement.php">Se souscrire à l'abonnement mensuel.</a><br>
               
                    </div>
            

                
                </div>
            </form>
        </div>
    </div>
</body>
</html>