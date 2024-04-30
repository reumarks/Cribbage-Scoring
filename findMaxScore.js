const DEFAULT_DECK = (() => {
   let deck = [];
   for(let suit = 0; suit < 4; suit ++){
      for(let value = 1; value < 14; value ++){
         let card = {
            suit: suit,
            value: value,
         };
         deck.push(card);
      }
   }
   return deck;
})();

function cardToString(card){
   let valueName = (() => {
      switch(card.value){
         case 1:  return 'A';
         case 11: return 'J';
         case 12: return 'Q';
         case 13: return 'K';
         default: return card.value.toString();
      }
   })();

   let suitName = (() => {
      switch(card.suit){
         case 0: return '\u2660';
         case 1: return '\u2663';
         case 2: return '\u2665';
         case 3: return '\u2666';
      }
   })();

   return `[${valueName} ${suitName}]`;
}

function getCard(deck, index){
   let card = deck[index];
   deck.splice(index, 1);
   return card;
}

function printCards(cards){
   let output = cards.map((card) => cardToString(card)).join(', ');
   console.log(output);
}

function createHand(){
   let deck, hand;
   for(let a = 0; a < DEFAULT_DECK.length - 0; a++) {
      for(let b = 0; b < DEFAULT_DECK.length - 1; b++) {
         for(let c = 0; c < DEFAULT_DECK.length - 2; c++) {
            for(let d = 0; d < DEFAULT_DECK.length - 3; d++) {
               for(let e = 0; e < DEFAULT_DECK.length - 4; e++) {
                  deck = [...DEFAULT_DECK];
                  hand = [];
                  hand.push(deck[a]);
                  deck.splice(a, 1);
                  hand.push(deck[b]);
                  deck.splice(b, 1);
                  hand.push(deck[c]);
                  deck.splice(c, 1);
                  hand.push(deck[d]);
                  deck.splice(d, 1);
                  hand.push(deck[e]);
                  //printCards(hand);
               }
            }
         }
      }
   }
}
console.log('started');
createHand();
console.log('done');