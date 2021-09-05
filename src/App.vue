<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <letter-picker v-model="letter" type="lowercase" placeholder="lalala" />
    <el-input v-model="text" size="small" placeholder="lalala"></el-input>
    <div>pppp</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      letter: '',
      text: ''
    }
  },
  components: {}
}
</script>

<style lang="scss">
</style>
