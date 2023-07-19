let pathImg = 'img/img.jpg'
let imgSlider
let pieces = []
let cols
let rows
let boards = []
let tiles = []
let blankSpot = - 1
let step = 0
let pieceSlice = []
function preload() {
    imgSlider = loadImage(pathImg)
}

function setup() {
    sizeCanvas = windowWidth / 3
    imgSlider.resize(sizeCanvas, sizeCanvas);
    createCanvas(sizeCanvas, sizeCanvas)
    cols = 3
    rows = 3
    w = sizeCanvas / cols
    h = sizeCanvas / rows
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * w
            let y = j * h
            let img = createImage(w, h)
            img.copy(imgSlider, x, y, w, h, 0, 0, w, h)
            let index = i + j * cols
            boards.push(index)
            let tile = new Tile(index, img, x, y)
            tiles.push(tile)
        }
    }
    pieceSlice.push(tiles[tiles.length - 1])
    boards.pop()
    tiles.pop()
    boards.push(-1)
    shuffle(boards, true)
}

function draw() {
    background(255)
    //  randomMove(boards) 
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let index = i + j * cols;
            let tileIndex = boards[index];

            let x = i * w;
            let y = j * h;


            if (tileIndex > -1) {
                let img = tiles[tileIndex].img;
                // console.log(
                //     easeOutQuad(y)
                // )  
                image(img, x, y, w, h);
            } else {
                // check index of emtyPiece
                // console.log(index)
            }
        }
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            strokeWeight(2)
            let x = i * w
            let y = j * h
            noFill()
            rect(x, y, w, h)


        }
    }
    if (isSolved()) {
        console.log("SOLVED")
        noLoop()
    }
}
function isSolved() {
    for (let i = 0; i < boards.length - 1; i++) { // because add in boards - 1
        if (boards[i] !== tiles[i].index) {
            return false
        }
    }
    return true

}
let d = 1
function swap(i, j, arr) {
    d += Math.min(1 + deltaTime / 200, 1);
    let ease = easeOutExpo(d) 
    let temp = arr[i]

    arr[i] = arr[j]
    arr[j] = temp
}

function randomMove(arr) {
    let r1 = floor(random(cols))
    let r2 = floor(random(rows))
    move(r1, r2, arr)
}

function move(i, j, arr) {
    let blank = findBlank()

    let blankCol = blank % cols
    let blankRow = floor(blank / rows)

    if (isNeightbor(i, j, blankCol, blankRow)) {
        step++
        stepPlay.innerHTML = `Step: ${step}`
        swap(blank, i + j * cols, arr)
    } else if (!isNeightbor(i, j, blankCol, blankRow)) {
        console.log('Khong click vao o nay dc')
    }

}
function isNeightbor(i, j, x, y) {
    if (i !== x && j !== y) {
        return false
    }
    if (abs(i - x) == 1 || abs(j - y) == 1) {
        return true
    }
}
function findBlank() {
    for (let i = 0; i < boards.length; i++) {
        if (boards[i] === - 1) return i
    }
}
function windowResized() {
    resizeCanvas(sizeCanvas, sizeCanvas);
}
function mousePressed() {
    let i = floor(mouseX / w)
    let j = floor(mouseY / h)

    console.log(i, j)
    move(i, j, boards)

}
class Tile {
    constructor(i, img, x, y) {
        this.index = i
        this.img = img
        this.x = x
        this.y = y
    }
}
function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - pow(2, -10 * x);
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
    switch (mode) {
        case 'easy':
            cols = 3
            rows = 3
            break;
        case 'normal':
            cols = 4
            rows = 4
            break;
        case 'hard':
            cols = 5
            rows = 5
            break;
        default:
            console.log('default')
    }

} 
