const { app, BrowserWindow } = require('electron')
const StickyWindow = require('./StickyWindow')
const path = require('path')

app.on('ready', _ => {
    const sticky = new StickyWindow({
        width: 800,
        height: 600,
        backgroundColor: '#2e2c29',
        sticky: false,
        useContentSize: false,
        frame: false,
        transparent: true,
        backgroundColor: '#300000FF'
    });

    console.log(path.join(__dirname, 'index.html'))

    sticky.loadURL(`file://${path.join(__dirname, 'index.html')}`)
})