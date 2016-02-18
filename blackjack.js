/**
 * Created by josephthomaschaske on 2/18/16.
 */
function makeDeck()
{
    var deck = [];
    for(var i = 1; i < 5; ++i)
    {
        for(var j = 1; j < 14; ++j)
        {
            var card = [i, j];
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
    var leftX;
    var rightX;
    var topY;
    var bottomY;
    var div = document.createElement('DIV')
    div.setAttribute('class', 'card');
}
