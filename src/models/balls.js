const m = require('mithril')
const mymaths = require('../logic/mymaths')

//Right is +
//Down is +

let id_count = 0

const Ball = class {
    constructor(x, y) {
        this.id = id_count++
        this.gravity = 40 // %/s/s
        this.framerate = 50// per second

        this.radius = 10
        this.weight = 10

        this.start_x = x || 10
        this.start_y = y || 10

        this.v_x = 40//%/s
        this.v_y = 0//%/s

        this.reset()

        this.touching = []


    }

    reset = () => {
        this.x = this.start_x
        this.y = this.start_y
    }

    update = (all_balls, angle = 0) => {


        //Collision detection
        all_balls.forEach(ball => {
            // console.log("COLLIDE?")
            if (ball.id != this.id) {
                let dist = mymaths.distance([this.x, this.y], [ball.x, ball.y]) - this.radius - ball.radius
                // console.log(dist)
                if (dist < 0) {
                    if (this.touching.includes(ball.id)) {
                        return
                    }
                    else {
                        this.touching.push(ball.id)
                        ball.touching.push(this.id)

                        this.collide(ball)
                    }
                }
                else {
                    this.touching = []
                }
            }
        })


        //ball radius = 10% / 10
        this.x += this.v_x / (this.framerate ** 1)
        this.y += this.v_y / (this.framerate ** 1)

        this.v_y += (this.gravity / this.framerate) * Math.cos(Math.PI * angle / 180)
        this.v_x += (this.gravity / this.framerate) * Math.sin(Math.PI * angle / 180)

        m.redraw()

        //Right
        if (this.x >= 90 && this.v_x > 0) {
            this.v_x = - this.v_x
        }

        //Bottom
        if (this.y >= 91.5 && this.v_y > 0) {
            this.v_y = - this.v_y
        }


        //Left
        if (this.x < 10 && this.v_x < 0) {
            this.v_x = - this.v_x
        }

        // //Top
        if (this.y <= 8.5 && this.v_y < 0) {
            this.v_y = - this.v_y
        }
    }

    collide = ball => {

        //ball and this

        let collision_angle = -((mymaths.get_angle([ball.x, ball.y], [this.x, this.y]))) % (2 * Math.PI)


        if (ball.id != this.id) {

            let v_pa_1 = ball.v_x * Math.cos(collision_angle) + ball.v_y * Math.sin(collision_angle)
            let v_pe_1 = ball.v_y * Math.cos(collision_angle) - ball.v_x * Math.sin(collision_angle)
            let v_pa_2 = this.v_x * Math.cos(collision_angle) + this.v_y * Math.sin(collision_angle)
            let v_pe_2 = this.v_y * Math.cos(collision_angle) - this.v_x * Math.sin(collision_angle)

            let new_v_pa_1 = (v_pa_1 * (ball.weight - this.weight) + 2 * this.weight * v_pa_2) / (ball.weight + this.weight)
            let new_v_pa_2 = (v_pa_2 * (this.weight - ball.weight) + 2 * ball.weight * v_pa_1) / (ball.weight + this.weight)

            ball.v_x = new_v_pa_1 * Math.cos(collision_angle) - v_pe_1 * Math.sin(collision_angle)
            ball.v_y = new_v_pa_1 * Math.sin(collision_angle) + v_pe_1 * Math.cos(collision_angle)

            this.v_x = new_v_pa_2 * Math.cos(collision_angle) - v_pe_2 * Math.sin(collision_angle)

            this.v_y = new_v_pa_2 * Math.sin(collision_angle) + v_pe_2 * Math.cos(collision_angle)

        }
    }
}


module.exports = Ball
