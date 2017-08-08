<template lang="pug">
  section.section
    .container.box
      .columns.is-desktop
        player
        sidebar
</template>

<script>
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Trianglify from 'trianglify'
import AppSocket from './common/app-socket'
import EventBus from './common/event-bus'

export default {
  name: 'app',
  components: {
    Sidebar,
    Player
  },
  created: function () {
    const background = Trianglify({
      y_colors: ['#2b7c6b', '#56c6af', '#44967f', '#22bc9e'],
      x_colors: ['#34485e', '#435c70'],
      cell_size: 150,
      width: window.screen.width,
      height: window.screen.height
    })
    document.body.style['background'] = 'url(' + background.png() + ')'
    const socket = new AppSocket('ws://localhost:8000/danmaku', (event) => {
      const data = JSON.parse(event.data)
      console.log('Socket event:', event.data)
      if (data.type === 'danmaku') {
        EventBus.$emit('received', data)
      }
    })
    EventBus.$on('send', (text) => {
      socket.send({type: 'danmaku', content: text})
    })
  }
}
</script>

<style lang="sass">
  @import "./common/styles"
  html
    background: transparent
  body
    color: #333
  ::-webkit-scrollbar
    width: 5px
  ::-webkit-scrollbar-thumb
    border-radius: 5px
</style>
