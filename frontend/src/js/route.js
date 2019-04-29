'use stict';

function Route(name, htmlName, defaultRoute, initCallback) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, defaultRoute, initCallback);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    default: undefined,
    initCallback: undefined,
    constructor: function (name, htmlName, defaultRoute, initCallback) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
        this.initCallback = initCallback;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name; 
    }
}
