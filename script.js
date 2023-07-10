let playerStates = "idle";
const dropdown = document.getElementById("animations");
dropdown.addEventListener('change', function (e){
    playerStates = e.target.value;
    console.log(playerStates)
})
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'image/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
const staggerFrame =3;
const spriteAnimations =[];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name:'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 3,
    },
    {
        name:'run',
        frames: 9
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name:'sit',
        frames: 5
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name:'ko',
        frames: 12
    },
    {
        name: 'getHit',
        frames: 4,
    }
];
animationStates.forEach((state, index) =>{
    let frames ={
        loc: [],
    }
    for (let i = 0; i < state.frames; i++){
        let positionx = i * spriteWidth;
        let positiony = index * spriteHeight;
        frames.loc.push({x:positionx, y: positiony});
    }
    spriteAnimations[state.name] = frames;
});

console.log(spriteAnimations);

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrame) % spriteAnimations[playerStates].loc.length;
    let framex = spriteWidth * position;
    let framey = spriteAnimations[playerStates].loc[position].y;
    // ctx.fillRect(100,50,100,100);
    // ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
    ctx.drawImage(playerImage,framex,framey,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    // if(gameFrame % staggerFrame == 0){
    //     if(framex <6) {framex++}
    //     else {framex =0};
    // }
    gameFrame++
    requestAnimationFrame(animate);
}

animate();