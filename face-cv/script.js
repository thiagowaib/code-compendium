// Algorithm Frequency (lower means faster)
const interval = 100

// DOM Elements
const player = document.getElementById('video')
const liDet = document.getElementById("li-det")
const liLan = document.getElementById("li-lan")
const liExp = document.getElementById("li-exp")
const liAge = document.getElementById("li-age")

let views = [0]


//* Starts the video feed from user camera
const startPlayer = () => {
    navigator.getUserMedia(
        { video: {} },
        (stream) => {
            player.srcObject = stream
        },
        (err) => {
            console.error(err)
        }
    )
}
    
//* Model Loader
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./weights/'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./weights/'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./weights/'),
    faceapi.nets.faceExpressionNet.loadFromUri('./weights/'),
    faceapi.nets.ageGenderNet.loadFromUri('./weights/')
]).then(startPlayer)

 
player.addEventListener('play', () => {

    // Creates a Canvas to paint data on
    const canvas = faceapi.createCanvasFromMedia(player)
    document.body.append(canvas)
    faceapi.matchDimensions(
        canvas, 
        { width: player.width, height: player.height }
    )

    //* API Loop 
    setInterval(async () => {

        // Get the Detection Data with Landmarks and Expressions
        const detections = await faceapi.detectAllFaces(
            player,
            new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceExpressions()
        .withAgeAndGender()

        // Resize the detections/landmarks to player size
        const resizedDetections = faceapi.resizeResults(
            detections,
            { width: player.width, height: player.height }
        )

        // Clear the Canvas Content
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

        // Draws data on the canvas
        
        views.includes(0) && faceapi.draw.drawDetections(canvas, resizedDetections)
        views.includes(1) && faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        views.includes(2) && faceapi.draw.drawFaceExpressions(canvas, resizedDetections)

        // Draws Age and Gender Data
        views.includes(3) && resizedDetections.forEach( detection => {
            const box = detection.detection.box
            const drawBox = new faceapi.draw.DrawBox(box, { label: Math.round(detection.age) + " year old " + detection.gender })
            drawBox.draw(canvas)
        })

    }, interval)
})

const handleLi = (id) => {
    if (!views.includes(id)) {
        views.push(id)
        id === 0 && liDet.classList.add("on")
        id === 1 && liLan.classList.add("on")
        id === 2 && liExp.classList.add("on")
        id === 3 && liAge.classList.add("on")
    } else {
        views = views.filter(val => val!==id)
        id === 0 && liDet.classList.remove("on")
        id === 1 && liLan.classList.remove("on")
        id === 2 && liExp.classList.remove("on")
        id === 3 && liAge.classList.remove("on")
    }

}