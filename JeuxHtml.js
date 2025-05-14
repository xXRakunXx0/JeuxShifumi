// Choisie ton signe ou ( Ecrire ).
// On clique sur une image de main : 
// on stocke le symbole choisi par le jeur
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



let images = document.querySelectorAll("#Jeux img")
console.log(images)

images.forEach(image=>{
    image.addEventListener("click",()=>{
        // j'execute ce code au clic sur l'image
        // image c'est l'image sur laquelle j'ai cliqué
        console.log(image.id)
        // on fait joueur l'ordi
       let ordi = BotFaitSonChoix()
        // on compare les 2
        comparerReponses(ordi,image.id)
        // on affiche qui a gagné !
    })
    
})



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