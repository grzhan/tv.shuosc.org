<template lang="pug">
  section.section
    .container.box
      .columns.is-desktop
        .column.is-two-thirds
          player
        .column
          chat
</template>

<script>
import Chat from './components/Chat'
import Player from './components/Player'
import Trianglify from 'trianglify'

export default {
  name: 'app',
  components: {
    Chat,
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

</style>
