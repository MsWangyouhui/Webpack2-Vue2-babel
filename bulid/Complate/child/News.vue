<template>
  <div class="box">
    <h1 class="title">欢迎留下建议！</h1>
    <quill :options="{ theme: 'snow' }">
      <h2>请留下您宝贵的意见，谢谢参与！祝您生活愉快！</h2>
    
    </quill>
  </div>
</template>

<script>

import Quill from 'vue-bulma-quill'

export default {
  components: {
    Quill
  }
}
</script>

<style lang="styl">
@import "~quill/assets/snow"
</style>
