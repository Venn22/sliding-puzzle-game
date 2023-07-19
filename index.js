let pathImg = 'img/img.jpg'
let imgSlider
let pieces = []
let cols
let rows
let boards = []
let tiles = []
let step = 0
let isChangeMode = false
function preload() {
  imgSlider = loadImage(pathImg)
}

function setup() {
  sizeCanvas = windowWidth / 3
  imgSlider.resize(sizeCanvas, sizeCanvas);
  createCanvas(sizeCanvas, sizeCanvas)
  cols = 4
  rows = 4
  w = sizeCanvas / cols
  h = sizeCanvas / rows

  boards = Array.from({ length: cols * rows }, (_, index) => index); // fake boards
  // shuffle(boards, true) 
  if (boards.length > 0) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * w
        let y = j * h
        let img = createImage(w, h)
        img.copy(imgSlider, x, y, w, h, 0, 0, w, h)
        let index = i + j * rows
        let tile = new Tile(index, img, x, y, boards[index])
        tiles.push(tile)
      }
    }
  }
  blank = tiles[tiles.length - 1];
  blank.isBlank = true;
}
function draw() {
  background(255)
  for (let i = 0; i < boards.length; i++) {
    tiles[i].show();
    tiles[i].move();
  }
  console.log(isWin)

}
let isWin

function isSolved() {
  isWin = true

  for (let i = 0; i < tiles.length; i++) { // because add in boards - 1
    if (tiles[i].cI !== tiles[i].index) {
      isWin = false
    }
  }

  return isWin
}

function windowResized() {
  resizeCanvas(sizeCanvas, sizeCanvas);
}
function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].clicked(mouseX, mouseY);
    }

  }
  setTimeout(() => {
    if (isSolved()) {
      alert('chien thang') 
      window.location.reload()
    }
  }, 1000)
}
class Tile {
  constructor(index, img, x, y, shuffle) {
    this.cI = shuffle;
    this.index = index;
    this.x = this.cI % cols * w;
    this.y = floor(this.cI / cols) % cols * h;
    this.img = img;
    this.moving = false;
    this.easing = 0.3;
    this.targetX = x;
    this.targetY = y;
    this.targets = [];
    this.count = 0;
    this.gap = 1;
  }

  show() {
    if (!this.isBlank) {
      // text(index, this.x + 20, this.y + 20)   
      if (isChangeMode) {
        step = 0
        isChangeMode = false
      }
      stepPlay.innerHTML = `Step: ${step}`
      image(this.img, this.x + this.gap, this.y + this.gap, w - this.gap, h - this.gap);
    }
  }

  move() {
    if (this.targets.length) {
      this.moving = true;
      let ct = this.targets[this.count];
      this.targetX = ct[0];
      this.targetY = ct[1];
      let dx = this.targetX - this.x;
      this.x += dx * this.easing;
      let dy = this.targetY - this.y;
      this.y += dy * this.easing;

      if (dist(this.x, this.y, this.targetX, this.targetY) < this.gap) {
        this.x = this.cI % cols * w;
        this.y = floor(this.cI / cols) % cols * h;
        this.moving = false;
        this.count++;
        if (this.count >= this.targets.length) {
          this.targets = [];
          this.count = 0;
        }
      }
    }
  }

  clicked(mx, my) {

    if (mx > this.x && mx < this.x + w && my > this.y && my < this.y + h) {
      if (this.isBlank) {
        return false;
      } else {
        let distanceToBlank = dist(this.x, this.y, blank.x, blank.y);
        if (distanceToBlank < w + this.gap) {
          step++
          // check isNear blank  
          let pX = this.x;
          let pY = this.y;
          this.targets.push([blank.x, blank.y]);
          [blank.cI, this.cI] = [this.cI, blank.cI];
          blank.x = pX;
          blank.y = pY;

        } else {
          console.log('Không gần blank');
        }
      }
    }
  }

}

const btnEasy = document.querySelector('.easy')
const btnNormal = document.querySelector('.normal')
const btnHard = document.querySelector('.hard')
const imgDemo = document.querySelector('.img_demo')
const stepPlay = document.querySelector('.step_play')

stepPlay.innerHTML = `Step: ${step}`
imgDemo.style.backgroundImage = `url(${pathImg})`
imgDemo.style.backgroundSize = 'cover'
imgDemo.style.backgroundPosition = 'center'
/* Handle select mode play */

btnEasy.addEventListener('click', () => handleSelectMode('easy'))
btnNormal.addEventListener('click', () => handleSelectMode('normal'))
btnHard.addEventListener('click', () => handleSelectMode('hard'))


function handleSelectMode(mode) {
  isChangeMode = true
  switch (mode) {
    case "easy":
      cols = 3;
      rows = 3;
      break;
    case "normal":
      cols = 4;
      rows = 4;
      break;
    case "hard":
      cols = 5;
      rows = 5;
      break;
    default:
      console.log("default");
  }

  initializePuzzle(cols, rows);
}
function initializePuzzle(cols, rows) {
  boards = [];
  tiles = [];
  w = sizeCanvas / cols;
  h = sizeCanvas / rows;
  boards = Array.from({ length: cols * rows }, (_, index) => index);
  shuffle(boards, true)
  if (boards.length > 0) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * w
        let y = j * h
        let img = createImage(w, h)
        img.copy(imgSlider, x, y, w, h, 0, 0, w, h)
        let index = i + j * rows
        let tile = new Tile(index, img, x, y, boards[index])
        tiles.push(tile)
      }
    }
  }
  blank = tiles[tiles.length - 1];
  blank.isBlank = true;

} 
