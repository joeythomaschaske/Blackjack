/**
 * Created by josephthomaschaske on 2/18/16.
 */
var playerScore = 0;
var computerScore = 0;
var deck = makeDeck();

function makeDeck()
{
    var deck = [];
    for(var i = 1; i < 5; ++i)
    {
        for(var j = 1; j < 14; ++j)
        {
            var card = [j, i];
            deck.push(card);
        }
    }
    return deck;
}

function shuffle(deck)
{
    for(var i = 0; i < 52; ++i)
    {
        var firstCard = Math.floor(Math.random() * 52);
        var secondCard = Math.floor(Math.random() * 52);
        var temp = deck[firstCard];
        deck[firstCard] = deck[secondCard];
        deck[secondCard] = temp;
    }
}

function createCardDiv(card)
{
    var rightX = 949 - (card[0] * 73) + 73;
    var bottomY = 392 - (card[1] * 98) + 98;
    var div = document.createElement('DIV');
    div.setAttribute('class', 'card');
    div.style.backgroundImage = 'url("cards.jpg")';
    div.style.height = '98px';
    div.style.width = '73px';
    div.style.backgroundPosition = rightX + "px " + bottomY + "px";
    return div;
}

function drawPlayer()
{
    var card = deck.shift();
    if(card[0] > 1 && card[0] < 10)
        playerScore += card[0];
    else if(card[0] >= 10)
        playerScore += 10;
    else
        playerScore += 11;
    var cards = document.getElementById('player-cards');
    cards.appendChild(createCardDiv(card));
    var score = document.getElementById('player-score');

    if(playerScore < 21)
        score.innerText = playerScore;
    else if(playerScore == 21)
        score.innerText = "BLACK JACK!";
    else
        score.innerText = "BUST!";
}