<template>
  <section class="card error__card">
    <div class="card-body error__body">
      <h2 class="card-title">Page wasn't found</h2>
      <div>
        <nuxt-link to="/" class="btn actions__btn">Home</nuxt-link>
        <a @click="goBack" class="btn actions__btn">Go back</a>
      </div>
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
  .actions__btn {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 3px;
  }

  .error__card {
    margin-top: 20vh;
  }

  .error__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
