console.log('hey')


// Main Screen
const COLOR_LIST = ['green', 'red', 'blue', 'yellow', 'white', 'purple']

let code= []
let currentGuess = []
let pastGuesses = [] // this is an array of guess objects. guess objects holds GUESS and RED and WHITE values
let guessCount = 0


for(let i=0; i < 4; i++){
    code.push(COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)])
}
console.log(code);

document.querySelector('#bluePrint').addEventListener('click', function(){
    fingerClick('blue')
})
document.querySelector('#greenPrint').addEventListener('click', function(){
    fingerClick('green')
})
document.querySelector('#redPrint').addEventListener('click', function(){
    fingerClick('red')
})
document.querySelector('#yellowPrint').addEventListener('click', function(){
    fingerClick('yellow')
})
document.querySelector('#whitePrint').addEventListener('click', function(){
    fingerClick('white')
})
document.querySelector('#purplePrint').addEventListener('click', function(){
    fingerClick('purple')
})


function fingerClick(color) {
    currentGuess.push(color);
    if (currentGuess.length == 4){
        var g = {guess: currentGuess, red: 0, white: 0}
        pastGuesses.push(g)
        guessCount++
        checkGuess(code, g)
        updateNoteScreen()
        if(guessCount == 10 && g.red != 4){
            alert('YOU LOSE')
        }
        currentGuess = []
    }

    
    
}

function checkGuess(code, currentGuess){
    var tempCode = []
    var tempGuess = []
    for(let i=0;i<4;i++){
        tempGuess[i] = currentGuess.guess[i]
        tempCode[i] = code[i]
    }


    for(let i=0; i<4; i++){
       if(code[i] == currentGuess.guess[i]){
           currentGuess.red++
           tempCode[i]= ""
           tempGuess[i]="_"  //will never match so we dont double count red as white
       } 
    } 
    for(let i=0; i<4; i++){
        if (tempCode.includes(tempGuess[i])){
            currentGuess.white++ 
            tempCode[tempCode.indexOf(tempGuess[i])] = ""; //so we dont double count white
        }

    }
    console.log("pastGuesses after newest check")
    console.log(pastGuesses)
    if(currentGuess.red == 4){
        
        alert("YOU WIN")
    } else{

    }
}

function updateNoteScreen(){
    while(document.querySelector('#noteScreen').firstChild) {
        document.querySelector('#noteScreen').removeChild(document.querySelector('#noteScreen').firstChild)
    }
    for(let i=0; i< pastGuesses.length; i++){
        let guessDiv = document.createElement('div')
        guessDiv.classList.add('guessDisplay')
        for(let j=0; j< pastGuesses[i].guess.length; j++){
            let color = document.createElement('div')
           
            color.classList.add(pastGuesses[i].guess[j])
            color.classList.add("guessCircles")
            guessDiv.appendChild(color)
        }
        for(let j=0; j<pastGuesses[i].red; j++){
            let red = document.createElement('div')
            red.classList.add('hintCircles')
            red.classList.add('red')
            guessDiv.appendChild(red)
        }
        for(let j=0; j<pastGuesses[i].white; j++){
            let white = document.createElement('div')
            white.classList.add('hintCircles')
            white.classList.add('white')
            guessDiv.appendChild(white)
        }
        document.querySelector('#noteScreen').appendChild(guessDiv)

    }
}