let imgSlider;
let pieces = [];
let cols = 10;
let rows = 10;
let boards = [];
let tiles = [];
let blankSpot = -1;
let demoImg = document.querySelector('.demoImg');


function preload() {
  imgSlider = loadImage("img/img2.jpg", () => {
    // Get the URL of the loaded image and set it as background
    let imgUrl = imgSlider.canvas.toDataURL();
    demoImg.style.backgroundImage = `url(${imgUrl})`;
    demoImg.style.backgroundSize = '400px 400px'
    // Once the image is set as background, you can remove the canvas from the DOM
    imgSlider.canvas.remove();
  });
}

function setup() {
  sizeCanvas = 600;
  createCanvas(sizeCanvas, sizeCanvas);
  w = sizeCanvas / cols;
  h = sizeCanvas / rows;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      let img = createImage(w, h);
      img.copy(imgSlider, x, y, w, h, 0, 0, w, h);
      let index = i + j * cols;
      boards.push(index);
      let tile = new Tile(index, img);
      tiles.push(tile);
    }
  }
  boards.pop();
  tiles.pop();
  boards.push(-1);
  simpleShuffle(boards);
}

function draw() {
  background(0);
  //  randomMove(boards)
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let index = i + j * cols;
      let x = i * w;
      let y = j * h;
      let tileIndex = boards[index];

      if (tileIndex > -1) {
        let img = tiles[tileIndex].img;
        image(img, x, y, w, h);
      }
    }
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      strokeWeight(2);
      let x = i * w;
      let y = j * h;
      noFill();
      rect(x, y, w, h);
    }
  }
  if (isSolved()) {
    //console.log("SOLVED")
  }
}
function isSolved() {
  for (let i = 0; i < boards.length - 1; i++) {
    // because add in boards - 1
    if (boards[i] !== tiles[i].index) {
      return false;
    }
  }
  return true;
}
function swap(i, j, arr) {
  let temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}
function simpleShuffle(arr) {
  for (let i = 0; i < 100000; i++) {
    randomMove(boards);
  }
}
function randomMove(arr) {
  let r1 = floor(random(cols));
  let r2 = floor(random(rows));
  move(r1, r2, arr);
}
function move(i, j, arr) {
  let blank = findBlank();

  let blankCol = blank % cols;
  let blankRow = floor(blank / rows);

  if (isNeightbor(i, j, blankCol, blankRow)) {
    swap(blank, i + j * cols, arr);
  }
}
function isNeightbor(i, j, x, y) {
  if (i !== x && j !== y) {
    return false;
  }
  if (abs(i - x) == 1 || abs(j - y) == 1) {
    return true;
  }
  return false;
}
function findBlank() {
  for (let i = 0; i < boards.length; i++) {
    if (boards[i] === -1) return i;
  }
}
function mousePressed() {
  let i = floor(mouseX / w);
  let j = floor(mouseY / h);
  move(i, j, boards);
}
class Tile {
  constructor(i, img) {
    this.index = i;
    this.img = img;
  }
}

