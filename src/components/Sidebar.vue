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
          tr
            td 测试
    .send-message.field.has-addons
      .control.is-expanded.is-loading
        input.input(type="text")
      .control
        a.button.is-info 发送
</template>

<script>
  export default {
    name: 'sidebar'
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
</style>
