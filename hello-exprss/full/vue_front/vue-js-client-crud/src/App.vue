<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">室內定位</router-link>
      
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
    <div class="row justify-content-center align-items-stretch">
        <div class="col-md-8 mt-2 " style="width:1750px; height:1750px">
          <LineChart/>
        </div>
    </div>
  </div>
</template>

<script>

import LineChart from './components/LineChart'

export default {
  name: "app",
  components: {
    LineChart,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
