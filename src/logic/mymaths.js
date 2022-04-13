
const mymaths = {

    distance: (loc1, loc2) => {

        let x_dist = loc2[0] - loc1[0]
        let y_dist = loc2[1] - loc1[1]
        // console.log(loc1, loc2, x_dist, y_dist)

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

/**
import math

def distance(loc1,loc2):
    # Distance from loc1 to loc2
    x_dist = loc2[0] - loc1[0]
    y_dist = loc2[1] - loc1[1]
    
    return math.sqrt(x_dist**2 + y_dist**2)

def get_angle(loc1,loc2):
    # Angle from loc1 to loc2
    x_dist = loc2[0] - loc1[0]
    y_dist = loc1[1] - loc2[1]

    angle =  math.atan2(y_dist, x_dist)
    angle = angle % (2*math.pi)
    return angle

def rectangle_reflect(arrow, obstacle):
    # Reflects angle off of rectangular obstacle
    arrow.angle = arrow.angle % (2*math.pi)

    if arrow.angle < get_angle(arrow.location, obstacle.getTopRightCorner()):
        arrow.angle = (math.pi) - arrow.angle
    elif arrow.angle < get_angle(arrow.location, obstacle.getTopLeftCorner()):
        arrow.angle = (2*math.pi) - arrow.angle
    elif arrow.angle < get_angle(arrow.location, obstacle.getBottomLeftCorner()):
        arrow.angle = (math.pi) - arrow.angle
    elif arrow.angle < get_angle(arrow.location, obstacle.getBottomRightCorner()):
        arrow.angle = (2*math.pi) - arrow.angle
    else:
        arrow.angle = (math.pi) - arrow.angle

    arrow.angle = arrow.angle % (2*math.pi)
    arrow.location[0] += 10*math.cos(arrow.angle)
    arrow.location[1] -= 10*math.sin(arrow.angle)

def collision(ball1, ball2, recurse = True):

    v_1 = math.sqrt(ball1.v_x**2 + ball1.v_y**2)
    v_2 = math.sqrt(ball2.v_x**2 + ball2.v_y**2)


    c_angle = -((get_angle((ball1.x, ball1.y),(ball2.x, ball2.y)))) % (2*math.pi)
    
    
    if ball1.id != ball2.id:


        #print("c_a = " + str(180*c_angle/math.pi))


        #print("1:V_x = " + str(ball1.v_x))
        #print("V_y = " + str(ball1.v_y))

        #print("2:V_x = " + str(ball2.v_x))
        #print("V_y = " + str(ball2.v_y))


        #Rotated velocities
        v_pa_1 =  ball1.v_x * math.cos(c_angle) + ball1.v_y * math.sin(c_angle)
        v_pe_1 =  ball1.v_y * math.cos(c_angle) - ball1.v_x * math.sin(c_angle)
        
        v_pa_2 =  ball2.v_x * math.cos(c_angle) + ball2.v_y * math.sin(c_angle)
        v_pe_2 =  ball2.v_y * math.cos(c_angle) - ball2.v_x * math.sin(c_angle)


        #print(v_pa_1)
        #print(v_pe_1)
        #new_v_pa_1 = v_pa_1
        #new_v_pa_2 = v_pa_2



        new_v_pa_1 = (v_pa_1*(ball1.weight-ball2.weight) + 2*ball2.weight*v_pa_2)/(ball1.weight + ball2.weight)
        new_v_pa_2 = (v_pa_2*(ball2.weight-ball1.weight) + 2*ball1.weight*v_pa_1)/(ball1.weight + ball2.weight)


        ball1.v_x = new_v_pa_1 * math.cos(c_angle) - v_pe_1 * math.sin(c_angle)
        ball1.v_y = new_v_pa_1 * math.sin(c_angle) + v_pe_1 * math.cos(c_angle)

        ball2.v_x = new_v_pa_2 * math.cos(c_angle) - v_pe_2 * math.sin(c_angle)
        ball2.v_y = new_v_pa_2 * math.sin(c_angle) + v_pe_2 * math.cos(c_angle)

            

        
        if recurse:
            pass
            #print("1:V_x = " + str(ball1.v_x))
            #print("V_y = " + str(ball1.v_y))


        

        
        if recurse:
            pass
            #print("2:V_x = " + str(ball2.v_x))
            #print("V_y = " + str(ball2.v_y))
            #print()
            #print()
            #print()
            
    




            **/