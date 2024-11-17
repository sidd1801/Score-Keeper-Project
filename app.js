const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');

const resetbutton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const winningscoreSelect = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;

let winningscore = 5;

let isGameOver = false;


p1Button.addEventListener('click', function() {
    if(!isGameOver){
        p1score += 1;
        if(p1score === winningscore){
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
        }
        p1Display.textContent = p1score;
    }

})

p2Button.addEventListener('click', function() {
    if(!isGameOver){
        p2score += 1;
        if(p2score === winningscore){
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
        }
        p2Display.textContent = p2score;

    }
    
}) 

winningscoreSelect.addEventListener('change', function() {
   winningscore =  parseInt(this.value);
   reset();
})

resetbutton.addEventListener('click', reset)

function reset(){


    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');

}