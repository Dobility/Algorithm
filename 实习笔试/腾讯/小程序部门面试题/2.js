function querySelectorAll(selector, DOM) {
    let classNames = selector.split(' ')

    let nodes = [DOM]
    for (let i = 0; i < classNames.length; i++) {
        nodes = [].concat(querySelector(classNames[i], nodes))
    }
    return nodes
}

function querySelector(className, nodes) {
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i]
        if (node.classList.includes(className)) {
            return node
        } else if (node.childNodes && node.childNodes.length) {
            return querySelector(className, node.childNodes)
        } else {
            return node
        }
    }
}

let n = querySelectorAll('my-class-c', {
        "tagName": "div",
        "classList": ["my-class-a", "my-class-b"],
        "otherAttributes": {
            "hidden": "",
            "data-my-key": "my-value"
        },
        "childNodes": [ {
            "tagName": "span",
            "classList": ['my-class-c'],
            "otherAttributes": {},
            "childNodes": []
        } ]
    }
)

console.log(n)
