const { BrowserWindow } = require('electron');

class StickyWindow extends BrowserWindow {
    constructor(options) {
        super(options);
    }

    get sticky() {
        return this.sticky;
    }

}

module.exports = StickyWindow