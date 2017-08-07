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

export default {
  name: 'app',
  components: {
    Sidebar,
    Player
  },
  created: () => {
    const background = Trianglify({
      y_colors: ['#2b7c6b', '#56c6af', '#44967f', '#22bc9e'],
      x_colors: ['#34485e', '#435c70'],
      cell_size: 150,
      width: window.screen.width,
      height: window.screen.height
    })
    document.body.style['background'] = 'url(' + background.png() + ')'
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
