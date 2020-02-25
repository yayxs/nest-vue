<template>
  <div />
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const res = await this.$http.get('/demoinfo')
      global.console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
