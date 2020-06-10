<template>
  <section>
    <h1 class="users__title">{{pageTitle}}</h1>
    <ul class="users">
      <li v-for="user of users" :key="user.login.uuid" class="users__item">
        <a href="#" @click.prevent="showUser(user)">
          <img :src="user.picture.large" alt="" class="users__item_img">
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    async asyncData({$axios}) {
      const data = await $axios.$get('https://randomuser.me/api/?page=1&results=10&seed=abc')
      const users = data.results
      return {users}
    },
    data: () => ({
      pageTitle: 'Users List'
    }),
    methods: {
      showUser(user) {
        this.$router.push('/users/' + user.name.title + user.name.first + user.name.last)
      }
    }
  }
</script>

<style>
  .users {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
  }

  .users__title {
    text-align: center;
    margin-bottom: 50px;
  }

  .users__item {
    margin: 10px 20px;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    overflow: hidden;
    transition: width 0.3s, height 0.3s;
    border: 2px solid crimson;
  }
  .users__item_img {
    transition: transform 0.3s;
  }

  .users__item_img:hover {
    transform: scale(1.2);
  }
</style>
