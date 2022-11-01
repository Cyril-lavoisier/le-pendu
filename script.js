var hiddenWord = prompt("Quel est le mot à cacher ?"); // On demande à un joueur d'entré un mot à cacher, et on le stock dans la variable hiddenWord
var newForm = document.createElement('form'); // On met la creation d'un nouveau form dans la variable newForm
var letterGood = 0; // On initialise une variable letterGood à 0
var imgPendu = 0;

for (let i = 0; i < hiddenWord.length; i++){ // On initialise i a 0, Si i est inferieur a la taille de la variable hiddenWord, alors on incrémente de 1
        var newInput = document.createElement('input'); // On met la création d'un element input dans la variable newInput
        newForm.appendChild(newInput) +i; // On demande a JS de nous créer un input qui soit un ENFANT de l'element body, tant que i n'est pas egale à la valeur de hiddenWord
        newInput.type = 'text'; // On ajoute l'attribut type à nos input
        newInput.id = +i; // On ajoute un id a nos input, qui correspond a chaque lettre de notre mot
    }
document.body.appendChild(newForm);// On crée un Form juste après le body
var newSubmit = document.createElement('input'); // On met la creation d'un nouvel input dans la variable newSubmit
newSubmit.type = 'submit'; // On ajoute un type submit à un input, pour le transformer en boutton cliquable
newSubmit.value = 'ESSAIE'; // On ajouter la valeur tester a notre input de type submit
newSubmit.setAttribute('onclick', 'tester()'); // On ajoute un attribut onclick qui a pour valeur tester()
newSubmit.style = 'color: red; padding: 10px;';
document.body.append(newSubmit); // On ajoute le bouton submit juste après le form
var newImg = document.createElement('img');
newImg.src = "Images/Etape"+imgPendu+".png";
document.body.appendChild(newImg);
var newImg = document.createElement('img');

function tester(){ // Quand on clique sur le bouton tester, on execute la fonction
    for (let index = 0; index < hiddenWord.length; index++) { // L'index représente la valeur de l'ID dans l'input, hiddenWord.lenght represente le nombre de lettre dans le mot cacher, index++ est une incrémentation de 1
        if(document.getElementById(index).value === hiddenWord.charAt(index) && document.getElementById(index).disabled == false){ // Si la valeur de l'input selon son id est egale à la 
            document.getElementById(index).classList.add('vert'); // Si l'index est egale à la position de la lettre dans le mot cacher, alors on injecte la class vert à l'index en question
            document.getElementById(index).classList.remove('rouge'); // Par précaution, on retirer la class rouge
            doubleLetter = document.getElementById(index).value; // On met dans la variable doubleletter la valeur qu'on a entré dans un input
            document.getElementById(index).disabled = true; // Si la valeur de l'index est egale à la valeur de la lettre dans le mot cacher, alors on désactive l'input pour que l'utilisateur ne note plus rien
            // console.log('La lettre est bonne');
        }
        if(document.getElementById(index).value.toUpperCase() !== hiddenWord.charAt(index)){
            document.getElementById(index).classList.add('rouge'); // Si l'index est egale à la position de la lettre dans le mot cacher, alors on injecte la class rouge à l'index en question
            document.getElementById(index).classList.remove('vert'); // Par précaution, on retirer la class vert
            // console.log('La lettre est fausse');
        }
        if(document.getElementById(index).value.toUpperCase() !== hiddenWord.charAt(index) && document.getElementById(index).value != '') {
            imgPendu++;
            document.querySelector('body > img').src = "Images/Etape"+imgPendu+".png";
        }
        if(imgPendu === 11){
            document.querySelector('body > input[type=submit]').disabled = true;
        } 
    }  
    var doubleLetter // On déclare au préalable la variable qui va stocker notre lettre double

    for (let index = 0; index < hiddenWord.length; index++) {
        if(doubleLetter == hiddenWord.charAt(index)){ // Si doubleLetter est egale à la position d'une lettre dans le mot caché
            document.getElementById(index).disabled = true; // Alors on désactive l'input
            document.getElementById(index).classList.add('vert'); // Si l'index est egale à la position de la lettre dans le mot cacher, alors on injecte la class vert à l'index en question
            document.getElementById(index).classList.remove('rouge'); // Par précaution, on retirer la class rouge
            document.getElementById(index).value = doubleLetter; // On initialise la valeur de l'input trouvé par la valeur de doubleLetter            
        }
    }
    for (let index = 0; index < hiddenWord.length; index++){
        if(document.getElementById(index).value === hiddenWord.charAt(index)){ // Si la variable letter est strictement egale a la variable pos
            letterGood++; // On incrémente letterGood de 1
        }  
    }
    if (letterGood == hiddenWord.length){ // Si la valeur de la variable letterGood est egale à la longueur du mot cacher
        console.log('BRAVO'); // Alors on affiche bravo en console
    }
    letterGood = 0; // Sid la valeur de letterGood est differente de la longueur du mot cacher, alors on initialise la variable letterGood à 0 et on repart au début de la fonction
}


