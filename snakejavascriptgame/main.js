//game constants and variables
let direction={x: 0,y:0};
const foodsound= new Audio('food.mp3');
const gameoversound= new Audio('game-over.mp3');
const move=new Audio('move.mav');
let lastPointTime=0;
let speed=2;
let snakeArr=[{x:18,y:18}]
//Function
let main=(cutime)=>{
    window.requestAnimationFrame(main);
    if((cutime - lastPointTime)/1000 < 1/speed){
        return;
    }
    lastPointTime=cutime;
    gameEngine();
}

let gameEngine=()=>{
    //Part 1: Updating the snake array & food
    
    //Part2: Display the snake and food
    backgd.innerHTML="";
    snakeArr.forEach((e,index)=>{
    snakeElement= document.createElement('div');
    snakeElement.style.gridRowStart=e.y;
    snakeElement.style.gridColumnStart=e.x;
    snakeElement.classList.add('food');
    backgd.appendChild(snakeElement);
} )
}



// Main logic
window.requestAnimationFrame(main);