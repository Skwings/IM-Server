const ws = require('ws');

;((Ws) => {

    const server = new Ws.Server({
        port: 8000
    })

    const init = () => {
        bindEvent();
    }

    const bindEvent = () =>{
        server.on('open', handleWsOpen);
        server.on('close', handleWsClose);
        server.on('error', handleWsError);
        server.on('connection', handleWsConnction);
    }

    function handleWsOpen(){
        console.log('BE: Websocket Open');
    }
    function handleWsClose(){
        console.log('BE: Websocket Close');
    }
    function handleWsError(){
        console.log('BE: Websocket Error');
    }
    function handleWsConnction(ws){
        console.log('BE: Websocket Connection');
        ws.on('message', handleMsg)
    }

    function handleMsg(data){
        server.clients.forEach((c) => {
            c.send(data)
        })
    }

    init();
})(ws)