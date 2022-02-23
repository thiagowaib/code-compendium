class Boid {
    constructor() {
        this.position = createVector(random(width), random(height))
        this.velocity = p5.Vector.random2D()
        this.velocity.setMag(random(0.75, 1.75))
        this.acceleration = createVector()
        this.maxAcceleration = 1
        this.maxVelocity = 4
    }

    // Prints the point to the canvas
    show() {
        strokeWeight(10)
        stroke(75, 235, 255)
        point(this.position.x, this.position.y)
    }

    // Makes the frame looped
    edges() {
        if (this.position.x > width) {
            this.position.x = 0
        } else if (this.position.x < 0) {
            this.position.x = width
        }

        if (this.position.y > height) {
            this.position.y = 0
        } else if (this.position.y < 0) {
            this.position.y = height
        }
    }

    // Update its position and velocity according
    // to velocity and acceleration, respectively
    update() {
        this.position.add(this.velocity)
        this.velocity.add(this.acceleration)
        this.velocity.limit(this.maxVelocity)
    }

    // Returns desired speed to alignment with nearby boids
    align(boids) {
        let perceptionRadius = 50 //Radius of perception
        let totalBoids = 0   //Sum of boids inside perc. Radius
        let desiredVelocity = createVector() //Avarage Velocity

        boids.forEach(boid => {
            // Distance between boid and actual boid
            let d = dist(
                this.position.x, 
                this.position.y, 
                boid.position.x, 
                boid.position.y
            )
            // If boid is inside perception radius
            if(d < perceptionRadius && boid != this) {
                desiredVelocity.add(boid.velocity)
                totalBoids++
            }
        })

        if(totalBoids > 0) {
            desiredVelocity.div(totalBoids)
            // Ensures the boid doesn't deaccelerate ↓ ↓ ↓
            desiredVelocity.setMag(this.maxVelocity) 
            // Ensures the boid doesn't deaccelerate ↑ ↑ ↑
            desiredVelocity.sub(this.velocity)
            desiredVelocity.limit(this.maxAcceleration)
        }
        return desiredVelocity
    }

    // Adds a cohesion steering force to align with the center of volume
    cohesion(boids) {
        let perceptionRadius = 50 //Radius of perception
        let totalBoids = 0   //Sum of boids inside perc. Radius
        let steering = createVector() //Avarage Velocity

        boids.forEach(boid => {
            // Distance between boid and actual boid
            let d = dist(
                this.position.x, 
                this.position.y, 
                boid.position.x, 
                boid.position.y
            )
            // If boid is inside perception radius
            if(d < perceptionRadius && boid != this) {
                steering.add(boid.position)
                totalBoids++
            }
        })

        if(totalBoids > 0) {
            steering.div(totalBoids)
            steering.sub(this.position)
            steering.setMag(this.maxVelocity)
            steering.sub(this.velocity)
            steering.limit(this.maxAcceleration)
        }
        return steering
    }

    // Adds an avoidance force
    avoidance(boids) {
        let perceptionRadius = 50 //Radius of perception
        let totalBoids = 0   //Sum of boids inside perc. Radius
        let avoidance = createVector() //Avarage Velocity

        boids.forEach(boid => {
            // Distance between boid and actual boid
            let d = dist(
                this.position.x, 
                this.position.y, 
                boid.position.x, 
                boid.position.y
            )
            // If boid is inside perception radius
            if(d < perceptionRadius && boid != this) {
                // Calculates the avarage avoidance vector
                // which is inverse to the distance vector
                // between two boids
                let diff = p5.Vector.sub(
                    this.position,
                    boid.position
                )
                diff.div(d)

                avoidance.add(diff)
                totalBoids++
            }
        })

        if(totalBoids > 0) {
            avoidance.div(totalBoids)
            avoidance.setMag(this.maxVelocity)
            avoidance.sub(this.velocity)
            avoidance.limit(this.maxAcceleration)
        }
        return avoidance
    }

    flock(boids) {
        this.acceleration.set(0, 0) //*-> Resets boid acceleration

        let alignment = this.align(boids)
        let cohesion = this.cohesion(boids)
        let avoidance = this.avoidance(boids)

        alignment.mult(alignSlider.value())
        cohesion.mult(cohesionSlider.value())
        avoidance.mult(avoidanceSlider.value())

        this.acceleration.add(alignment)
        this.acceleration.add(cohesion)
        this.acceleration.add(avoidance)
    }
}