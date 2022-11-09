'use strict';

/*
//.message porque é uma classe
//#message se fosse um id

console.log( document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Número Correto !!';

document.querySelector('.number').textContent = '12';

document.querySelector('.score').textContent = '13';


document.querySelector('.guess').value = '123';
console.log(document.querySelector('.guess').value);

*/


let numerosecreto = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let scoremax = 0;



document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);

    if(!guess){

        document.querySelector('.message').textContent = 'Insira um Número!';

    }else if(guess === numerosecreto){

        if(score > scoremax)
        {
            scoremax = score;
            document.querySelector('.highscore').textContent = scoremax;
        }

        document.querySelector('.number').textContent = numerosecreto;

        document.querySelector('.message').textContent = 'Boa, Acertaste :D';

        document.querySelector('body').style.backgroundImage = 'linear-gradient(to right bottom, #28e96b, #24dc64, #20d05c, #1cc355, #17b74e';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.check').style.color = '#60b347';

        document.querySelector('.again').style.color = '#60b347';

        document.querySelector('.novojogo').style.color = '#60b347';

        
    }else if(score > 1){

        if(guess > numerosecreto){

            document.querySelector('.message').textContent = 'X Número Alto X';
            score--;
            document.querySelector('.score').textContent = score;
    
        }else if(guess < numerosecreto){
    
            document.querySelector('.message').textContent = 'X Número Baixo X';
            score--;
            document.querySelector('.score').textContent = score;
    
        }

    }else{
        document.querySelector('.number').textContent = 'X';

        document.querySelector('.check').style.color = '#ab312b';

        document.querySelector('.again').style.color = '#ab312b';

        document.querySelector('body').style.backgroundImage = 'linear-gradient(to right bottom, #de1313, #d31515, #c71717, #bc1919, #b11a1a';

        document.querySelector('.message').textContent = 'Perdeste o Jogo D:';

        document.querySelector('.novojogo').style.color = '#ab312b';

    }
    
})


document.querySelector('.again').addEventListener('click', function() {

    score = 20;

    numerosecreto = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Começe a adivinhar...';

    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundImage = 'linear-gradient(to right bottom, #601fb5, #472ea9, #31359b, #21388a, #1c3877, #1c3569, #1d325c, #1f2f4e, #1d2a43, #1a2539, #18202f, #161b25)';

    document.querySelector('.check').style.color = '#222';

    document.querySelector('.again').style.color = '#222';

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').textContent = '';

    document.querySelector('.novojogo').style.color = '#222';


})

document.querySelector('.novojogo').addEventListener('click', function() {

   
    location.reload();


})










