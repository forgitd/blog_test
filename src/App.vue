<template>
  <div>
    <main/>
    <router-view/>
  </div>
</template>

<script>
  import main from "./views/main";
  export default {
    name: 'App',
    components: {
      main,
    }
  }
</script>

<style>

</style>
