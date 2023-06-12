'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const dado = document.querySelector('.dice');

const newroll = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

const pontuacaodo0 = document.getElementById('current--0');
const pontuacaodo1 = document.getElementById('current--1');

const novojogo = document.querySelector('.btn--new');

novojogo.addEventListener('click', function(){

    location.reload();

});


let sim = 1;


let pontuacao0 = 0;
let pontuacao1 = 0;

let player = 0;

score0.textContent = 0;

score1.textContent = 0;

dado.classList.add('hidden');

roll.addEventListener('click', function() {

    if(sim == 1)
    {

    let dadojogado = Math.trunc(Math.random() * 6) + 1;

    dado.classList.remove('hidden');

    dado.src = `dice-${dadojogado}.png`

    
    if(player == '0')
    {
        

        if(dadojogado == '1')
        {
            pontuacao0 = 0;
            pontuacaodo0.textContent = '0';
            player++;
            player1.classList.remove('player--active');
            player2.classList.toggle('player--active');
            
        }
        else{
            
            pontuacao0 = pontuacao0 + dadojogado;
            pontuacaodo0.textContent = pontuacao0;
    
        }

    }else{

        

        if(dadojogado == '1')
        {
            pontuacao1 = 0;
            pontuacaodo1.textContent = '0';
            player--;
            player2.classList.remove('player--active')
            player1.classList.toggle('player--active');
        }
        else{
            
            pontuacao1 = pontuacao1 + dadojogado;
            pontuacaodo1.textContent = pontuacao1;
    
        }

    }
}

});

hold.addEventListener('click', function(){

    if(sim == 1)
    {
        console.log(sim);
    
    if(player == '0')
    {   
        let soma1 = Number(pontuacaodo0.textContent);
        
        let soma2 = Number(score0.textContent);
        
        let somas = soma1 + soma2;
        

        score0.textContent = somas;
        
        pontuacao0 = 0;
        pontuacaodo0.textContent = '0';

        if(somas >= '100')
        {

            player1.classList.remove('player--active')
            document.getElementById('name--0').textContent = "Player 1 WIN";
            document.querySelector('.player--0').classList.add = ('player--winner');
            document.querySelector('body').style.background = 'linear-gradient(to right bottom, #28e96b, #24dc64, #20d05c, #1cc355, #17b74e';
            document.querySelector('main').style.background = 'rgb(66 66 66)';
            sim--;

        }else{

            player1.classList.remove('player--active');
            player2.classList.toggle('player--active');
            player++;

        }

    }else{



        let soma3 = Number(pontuacaodo1.textContent);
        
        let soma4 = Number(score1.textContent);
        
        let somaxe = soma3 + soma4;

        score1.textContent = somaxe;

        pontuacao1 = 0;
        pontuacaodo1.textContent = '0';

        if(somaxe >= '100')
        {
            player2.classList.remove('player--active')
            document.getElementById('name--1').textContent = "Player 2 WIN";
            document.querySelector('.player--1').classList.add = ('player--winner');
            document.querySelector('main').style.background = 'rgb(66 66 66)';
            document.querySelector('body').style.background = 'linear-gradient(to right bottom, #28e96b, #24dc64, #20d05c, #1cc355, #17b74e';

            sim--;

        }else{

            player2.classList.remove('player--active');
            player1.classList.toggle('player--active');
            player--;

        }
    }
}

})

// Get the modal element
var modal = document.getElementById("rulesModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("btn--rules")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
btn.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when the <span> (x) is clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking outside the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
