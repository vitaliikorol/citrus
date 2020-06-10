<template>
  <section class="card error__card">
    <div class="card-body error__body">
      <h2 class="card-title">Page wasn't found</h2>
      <div>
        <nuxt-link to="/" class="btn btn-primary">Home</nuxt-link>
        <a @click="goBack" class="btn btn-primary">Go back</a></div>
    </div>
  </section>
</template>

<script>
  export default {
    layout: 'empty',
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .error__card {
    margin-top: 20vh;
  }

  .error__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
