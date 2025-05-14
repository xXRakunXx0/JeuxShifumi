// Choisie ton signe ou ( Ecrire ).
// Valider ton choix .
// La Partie commence .
// Le bot fait son choix .
// Les deux joueur rélève le choix qui son fait. (De base la phrase ces : Dire au bot le choix qui la fait .)
// Si le signe du bot est (pierre) et le mien et (feuille) il perd .
// Si le signe du bot est (ciseau) et le mien (feuil) il gagne . 

let signes = [
    ["pierre"],
    ["feuille"],
    ["ciseau"],
];

let comence = true

function Jouer(){
   // si le jeu est commencé : 
   if(comence === true){
        comparerReponses(BotFaitSonChoix(), JoeurFaitSonChoix())
        let encore = confirm("voulez vous continuer ?")
        if(encore === true){
             Jouer()
        }else{
            comence = false
        }
   }
   
   //sinon le jeu est arreté
}
Jouer()





function JoeurFaitSonChoix() {
    let ReponseDuJoueur = prompt("Choisie entre Pierre, Feuille, Ciseau")
    
    return ReponseDuJoueur;

}



// role : Faire jouer l'IA
// parametre : Tirez un chiffre (signe) aléatoire 
// retour : 
function BotFaitSonChoix() {
    let ReponseDuBot = Math.floor(Math.random() * 3) + 1;

    if (ReponseDuBot === 1) {
        ReponseDuBot = "pierre"
    } else if (ReponseDuBot === 2) {
        ReponseDuBot = "feuille"
    } else if (ReponseDuBot === 3) {
        ReponseDuBot = "ciseau"
    }
    return ReponseDuBot

}




// role : Comparer les 2 reponse  et faire gagné ou perdre 
//
function comparerReponses(ReponseDuBot, ReponseDuJoueur) {
    if (ReponseDuBot === ReponseDuJoueur) {
        alert("egalité")
    } else if (ReponseDuBot === "ciseau" && ReponseDuJoueur === "feuille") {
        alert("le bot à gagné ")
    } else if (ReponseDuBot === "feuille" && ReponseDuJoueur === "pierre") {
        alert("le bot a gagné")
    } else if (ReponseDuBot === "pierre" && ReponseDuJoueur === "feuille") {
        alert("le joueur a gagné")
    } else if (ReponseDuBot === "feuille" && ReponseDuJoueur === "ciseau") {
        alert("le joueur a gagné")
    }else if (ReponseDuBot === "ciseau" && ReponseDuJoueur === "pierre"){
        alert ("le joueur a gagné")
    }else if (ReponseDuBot === "pierre" && ReponseDuJoueur === "ciseau"){
        alert ("le bot a gagné")
    }
}
    