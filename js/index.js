const canvas = document.querySelector('canvas')
//canvas.style.border = '2px solidblack'
const ctx = canvas.getContext('2d')
const startBtn = document.getElementById('.start-button')
const startScreen = document.querySelector('.game-intro')
const startBoard = document.querySelector('game-board')

let isMovingLeft = false
let isMovingRight = false

let carX = canvas.width /2
let carSpeed = 2

window.onload = () => {
 //hide the canvas until press start
 canvas.style.display = 'none'
 
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  //iteration 1
  //road img
  const backgImg= new Image()
  backgImg.src = './images/road.png'
  const carImg= new Image()
  carImg.src = './images/car.png'

  const drawRoad = () => {
    ctx.beginPath()
    ctx.drawImage(backgImg, 0, 0, canvas.width, canvas.height)
    ctx.closePath()
  }

  const drawCar = () => {
    ctx.beginPath()
    ctx.drawImage(carImg, canvas.width/2, canvas.height-100, 30,50)
    ctx.closePath()
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRoad()
     drawCar()

    // Going left

    //Going Right
    
  }

  function startGame() {
    canvas.style.display = 'block';
  }
};
