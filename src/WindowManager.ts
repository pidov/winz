import StickyWindow from './StickyWindow'

export default class WindowManager {
    public windows;
    constructor(props) {
        this.windows = [];
    }

    createWindow() {
        const window = new StickyWindow({width: 800, height: 600});
        console.log(window.sticky)
        return 
    }
}
