
function guessTheNumber(){
    const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
    });
    let guessCounter = 0;
let chooseDifficultyReadLine = function(){
    readline.question(`Choose difficulty: "easy" - 10 tries / "medium" - 7 tries / "hard" - 5 tries` , answer => {
        if (answer != "easy" && answer != "medium" && answer != "hard"){
            console.log(`Wrong input. Please pick easy, medium or hard.`)
            chooseDifficultyReadLine()
        }
        if (answer === "easy"){
            guessCounter = 10;
            recursiveAsyncReadline()
        } else if (answer === "medium"){
            guessCounter = 7;
            recursiveAsyncReadline()
        } else if (answer = "hard"){
            guessCounter = 5;
            recursiveAsyncReadline()
        }
    })
}
let computerGuess = Math.floor(Math.random() * 100);
let computerGuess2 = Math.floor(Math.random() * 200);
let guess;
let proceedToLevel2;
let askToContinueToLevel2Readline = function() {
    readline.question(`Do you want to continue with Level 2?`, answer => {
        proceedToLevel2 = answer;
        if (proceedToLevel2 === "yes"){
            console.log(`You have ${guessCounter} tries remaining.`)
            secondLevelReadline()
        } else{
            console.log(`Goodbye!`)
        }
    })
}
let secondLevelReadline = function() {
    readline.question(`Guess the number (0-200): `, number => {
        guess = Number(number);
        if (guess > 200){
            console.log(`Invalid input. Try again with a number between 0-200`);
                recursiveAsyncReadline()
            }
        if (guess <= 200 && guess >= 0){
            if (guess === computerGuess2){
                console.log(`Correct! You guessed it!`);
                console.log(`You won the game!.`)
                return;             
            } else if (guess > computerGuess2){
                console.log(`Wrong! Too high, try with lower number!`)
                guessCounter--
                if (guessCounter === 0){
                    console.log(`The correct number is ${computerGuess2}`)
                    console.log(`No more tries remaining. Sorry, try again. To enter the game, open a new terminal and type  "node guessTheNumber.js"`)
                    return;
                }
                console.log(`You have ${guessCounter} tries remaining.`)
                secondLevelReadline()
            } else if (guess < computerGuess2){
                console.log(`Wrong! Too low, try with higher number!`)
                guessCounter--
                if (guessCounter === 0){
                    console.log(`The correct number is ${computerGuess2}`)
                    console.log(`No more tries remaining. Sorry, try again. To enter the game, open a new terminal and type  "node guessTheNumber.js"`)
                    return;
                }
                console.log(`You have ${guessCounter} tries remaining.`)
                secondLevelReadline()
            }
        }
    })
}
let recursiveAsyncReadline = function () {
    readline.question(`Guess the number (0-100): `, number => {
        guess = Number(number);
        if (guess > 100){
            console.log(`Invalid input. Try again with a number between 0-100`);
                recursiveAsyncReadline()
            }
        if (guess <= 100 && guess >= 0){
            if (guess === computerGuess){
                console.log(`Correct! You guessed it!`);
                console.log(`You have passed Level 1 successfully.`)
                firstLevelPassed = true;
                askToContinueToLevel2Readline();                
            } else if (guess > computerGuess){
                console.log(`Wrong! Too high, try with lower number!`)
                guessCounter --
                if (guessCounter === 0){
                    console.log(`The correct number is ${computerGuess}`)
                    console.log(`No more tries remaining. Sorry, try again. To enter the game, open a new terminal and type  "node guessTheNumber.js"`)
                    return;
                }
                console.log(`You have ${guessCounter} tries remaining.`)
                recursiveAsyncReadline()
            } else if (guess < computerGuess){
                console.log(`Wrong! Too low, try with higher number!`)
                guessCounter --
                if (guessCounter === 0){
                    console.log(`The correct number is ${computerGuess}`)
                    console.log(`No more tries remaining. Sorry, try again. To enter the game, open a new terminal and type  "node guessTheNumber.js"`)
                    return;
                }
                console.log(`You have ${guessCounter} tries remaining.`)
                recursiveAsyncReadline()
            }
        }
    })
}
chooseDifficultyReadLine()
recursiveAsyncReadline()
}
guessTheNumber()