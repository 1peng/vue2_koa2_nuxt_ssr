<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo"/>
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <h2>
      <button @click="reduction">-</button>
      {{counter}}
      <button @click="increment">+</button>
    </h2>
    <nuxt-link class="button" to="/about">
      About page

    </nuxt-link>
  </section>
</template>
<script>
  import {mapMutations, mapGetters} from 'vuex'
  import services from '../../helper/services'
  export default {
    async asyncData ({req}) {
      let advList = await services.local.getUserList()
      return {
        name: req ? 'server' : 'client',
        advList: advList
      }
    },
    head () {
      return {
        title: `Home Page (${this.name}-side)`
      }
    },
    methods: {
      ...mapMutations(['increment', 'reduction'])
    },
    computed: {
      ...mapGetters(['counter'])
    }
  }
</script>
<style scoped>
  .title {
    margin: 50px 0;
  }
</style>
