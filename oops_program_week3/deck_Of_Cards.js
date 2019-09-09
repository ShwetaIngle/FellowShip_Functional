/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_oops_program node deck_Of_Cards.js
 *  
 *  Purpose: Deck of cards
 *            
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   8-09-2019
 *
 ******************************************************************************/

 const util = require("../Utility/deckOfCardsUtility.js")

 function Cards()
 {
    let deckObj = new util.DeckOfCards();

    let deck = deckObj.getDeck()
    //console.log(deck);

    let suffle = deckObj.suffle()
    //console.log(suffle);

    let distributeCard = deckObj.distributeCard()

    console.log(distributeCard);   
    
 }

 Cards();