var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.stickit",
            "location": "jam/backbone.stickit",
            "main": "backbone.stickit.js"
        },
        {
            "name": "bootstrap",
            "location": "jam/bootstrap"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.17",
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "backbone.stickit": {
            "deps": [
                "backbone"
            ]
        },
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "backbone",
            "location": "jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.stickit",
            "location": "jam/backbone.stickit",
            "main": "backbone.stickit.js"
        },
        {
            "name": "bootstrap",
            "location": "jam/bootstrap"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "backbone.stickit": {
            "deps": [
                "backbone"
            ]
        },
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "backbone",
            "location": "jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.stickit",
            "location": "jam/backbone.stickit",
            "main": "backbone.stickit.js"
        },
        {
            "name": "bootstrap",
            "location": "jam/bootstrap"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "backbone.stickit": {
            "deps": [
                "backbone"
            ]
        },
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}