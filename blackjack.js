/**
 * Created by josephthomaschaske on 2/18/16.
 */
var playerScore;
var computerScore;
var deck;

var playerAces;
var computerAces;

window.onload = function(){
    deal();
}
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
    if(card[0] == 1)
        playerAces++;

    if(card[0] > 1 && card[0] < 10)
        playerScore += card[0];
    else if(card[0] >= 10)
        playerScore += 10;
    else
        playerScore += 11;
    var cards = document.getElementById('player-cards');
    cards.appendChild(createCardDiv(card));
    var score = document.getElementById('player-score');
    if(playerScore > 21)
    {
        while(playerAces > 0 && playerScore > 21)
        {
            playerScore -= 10;
            playerAces--;
        }
    }
    if(playerScore < 21)
        score.innerText = playerScore;
    else if(playerScore == 21)
        score.innerText = "BLACK JACK!";
    else
        score.innerText = "BUST!";
}

function drawComputer()
{
    var card = deck.shift();
    if(card[0] == 1)
        computerAces++;

    if(card[0] > 1 && card[0] < 10)
        computerScore += card[0];
    else if(card[0] >= 10)
        computerScore += 10;
    else
        computerScore += 11;
    var cards = document.getElementById('computer-cards');
    cards.appendChild(createCardDiv(card));
    var score = document.getElementById('computer-score');
    if(computerScore > 21)
    {
        while(computerAces > 0 && computerScore > 21)
        {
            computerScore -= 10;
            computerAces--;
        }
    }
    if(computerScore < 21)
        score.innerText = computerScore;
    else if(computerScore == 21)
        score.innerText = "BLACK JACK!";
    else
        score.innerText = "BUST!";
}

function deal()
{
    document.getElementById('deal').disabled = true;
    var cards = document.getElementsByClassName('card');
    var numCards = cards.length;
    for(var i = 0; i < numCards; ++i)
    {
        cards[0].parentNode.removeChild(cards[0]);
    }
    document.getElementById('hit').disabled = false;
    document.getElementById('stay').disabled = false;
    document.getElementById('status').innerText = '';
    document.getElementById('player-score').innerText = 0;
    document.getElementById('computer-score').innerText = 0;
    playerScore = 0;
    computerScore = 0;
    deck = makeDeck();
    shuffle(deck);

    drawPlayer();
    drawComputer();
    drawPlayer();
}

function playComputer()
{
    while(computerScore < 17)
    {
        drawComputer();
    }
    document.getElementById('hit').disabled = true;
    document.getElementById('stay').disabled = true;
    document.getElementById('deal').disabled = false;
    var status = document.getElementById('status');
    if(computerScore == 21 || playerScore > 21 || (computerScore > playerScore && computerScore < 22))
        status.innerText = 'House Wins!';
    else
        status.innerText = 'Player Wins!';
}