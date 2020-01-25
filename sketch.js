let stars = []
let printed = false
let currmin = -1

function setup() {
  createCanvas(800, 600)
  strokeWeight(0)
  let starx = 400
  let stary = 200
  fill(255)
  for (let i = 0; i < 60; i++) {
    starx = 400
    stary = 200
    while (((starx > 220 && stary > 20) && (starx < 580 && stary < 380)) || ((starx > 347 && stary > 427) && (starx < 453 && stary < 533))) {
      starx = random(5, 795)
      stary = random(5, 595)
    }
    stars.push([starx, stary])
  }
  currmin = minute()
}

function draw() {
  if (currmin != minute()) {
    currmin = minute()
    print(currmin)
  }
  background(0)
  let moon = map(currmin, 0, 59, 333, 467)
  fill(10, 10, 50)
  circle(400, 480, 50)
  fill('#f5f3ce')
  beginShape()
  vertex(400, 430)
  bezierVertex(333, 435, 333, 525, 400, 530)
  bezierVertex(moon, 525, moon, 435, 400, 430)
  endShape()

  let hr = hour()
  let angle = 0;
  let change = radians(360 / hr)
  let width = map(hr, 0, 23, 50, 10)
  fill('#ff8c00')
  for (let i = 0; i < hr; i++) {
    push()
    translate(400, 200)
    rotate(angle)
    angle += change
    triangle(-1 * width, 0, width, 0, 0, -180)
    pop()
  }
  fill('#FFD700')
  circle(400, 200, 70)

  fill(255)
  for (let i = 0; i < second(); i++) {
    circle(stars[i][0], stars[i][1], 2)
  }
}