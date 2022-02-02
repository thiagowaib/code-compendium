let iterations = 100
let infinityThreshold = 32
let zoomSliderMin, zoomSliderMax
let zoom = 1.75
let k = 1

function setup() {

  createCanvas(1024*k, 1024*k);
  pixelDensity(1)

  zoomSliderMin = createSlider(0.0001, 2, zoom, 0.0001)
  zoomSliderMax = createSlider(0.0001, 2, zoom, 0.0001)
  
  loadPixels()

  for(let x = 0; x < width; x++)
    for(let y = 0; y < height; y++)
    {
      let a = map(x, 0, width, -zoom, zoom)
      let b = map(y, 0, width, -zoom, zoom)

      let ca = a // Original Values
      let cb = b // Original Values

      let z, i = 0;
      while(i < iterations)
      {
        let aa = a*a - b*b
        let bb = 2* a * b

        a = aa + ca
        b = bb + cb

        if(abs(a + b) > infinityThreshold) // Infinity Threshold
          break
        i++
      }

      let bright = map(i, 0, iterations, 0, 255)
      if (i === iterations)
        bright = 0

      let pix = (x + y * width) * 4
      pixels[pix + 0] = bright/2
      pixels[pix + 1] = bright
      pixels[pix + 2] = bright
      pixels[pix + 3] = 255
    }
  updatePixels()
}