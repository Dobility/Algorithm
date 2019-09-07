module.exports = {
    node: {
        "tagName": "div",
        "classList": ["my-class-a", "my-class-b"],
        "index": 1,
        // "otherAttributes": {
        //     "hidden": "",
        //     "data-my-key": "my-value"
        // },
        "childNodes": [ {
            "tagName": "span",
            "classList": ["my-class-b"],
            "index": 2,
            // "otherAttributes": {},
            "childNodes": [{
                "tagName": "span",
                "classList": ["my-class-c"],
                "index": 3,
                // "otherAttributes": {},
                "childNodes": []
            }, {
                "tagName": "span",
                "classList": ["my-class-c"],
                "index": 4,
                // "otherAttributes": {},
                "childNodes": []
            }]
        } ]
    },
    className: ".my-class-b .my-class-c"
}
