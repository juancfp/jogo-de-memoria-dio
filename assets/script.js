const cards = document.querySelectorAll('.card');
const reset = document.getElementById("reset")
document.getElementById("shuffle").addEventListener("click", shuffle);


let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard=false;
reset.addEventListener("click", unflipAll);
reset.setAttribute("disabled","disabled");

// botão de reset
function unflipAll() {
    reset.setAttribute("disabled","disabled");
    cards.forEach((card) => {
        if(card.classList.contains("flip")) {
            card.classList.remove("flip");
            card.addEventListener("click", cardFlip);
        }
        
    });
}

// botão de shuffle 

function shuffle() { 
    unflipAll();
    cards.forEach((card) => { 
        let ramdom= Math.floor(Math.random() * 12); 
        card.style.order = ramdom; 
    });
}
// shuffle();
function cardFlip() {
    if(lockBoard) return;
    if(this == firstCard && hasFlippedCard) {
        return;
        }
    this.classList.add('flip');
    if (hasFlippedCard == false){
        hasFlippedCard= true;
        firstCard=this;
        return;
    }
    secondCard=this;
    lockBoard=true;
    checkEqualCards();
    hasFlippedCard = false;
}
cards.forEach((card) => {
    card.addEventListener('click', cardFlip);

});
function checkEqualCards() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        
        disableCards();
        reset.removeAttribute("disabled")
        return;
    }
    unflipCards();
}
function disableCards() {
    firstCard.removeEventListener('click', cardFlip);
    secondCard.removeEventListener('click', cardFlip);
    lockBoard=false;
}
function unflipCards() {
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard=false;
    },1500);
}
