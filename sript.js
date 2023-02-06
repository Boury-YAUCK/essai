
         function beuss(){
             var nbr, prenom, nom;
             nbr = Number(document.getElementById("a").value);
             prenom= (document.getElementById("pr").value);
             nom =(document.getElementById("n").value);
             if(nbr < 18)
             {
                alert( "Bonjour " + prenom + " " + nom + " Vous n'êtes pas un adulte");
             }
             else
             {
                alert("Bonjour " + prenom + " " + nom + " Vous êtes un adulte");
             }
         }
         function bayi(){
           
           val= confirm("Voulez-vous continuer?");
            if( val == true ) {
                     document.write ("L'utilisateur veut continuer!");
            } else {
                     document.write ("L'utilisateur ne veut pas continuer!");
            }

         }
          

