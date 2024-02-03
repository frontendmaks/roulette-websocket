const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 8080 });
//ws://localhost:8080
wss.on('connection', (ws) => {
    console.log('Incoming connection...');

    ws.on('message', (message) => {
        // Відправляємо повідомлення відразу після отримання
        const computer_random_num = Math.floor(Math.random() * 14);
        ws.send(computer_random_num);
    });
});