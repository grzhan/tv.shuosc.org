<template lang="pug">
  .column.is-three-quarters
    div#player.player-container(ref="player")
</template>

<script>
  import EventBus from '../common/event-bus'

  export default {
    name: 'player',
    mounted: function () {
      const Moe2 = window['Moe2']
      const element = this.$refs.player
      const player = new Moe2.Player(element, '上海大学开源社区直播')
      player.initFlv('http://tv.shuosc.org:9000/live/livestream.flv')
      EventBus.$on('received', (data) => {
        player.pushDanmaku(data.content)
      })
    }
  }
</script>

<style lang="sass">
  #player
    position: relative
    width: 100%
</style>
