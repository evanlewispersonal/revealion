const m = require('mithril')

const Ball = require('../models/balls')
const Icons = require('./components/icons')

let image_pairs = [
    {
        bottom: {
            image: 'images/flowers.jpg',
            alt: 'A dozen rainbow roses viewed from the top',
        },
        top: {
            image: 'images/flowers_bw.jpg',
            alt: 'A dozen rainbow roses viewed from the top. Black and White',
        },
    },
    {
        bottom: {
            image: 'images/birds_colour.jpg',
            alt: 'Five birds on branches of a tree',
        },
        top: {
            image: 'images/birds_bw.jpg',
            alt: 'Five birds on branches of a tree. Graphite filter'
        },
        // shift: 6.1,
    },

    {
        bottom: {
            image: 'images/riverboat.jpg',
            alt: 'A red boad floating past coloured apartment blocks',
        },
        top: {
            image: 'images/riverboat_bw.jpg',
            alt: 'A red boad floating past coloured apartment blocks. Black and White',
        },
    },
    {
        bottom: {
            image: 'images/fruitsalad.jpg',
            alt: 'Small fruit including strawberrys, kiwi fruit and oranges on little wooden skewers',
        },
        top: {
            image: 'images/fruitsalad_bw.jpg',
            alt: 'Small fruit including strawberrys, kiwi fruit and oranges on little wooden skewers. Black and White',
        },
    },
]

let all_balls = [
    new Ball(20, 20),
    new Ball(70, 15)
]

let Revealion = {
    oninit: (vnode) => {
        vnode.state.image_number = 0
        vnode.state.angle = 0

        all_balls.forEach(
            ball => ball.reset()
        )

        //Percent of screen to centre point


        setInterval(() => {
            all_balls.forEach(
                ball => ball.update(all_balls, vnode.state.angle)
            )

        }, 1000 / all_balls[0].framerate);
    },

    view: vnode => {

        return [
            m('.revealion',
                {
                    onmousemove: (e) => {

                        let box = document.getElementById('revealion_id')

                        var rect = box.getBoundingClientRect();
                        var x = e.clientX - rect.left; //x position within the element.
                        var y = e.clientY - rect.top;  //y position within the element.


                        vnode.state.cursorX = 100 * x / box.clientWidth
                        vnode.state.cursorY = 100 * y / box.clientHeight
                    },
                    id: 'revealion_id',
                    role: 'img',
                    alt: 'A graphite picture of birds. two balls bounce around the image revealing a coloured image underneath.',
                    style: vnode.attrs.angle != 0 ? 'transform: rotate(' + vnode.attrs.angle + 'deg)' : '',
                    class: vnode.state.cursor_mode ? 'invisible_cursor' : '',
                },

                !vnode.state.background_off ? m('.image_container',
                    !vnode.state.flipped ? m(top_image, { image: image_pairs[vnode.state.image_number].top, shift: image_pairs[vnode.state.image_number].shift }) : m(bottom_image, { image: image_pairs[vnode.state.image_number].bottom })
                ) : [],

                (vnode.state.cursor_mode ? [{ x: vnode.state.cursorX, y: vnode.state.cursorY }] : all_balls).map(ball => [

                    m('.clip_ball',
                        {
                            style:
                                '-webkit-clip-path: circle(9.5% at ' +
                                ball.x +
                                '% ' + (ball.y) + '%' +
                                ')'
                        },

                        vnode.state.flipped ? m(top_image, { image: image_pairs[vnode.state.image_number].top, shift: image_pairs[vnode.state.image_number].shift }) : m(bottom_image, { image: image_pairs[vnode.state.image_number].bottom })
                    ),


                    m('.clip_outline',
                        {
                            class: vnode.state.background_off ? 'dark_circle' : '',
                            style: 'left: ' +
                                (ball.x) +
                                '%; top: calc(' +
                                ball.y +
                                '%'

                        }
                    )
                ]
                )
            ),

            m('.revealion_buttons',
                m('.flip',
                    {
                        class: vnode.state.flipped ? 'flip_colour' : '',
                        onclick: () => {
                            vnode.state.flipped = !vnode.state.flipped
                        }
                    },
                ),
                m('.mode',
                    {
                        onclick: () => {
                            vnode.state.background_off = !vnode.state.background_off
                        }
                    },
                    m(vnode.state.background_off ? Icons.image_off : Icons.image_on)
                ),

                m('.switch_photos',
                    {
                        onclick: () => {
                            vnode.state.image_number++
                            if (vnode.state.image_number == image_pairs.length) vnode.state.image_number = 0
                        }
                    },
                    m(Icons.reverse)
                ),
                m('.mode',
                    {
                        onclick: () => {
                            vnode.state.cursor_mode = !vnode.state.cursor_mode
                        }
                    },
                    m(vnode.state.cursor_mode ? Icons.pointer : Icons.balls)
                ),
            )
        ]
    }
}

const top_image = {
    view: vnode => {
        // console.log('transform: translateY(' + (vnode.attrs.shift || 0) + '%);')
        return [
            m('img.chameleon_images_image', {
                style: 'transform: translateY(' + (vnode.attrs.shift || 0) + '%);',
                src: vnode.attrs.image.image,
                alt: vnode.attrs.image.alt
            })
        ]
    }
}

const bottom_image = {
    view: vnode => {
        return [
            m('img.chameleon_images_image', {
                src: vnode.attrs.image.image,
                alt: vnode.attrs.image.alt
            }),
        ]
    }
}

module.exports = Revealion