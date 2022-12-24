<template>
  <div class="d-flex">
    <side-bar v-if="this.$store.state.userState"/>
    <div class="content d-flex flex-column">

      <top-bar v-if="this.$store.state.userState"/>
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "@/renderer/components/SideBar.vue";
import TopBar from "@/renderer/components/TopBar.vue"

export default {
  name: "App",
  components: { SideBar, TopBar },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $main-color;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
