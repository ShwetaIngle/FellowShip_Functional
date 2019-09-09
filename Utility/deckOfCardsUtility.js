/******************************************************************************
 *  Execution:    ~/Desktop/shweta/week3_oops_program node deck_Of_Cards.js
 *  
 *  Purpose: Deck of cards utility
 *            
 *  @author  Ingle Shweta
 *  @version 1.0
 *  @since   8-09-2019
 *
 ******************************************************************************/


var fs = require('fs');
const read = require("readline-sync");

 class DeckOfCards
 {
   /**
    * function to read the input from user
    *
    * @param returns input taken from user
    */
    readInput() {
        let input = read.question();
        return input;
    }

    constructor()
    {
        this.deck = []

        this.suits = ["spades", "diamonds", "clubs", "hearts"]
        this.rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']


    }

    /**
    * function to get deck of cards
    *
    * returns deck of 52 cards
    */
    getDeck()
    {
        for(let i=0; i<this.suits.length; i++)
        {
            for(let j=0; j<this.rank.length; j++)
            {
                var card = {ranks : this.rank[j],suit : this.suits[i]}
                this.deck.push(card)
            }
        }
        return this.deck;        
    }

    /**
    * function to suffle deck of cards
    *
    * returns deck of 52 suffled cards
    */
    suffle()
    {
        let suffleDeck = []

        let currIndex = this.deck.length;
        let temp, randomIndex;

        while(0 != currIndex)
        {
            // get random card
            randomIndex = Math.floor(Math.random() * currIndex)
            currIndex -= 1;

            //swap the cards
            temp = this.deck[currIndex]
            this.deck[currIndex] = this.deck[randomIndex]
            this.deck[randomIndex] = temp   
        }
        for(let i=0; i<52; i++)
        {
            suffleDeck[i] = this.deck[i];
        }
        return suffleDeck;       
    }

    /**
    * function to distribute 9 Cards to 4 Players
    *
    * Print the Cards the received by the 4 Players using 2D Array…
    */

   distributeCard()
   {       
       let card=[[],[]]
       let k=51;

       let s = this.suffle();
       
       for(let i=0; i <4; i++)
       {
            card[i] = new Array()
       }
       
       for(let i=0; i <4; i++)
       {
            for(let j=0; j<9 ;j++)
            {
                card[i][j] = s[k];
                k--;
            }
       }
       return card;
   }


 }

//  let d = new DeckOfCards();
//  d.distributeCard();

 module.exports = {DeckOfCards}