document.addEventListener("DOMContentLoaded", ()=>{
    console.log("here\n");
    let respond, target, btn, nb1, nb2, total, tva;
    btn = document.querySelector("button");
    target = document.querySelector("ul");

    //sous fonction
   /*let verif_nb =(nb)=> {
        if (!isNaN(nb)) {
            console.log("non nb\n")
            alert("J'ai dit un Nombre!. Recommencez!");
            return (1);
        }
        console.log("nb\n")
        return (0);
    }*/

    btn.addEventListener("click",()=>{
        respond = prompt("Quel questionnaire? 1, 2 ou 3")
        if (respond == 1) { //Vous avez des enfant ?
            respond = prompt("Avez vous des enfant? Y or N")
            if (respond == "Y" || respond == "y" || respond == "yes" || respond == "Yes")
                target.innerHTML=`Vous avez des enfants, bravo!`;
            else if (respond == "N" || respond == "n" || respond == "no" || respond == "No")
                target.innerHTML=`Eh bien alors, vous n'avez pas d'enfants`;
            else
                alert("Je n'ai pas compris. Recommencez")
        }
        if (respond == 2) { //combien d'enfant
            respond = prompt("Avez vous 0 enfant? Y or N"); //première question?
            if (respond == "Y" || respond == "y" || respond == "yes" || respond == "Yes")
                target.innerHTML=`Eh bien alors, vous n'avez pas d'enfants`;
            else if (respond == "N" || respond == "n" || respond == "no" || respond == "No") {
                
                respond = prompt("Avez vous 1 enfant? Y or N"); //deuxième question
                if (respond == "Y" || respond == "y" || respond == "yes" || respond == "Yes")
                    target.innerHTML=`Alors c'est quand le deuxième?`;
                else if (respond == "N" || respond == "n" || respond == "no" || respond == "No") {
                    
                    respond = prompt("Avez vous 2 enfant? Y or N"); //troisième question
                    if (respond == "Y" || respond == "y" || respond == "yes" || respond == "Yes")
                        target.innerHTML=`Quel beaux enfants vous avez la !`;
                    else if (respond == "N" || respond == "n" || respond == "no" || respond == "No") {
                        target.innerHTML=`Bon il faut arreter de faire des gosses maintenant`;
                    } else
                        alert("Je n'ai pas compris. Recommencez");
                
                } else
                    alert("Je n'ai pas compris. Recommencez");
            
            }else
                alert("Je n'ai pas compris. Recommencez");
        }
        if (respond == 3) { // Calculer taxe
            tva = 0.196;
            nb1 = parseFloat(prompt("Entrez le premier nombre"));
            //stop = verif_nb(nb1);
            if (!isNaN(nb1)) { //savgarder nb1 et verifier si c'est bien un nombre
                nb2 = parseFloat(prompt("Entrez un deuxième nombre"));
                //stop = verif_nb(nb2);
                if (!isNaN(nb2)) { //savgarder nb2 et verifier si c'est bien un nombre
                    respond = nb1 + nb2;
                    target.innerHTML = `Total HT = ${respond}`;
                    respond += respond * tva;
                    target.innerHTML += `<br>Total TTC = ${respond}`;
                }
            }
        }
    })
})