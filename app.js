let min=1,
    max=10,
    winningNum=getrandomNum(min,max),
    guessesLeft=3;

const game=document.getElementById('game'),
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBtn=document.querySelector('#guess-btn'), 
      guessInput=document.querySelector('#guess-input'),
      message=document.querySelector('.message');

minNum.textContent=min;
maxNum.textContent=max;

game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click',function(){
    let guess= parseInt(guessInput.value);
    if (isNaN(guess)||guess<min||guess>max) {
        setMessage(`please enter a number between ${min} and ${max}`,'red');
    }
    else if (guess===winningNum) { 
        gameover(true,`${winningNum} is Correct, You Win!`);
    } 
    else{
        guessesLeft -=1
        if(guessesLeft===0){
            gameover(false,`Game Over, You Lost! The Correct Number was ${winningNum}`);
        }else{
            guessInput.style.borderColor='red';
            guessInput.value='';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }

    }
});

function gameover(won, msg){
    let color;
    won===true ? color='green': color='red';
    guessInput.disabled=true;
    guessInput.style.borderColor=color;
    message.style.color=color;
    setMessage(msg);
    guessBtn.value='play Again';
    guessBtn.className +='play-again';

}

function getrandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function setMessage(msg, color){
    message.style.color=color;
    message.textContent=msg;
}