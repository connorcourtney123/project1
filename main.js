console.log('hey')


// Main Screen
const COLOR_LIST = ['green', 'red', 'blue', 'yellow', 'white', 'purple']

let code= []
let currentGuess = []


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
    currentGuess.push(color)
    console.log(currentGuess)
}
