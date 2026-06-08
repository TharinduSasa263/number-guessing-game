//Number Guessing

const minNum = 1;
const maxNum = 100;
const answer1 = Math.floor(Math.random()*(maxNum-minNum+1))+minNum

let guess;
let attemps = 0;
let running = true;

while(running){
    guess = window.prompt(`guess a number Between ${minNum} - ${maxNum}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Enter a Valid Number");

    }
    else if (guess<=minNum || guess>=maxNum){
        windows.alert(`Enter a Number Between ${minNum} - ${maxNum}`);
    }
    else{
        attemps += 1;

        if(guess > answer1){
            window.alert("its too high")
        }
        else if (guess < answer1){
            window.alert("too low")
        }
        else{
            window.alert(`you are correct !! you got ${attemps} attemps for this`)
        }
    }
} 
