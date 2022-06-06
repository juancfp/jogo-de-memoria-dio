const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard=false;

function cardFlip() {
    if(lockBoard) return;
    if(this == firstCard) return;
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
    lockBoard=false;
}
cards.forEach((card) => {
    card.addEventListener('click', cardFlip);

});
function checkEqualCards() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        
        disableCards();
        
        return;
    }
    unflipCards();
}
function disableCards() {
    firstCard.removeEventListener('click', cardFlip);
    secondCard.removeEventListener('click', cardFlip);
    
}
function unflipCards() {
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard=false;
    },1500);
}