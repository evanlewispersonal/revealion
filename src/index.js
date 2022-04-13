const m = require('mithril')

console.log("HEYfuckers")

let revealion = require('./views/revealion')
console.log("HEYfuckers2")

// m.route.prefix = ''
let root = document.body
console.log("HEYfuckers3")

let routes = {}
routes['/'] = {
    render: vnode => m(revealion)
}
console.log("HEYfuckers4")

m.route(root, "/", routes);
console.log("HEYfuckers5")
