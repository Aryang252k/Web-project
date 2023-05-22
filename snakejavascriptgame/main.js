//game constants and variables
let snakeVelocity={x: 0,y:0};
const foodsound= new Audio('food.mp3');
const gameoversound= new Audio('game-over.mp3');
const snakeMove=new Audio('move.mp3');
let lastPointTime=0;
let speed=5;
let Score=0;
let snakeArr=[{x:10,y:15}];
 food={x: 7,y:8};

//Function
let main=(cutime)=>{
    window.requestAnimationFrame(main);
    if((cutime - lastPointTime)/1000 < 1/speed){
        return;
    }
    lastPointTime=cutime;
    gameEngine();
}

 let snakeCollide=(snArr)=>{
   // collide it self
   for( let i=1 ; i< snakeArr.length; i++){
    if(snArr[i].x === snArr[0].x && snArr[i].y===snArr[0].y){
        return true;
    }
   }
   // collide to wall
if(snArr[0].x>=26 || snArr[0].x<=0 || snArr[0].y>=26 || snArr[0].y<=0)
   {
    return true;
   }
 }

 let gameEngine=()=>{
    //Part 1: Updating the snake array & food
    if(snakeCollide(snakeArr)){
        gameoversound.play();
        snakeVelocity={x:0,y:0};
        alert("Game over press any key to play again!");
        snakeArr=[{x:10,y:15}];
        Score=0;
        document.getElementById('score').innerHTML="Score: "+Score;
    }

     // Eaten food increment the score and regenerate the food
     if(snakeArr[0].y === food.y && snakeArr[0].x === food.x ){
        foodsound.play();
        Score++;
        document.getElementById('score').innerHTML="Score: "+Score;
        snakeArr.unshift({x: snakeArr[0].x + snakeVelocity.x , y : snakeArr[0].y + snakeVelocity.y });
        let a=2;
        let b=24;
        food = {x: Math.round(a +(b-a)*Math.random()),y: Math.round(a +(b-a)*Math.random())};
     }


     // snake movement
     for(let i = snakeArr.length-2; i>=0 ;i--){
        snakeArr[i+1]={...snakeArr[i]};
     }
     snakeArr[0].x+=snakeVelocity.x;
     snakeArr[0].y+=snakeVelocity.y;


    //Part2: Display the snake and food
    // snake head
    backgd.innerHTML="";
    snakeArr.forEach((e,index)=>{
    snakeElement= document.createElement("div");
    snakeElement.style.gridRowStart=e.y;
    snakeElement.style.gridColumnStart=e.x;
    if(index===0){
    snakeElement.classList.add("head"); 
    }
    else
    {
        snakeElement.classList.add("snakebody"); 
    }

    backgd.appendChild(snakeElement);  // id is used for append
});


// snake food
    foodElement= document.createElement("div");
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add("food");    
    backgd.appendChild(foodElement); 
}



// Main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown',e =>{
snakeVelocity={x: 0, y: 1};
snakeMove.play();
switch(e.key){
    case "ArrowUp":
        snakeVelocity.x=0;
        snakeVelocity.y=-1;
        break;
    case "ArrowDown":
            snakeVelocity.x=0;
            snakeVelocity.y=1;
            break;
    case "ArrowRight":
            snakeVelocity.x=1;
            snakeVelocity.y=0;
            break;
    case "ArrowLeft":
            snakeVelocity.x=-1;
            snakeVelocity.y=0;
            break;
    default:
        break;
}});