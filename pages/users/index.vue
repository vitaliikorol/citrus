<template>
  <section class="users">
    <h1 class="users__title">{{pageTitle}}</h1>
    <input class="users__preferences_qty" type="text" ref="input" required v-on:keyup.enter="defineUserQty"
           :placeholder="inputPlaceholder">
    <p v-if="!alertValidation" class="alert__idle"></p>
    <p v-else class="alert__active">Please fill the field correctly</p>
    <form class="users__preferences">
      <input type="radio" id="male" name="gender" value="male" v-on:click="defineUserGender('male')">
      <label for="male" class="users__preferences_lb">Male</label>
      <input type="radio" id="female" name="gender" value="female" v-on:click="defineUserGender('female')">
      <label for="female" class="users__preferences_lb">Female</label>
      <input type="radio" id="any" name="gender" value="any" checked v-on:click="defineUserGender('')">
      <label for="any" class="users__preferences_lb">Any</label>
    </form>

    <ul class="users__list">
      <li v-for="user of users" :key="user.login.uuid" class="users__list_item">
        <a href="#" @click.prevent="showUser(user)">
          <img :src="user.picture.large" alt="" class="users__list_item_img">
        </a>
      </li>
    </ul>
    <div>
      <button class="btn actions__btn" v-on:click="defineNextPage">Next page</button>
      <button class="btn actions__btn" v-on:click="defineLoadMore">Load more</button>
    </div>
  </section>
</template>

<script>
  export default {
    async fetch({store}) {
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
      },
      count() {
        return this.$store.getters['users/count']
      },
      initialCount() {
        return this.$store.getters['users/initialCount']
      }
    },
    methods: {
      defineLoadMore() {
        this.$store.commit('users/setCount', {count: this.count + this.initialCount})
        this.$store.dispatch('users/fetch')
        console.log(this.count)
        console.log(this.usersQty)
      },
      defineNextPage() {
        this.$store.commit('users/setCount', {count: this.initialCount})
        this.$store.dispatch('users/fetch')
      },
      defineUserGender(value) {
        this.$store.commit('users/setGender', {gender: value})
        this.$store.dispatch('users/fetch')
      },
      defineUserQty() {
        const numberPattern = /\d+/g;
        const validation = this.$refs.input.value.trim().match(numberPattern)
        this.usersQty = parseInt(validation.join())
        if (validation !== null && this.usersQty !== this.count && this.usersQty !== 0 && this.usersQty <= 20) {
          this.user = validation.join()
          this.inputPlaceholder = `${validation.join()} user(s) downloaded`
          this.$refs.input.value = ''
          this.alertValidation = false
          this.$store.commit('users/setInitialCount', {initialCount: this.usersQty})
          this.$store.commit('users/setCount', {count: this.usersQty})
          this.$store.dispatch('users/fetch')
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

<style lang="scss">
  .actions__btn {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 3px;
  }

  .alert {
    &__idle {
      height: 24px;
      margin: 0;
    }

    &__active {
      margin: 0;
      animation: color-change 1s infinite;
    }
  }

  .users {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__preferences {
      margin-bottom: 20px;

      &_lb {
        margin: 0 15px 0 2px;
      }

      &_qty {
        width: 300px;
        text-align: center;
      }
    }

    &__title {
      text-align: center;
      margin-bottom: 50px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: center;

      &_item {
        margin: 10px 20px;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        overflow: hidden;
        transition: width 0.3s, height 0.3s;
        border: 2px solid crimson;

        &_img {
          transition: transform 0.3s;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  @keyframes color-change {
    0% {
      color: crimson;
    }
    50% {
      color: white
    }
    100% {
      color: crimson;
    }
  }
</style>
