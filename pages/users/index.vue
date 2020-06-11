<template>
  <section class="users">
    <h1 class="users__title">{{pageTitle}}</h1>
      <input      class="users__preferences_qty"      type="text"      ref="input"      required      v-on:keyup.enter="defineUserQty"      :placeholder="inputPlaceholder"    >
    <p v-if="!alertValidation" class="alert__idle"></p>
    <p v-else class="alert__active">Please fill the field correctly</p>
      <form class="users__preferences">
        <input type="radio" id="male" name="gender" value="male">
        <label for="male" class="users__preferences_lb">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female"  class="users__preferences_lb">Female</label>
        <input type="radio" id="any" name="gender" value="any">
        <label for="any"  class="users__preferences_lb">Any</label>
      </form>

    <ul class="users__list">
      <li v-for="user of users" :key="user.login.uuid" class="users__list_item">
        <a href="#" @click.prevent="showUser(user)">
          <img :src="user.picture.large" alt="" class="users__list_item_img">
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {

    // async setId ({store}) {
    //   await store.dispatch('users/setId(5)')
    // },
    async fetch ({store}) {
      if (store.getters['users/users'].length === 0) {
        await store.dispatch('users/fetch')
      }
    },
    data: () => ({
      pageTitle: 'Users List',
      usersQty: 0,
      alertValidation: false,
      inputPlaceholder: 'Please enter whole number from 1 to 20'
    }),
    computed: {
      users() {
        return this.$store.getters['users/users']
      }
    },
    methods: {
      defineUserQty() {
        const numberPattern = /\d+/g;
        const validation = this.$refs.input.value.trim().match(numberPattern)
        if (validation !== null) {
          this.user = validation.join()
          this.inputPlaceholder = `${validation.join()} user(s) downloaded`
          this.$refs.input.value = ''
          this.alertValidation = false
          this.$emit('usersOnPage', this.usersQty)
          console.log(this.users)
        } else {
          this.alertValidation = true
          this.$refs.input.value = ''
          this.inputPlaceholder = 'Please enter whole number from 1 to 20'
        }
      },
      showUser(user) {
        this.$router.push('/users/' + user.name.title + user.name.first + user.name.last)
      }
    }
  }
</script>

<style>

  .users__preferences {
    margin-bottom: 20px;
  }

  .users__preferences_lb {
    margin: 0 15px 0 2px;
  }

  .alert__idle {
    height: 24px;
    margin-bottom: 16px;
  }

  .alert__active {
    animation: color-change 1s infinite;
  }

  @keyframes color-change {
    0% { color: crimson; }
    50% { color: white }
    100% { color: crimson; }
  }

  .users__list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
  }

  .users__preferences_qty {
    width: 300px;
    text-align: center;
  }

  .users {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .users__title {
    text-align: center;
    margin-bottom: 50px;
  }

  .users__list_item {
    margin: 10px 20px;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    overflow: hidden;
    transition: width 0.3s, height 0.3s;
    border: 2px solid crimson;
  }
  .users__list_item_img {
    transition: transform 0.3s;
  }

  .users__list_item_img:hover {
    transform: scale(1.2);
  }
</style>
