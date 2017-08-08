/**
 * Created by grzhan on 2017/8/8.
 */
export default class AppSocket {
  constructor (url, func) {
    this.ws = new WebSocket(url)
    this.url = url
    this.func = func
    this.resetTime = new Date()
    this.retry = 0
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
    if (this.ws.readyState > 1) {
      this.ws = new WebSocket(this.url)
      this.retry = 0
      this.resetTime = new Date()
      this.create()
    }
    this.ws.send(JSON.stringify(data))
  }

  reconnect () {
    const now = new Date()
    if (now - this.resetTime > 10000) {
      this.resetTime = now
      this.retry = 0
      this.ws = new WebSocket(this.url)
      this.create()
    } else {
      this.retry += 1
      if (this.retry < 5) {
        this.create()
      }
    }
  }
}
