const flock = []
const maxBoids = 250

let alignSlider, cohesionSlider, avoidanceSlider

function setup() {
  createCanvas(window.innerWidth, window.innerHeight-125);

  
  alignSlider = createSlider(0, 5, 1, 0.1)
  cohesionSlider = createSlider(0, 5, 1, 0.1)
  avoidanceSlider = createSlider(0, 5, 1, 0.1)
  
  for(let i=0; i<maxBoids; i++) {
    flock.push(new Boid())
  }

  const body = document.body
  for(let i=0, inputCount = 0; i<body.children.length; i++) {
    let c = body.children[i]
    if(c.tagName == "INPUT") {
      if(inputCount === 0) {
        c.classList.add("align")
        inputCount++
      } else if (inputCount === 1) {
        c.classList.add("cohesion")
        inputCount++
      } else if (inputCount === 2) {
        c.classList.add("avoidance")
      }
    }
  }
}

window.onresize = () => {
  resizeCanvas(window.innerWidth, window.innerHeight-125)
}

function draw() {
  background(28);

  flock.forEach(boid => {
    boid.edges()
    boid.flock(flock)
  })
  
  flock.forEach(boid => {
    boid.update()
    boid.show()
  })
}
