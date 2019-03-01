<template>
  <div id="app">

    <div class="top-bar">
      <div id="logo">
        <img src="https://www.google.com.ph/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="">
      </div>
      <button class="menu-button open-button" @click="show = !show">
        <b class="fa fa-times"></b>
      </button>
    </div>

    <div id="nav" class="slideInRight animated" v-bind:class="[ show == true ? showNav : hideNav]">
      <button class="close-button" id="close-button" @click="show = !show">
        <b class="fa fa-times"></b>
      </button>
      <div class="nav-links slideInUp animated">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <!-- <router-link to="/team">Team</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/technologies">Technologies</router-link>
        <router-link to="/opportunity">Opportunity</router-link> -->
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      showNav: 'showNav',
      hideNav: 'hideNav'
    }
  },
}
</script>
<style lang="scss">
</style>
