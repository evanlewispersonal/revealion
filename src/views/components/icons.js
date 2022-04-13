const m = require("mithril")

const Icons = {

    reverse: {
        view: vnode => [
            m("svg", { "class": "icon icon-tabler icon-tabler-rotate", "xmlns": "http://www.w3.org/2000/svg", "width": "44", "height": "44", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                [
                    m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                    m("path", { "d": "M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" })
                ]
            )
        ]
    },

    pointer: {
        view: vnode => {
            return [
                m("svg", {
                    "class": "icon icon-tabler icon-tabler-hand-finger",
                    "xmlns": "http://www.w3.org/2000/svg",
                    "width": "44",
                    "height": "44",
                    "viewBox": "0 0 24 24",
                    "stroke-width": "1.5",
                    "stroke": 'currentColor',
                    "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round"
                },
                    [
                        m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                        m("path", { "d": "M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" }),
                        m("path", { "d": "M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5" }),
                        m("path", { "d": "M14 10.5a1.5 1.5 0 0 1 3 0v1.5" }),
                        m("path", { "d": "M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" })
                    ]
                )
            ]
        }
    },

    balls: {
        view: vnode => {
            return [
                m("svg", {
                    "class": "icon icon-tabler icon-tabler-circle",
                    "xmlns": "http://www.w3.org/2000/svg", "width": "44", "height": "44",
                    "viewBox": "0 0 24 24", "stroke-width": "1.5",
                    "stroke": 'currentColor',
                    "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round"
                },
                    [
                        m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                        m("circle", { "cx": "12", "cy": "12", "r": "9" })
                    ]
                )
            ]
        }
    },


    image_on: {
        view: vnode => {
            return [
                m("svg", { "class": "icon icon-tabler icon-tabler-photo", "xmlns": "http://www.w3.org/2000/svg", "width": "44", "height": "44", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": 'currentColor', "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                    [
                        m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                        m("line", { "x1": "15", "y1": "8", "x2": "15.01", "y2": "8" }),
                        m("rect", { "x": "4", "y": "4", "width": "16", "height": "16", "rx": "3" }),
                        m("path", { "d": "M4 15l4 -4a3 5 0 0 1 3 0l5 5" }),
                        m("path", { "d": "M14 14l1 -1a3 5 0 0 1 3 0l2 2" })
                    ]
                )
            ]
        }
    },

    image_off: {
        view: vnode => {
            return [
                m("svg", { "class": "icon icon-tabler icon-tabler-photo-off", "xmlns": "http://www.w3.org/2000/svg", "width": "44", "height": "44", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": 'currentColor', "fill": "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                    [
                        m("path", { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" }),
                        m("line", { "x1": "3", "y1": "3", "x2": "21", "y2": "21" }),
                        m("line", { "x1": "15", "y1": "8", "x2": "15.01", "y2": "8" }),
                        m("path", { "d": "M19.121 19.122a3 3 0 0 1 -2.121 .878h-10a3 3 0 0 1 -3 -3v-10c0 -.833 .34 -1.587 .888 -2.131m3.112 -.869h9a3 3 0 0 1 3 3v9" }),
                        m("path", { "d": "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5" }),
                        m("path", { "d": "M16.32 12.34c.577 -.059 1.162 .162 1.68 .66l2 2" })
                    ]
                )
            ]
        }

    },

}

module.exports = Icons