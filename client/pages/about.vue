<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo"/>
    <h1 class="title">
      This page is loaded from the {{ name }}
    </h1>
    <h2 class="info" v-if="name === 'client'">
      Please refresh the page
    </h2>
    <h3 v-for="(about, index) in abouts">
      {{about.text}} {{about.done?'恩':'不'}}
      <button @click="toggle(about)">toggle</button>
    </h3>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
    <h2>
      <input v-model="text" placeholder="请输入"/>
    </h2>
    <h2>
      <button class="button" @click="add(text)">添加一条</button>
    </h2>
  </section>
</template>
<script>
  import {mapMutations, mapState} from 'vuex'
  export default {
    data () {
      return {
        text: ''
      }
    },
    asyncData ({req}) {
      return {
        name: req ? 'server' : 'client'
      }
    },
    head () {
      return {
        title: `About Page (${this.name}-side)`
      }
    },
    methods: {
      ...mapMutations({
        'add': 'about/add',
        'toggle': 'about/toggle'
      })
    },
    computed: {
      ...mapState({
        counter: 'counter',
        abouts: state => state.about.abouts
      })
    }
  }
</script>
<style scoped>
  .title {
    margin-top: 50px;
  }

  .info {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
    margin-top: 10px;
  }

  .button {
    margin-top: 50px;
  }
</style>
