const {
    app,
    BrowserWindow,
    Notification
} = require('eletron')

const createWindows = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindows()
    novaNotification();
})

function novaNotification() {
    if (!Notification.isSuppoted()) {
        return;
    }

    const novaNotification = new Notification({
        title: "Aplicativo aberto",
        subtitle: "Subtitulo",
        body: "O aplicativo foi aberto com sucesso",
        silent: true,
        timeoutType: "default",
    });

    console.log("Exibindo notificação");

    novaNotification.show();
}
