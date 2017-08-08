import json
from sanic import Sanic
from websockets.exceptions import ConnectionClosed

app = Sanic(__name__)


connections = set()


@app.websocket('/danmaku')
async def danmaku(request, ws):
    """
     Message Format 1
       type: shakehand
     Message Format 2
       type: danmaku
       content: danmaku text content
    """
    while True:
        connections.add(ws)
        message = await ws.recv()
        data = json.loads(message)
        print(data)
        for connection in connections.copy():
            try:
                print('Send message: ', message)
                await connection.send(message)
            except ConnectionClosed:
                print('Connection removed')
                connections.remove(connection)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)
