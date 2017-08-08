<template lang="pug">
  .column.has-text-centered
    figure.logo.image.is-96x96
      img(src="../assets/logo.png")
    .title.is-6 上海大学开源社区直播站
    .chat-list
      table.table.is-fullwidth.is-striped.is-narrow
        thead
          tr
            th 弹幕内容
        tbody
          tr(v-for="text in danmaku")
            td {{text}}
    .send-message.field.has-addons
      .control.is-expanded
        input.input(type="text", v-model="message")
      .control
        a.button.is-primary(@click="send") 发送
</template>

<script>
  import EventBus from '../common/event-bus'
  export default {
    name: 'sidebar',
    mounted: function () {
      EventBus.$on('received', (data) => {
        this.danmaku.push(data.content)
      })
    },
    data: function () {
      return {
        'danmaku': [],
        'message': ''
      }
    },
    methods: {
      send: function () {
        EventBus.$emit('send', this.message)
        this.message = ''
      }
    }
  }
</script>

<style lang="sass" scoped>
  .column
    display: flex
    flex-direction: column
  .logo
    margin: 0 auto
  .chat-list
    flex: 1
    border: 1px solid #aaa
    border-radius: 5px
    margin-bottom: 10px
    overflow-y: scroll
    height: 350px
  .chat-list::-webkit-scrollbar
    width: 3px
</style>
