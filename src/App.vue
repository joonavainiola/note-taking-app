<template>
  <div id="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "app",
  components: {
    Sidebar,
  },
  created: function () {
    this.$store.dispatch("getNotes").then((response) => {
      console.log("Got data");
    }),
      (error) => {
        console.error("Got nothing");
      };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
}

@media only screen and (max-width: 900px) {
  #app {
    flex-direction: column;
  }
}
</style>
