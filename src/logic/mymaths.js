
const mymaths = {

    distance: (loc1, loc2) => {

        let x_dist = loc2[0] - loc1[0]
        let y_dist = loc2[1] - loc1[1]
        return Math.sqrt(x_dist ** 2 + y_dist ** 2)
    },

    get_angle: (loc1, loc2) => {

        let x_dist = loc2[0] - loc1[0]
        let y_dist = loc1[1] - loc2[1]

        let angle = Math.atan2(y_dist, x_dist)
        angle = angle % (2 * Math.PI)
        return angle
    }
}

module.exports = mymaths
