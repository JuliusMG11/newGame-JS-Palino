'use-strict'

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start');
const gameArea = document.querySelector('.background-game');

CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];



// create enemy

class Enemy {
    constructor() { 
        this.image = new Image();
        this.image.src = 'palino.png';
        this.enemy = document.createElement("div");
        this.enemyWidth = 155;
        this.enemHeight = 155;
        this.width = this.enemyWidth / 2.5;
        this.height = this.enemHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);


    }

    // draw enemy on page

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    


    // return enemy as html element

    enemyElement() {
        return this.enemy;
    }

    // enemy listener click

    enemyClickListener() {

        this.enemy.addEventListener('click', () => {
            console.log('test');
        });

    }
}


// const enemy1 = new Enemy();
// new enemys
for ( let i = 0; i < numberOfEnemies; i++) {

    enemiesArray.push(new Enemy());

}


// create enemy on game

function startGame() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

   // enemy1.update();
   // enemy1.draw();
    enemiesArray.forEach(enemy => {
        enemy.draw();
        enemy.enemyClickListener();
    });
    
    requestAnimationFrame(startGame);   
}

// start button

startButton.addEventListener('click', function() {
    startGame();
});

