/**
 * Created by grzhan on 2017/8/8.
 */
export default class AppSocket {
  constructor (url, func) {
    this.ws = new WebSocket(url)
    this.url = url
    this.func = func
    this.create()
  }

  create () {
    this.ws.addEventListener('open', () => {
      console.log('Connection open')
    })
    this.ws.addEventListener('close', () => {
      this.reconnect()
    })
    this.ws.addEventListener('error', () => {
      this.reconnect()
    })
    this.ws.addEventListener('message', (event) => {
      console.log('Message received: ', event.data)
      this.func(event)
    })
  }

  send (data) {
    this.ws.send(JSON.stringify(data))
  }

  reconnect () {
    this.ws = new WebSocket(this.url)
    this.create()
  }
}
