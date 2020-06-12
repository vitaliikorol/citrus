<template>
  <section>
    <div
      class="personCard"
      v-for="person of user">
      <header class="personCard__header">
        <div
          v-on:click="showDetails"
          class="personCard__header_img_wrap">
          <img :src="person.picture.large" alt="" class="personCard__header_img">
        </div>
      </header>
      <section class="personCard__details">
        <p class="personCard__details_title">{{title}}</p>
        <h2 class="personCard__details_description">{{description}}</h2>
      </section>
      <nav class="personCard__nav">
        <ul class="personCard__nav_list nl">
          <li
            class="nl__item nl__item_name"
            :class="{'active':(activeTab === name)}"
            v-on:mouseover="setView(
              name,
               person.name.first + ' ' + person.name.last
               )"
          ></li>
          <li class="nl__item nl__item_email"
              :class="{'active':(activeTab === email)}"
              v-on:mouseover="setView(email, person.email)"></li>
          <li class="nl__item nl__item_dob"
              :class="{'active':(activeTab === dob)}"
              v-on:mouseover="setView(dob, person.dob.date.split('').splice(0, 10).join('').replace(/-/g, '/'))"></li>
          <li class="nl__item nl__item_address"
              :class="{'active':(activeTab === address)}"
              v-on:mouseover="setView(address, person.location.street.number + ' ' + person.location.street.name)"></li>
          <li class="nl__item nl__item_phone"
              :class="{'active':(activeTab === phone)}"
              v-on:mouseover="setView(phone, person.phone)"></li>
          <li class="nl__item nl__item_pass"
              :class="{'active':(activeTab === pass)}"
              v-on:mouseover="setView(pass, person.login.password)"></li>
        </ul>
      </nav>
    </div>
    <div class="actions">
      <nuxt-link to="/" class="btn actions__btn">Home</nuxt-link>
      <a @click="goBack" class="btn actions__btn">Go back</a>
    </div>

  </section>
</template>

<script>
  export default {
    async asyncData({store, params}) {
      const user = store.getters['users/users'].filter(person => person.name.title + person.name.first + person.name.last === params.id)
      const description = user[0].name.first + ' ' + user[0].name.last
      const title = 'Hi my name is'
      const activeTab = name
      return {user, description, title, activeTab}
    },
    methods: {
      goBack() {
        this.$router.back();
      },
      setView(t, d) {
        this.title = t;
        this.description = d;
        this.activeTab = t;
      },
      showDetails() {
        alert(`My email is ${this.user[0].email}\nGender is ${this.user[0].gender}\nAge is ${this.user[0].dob.age}`)
      }
    },
    data: () => ({
      name: 'Hi, my name is',
      email: 'My email address is',
      dob: 'My birthday is',
      address: 'My address is',
      phone: 'My phone number is',
      pass: 'My password is'
    }),
  }
</script>

<style lang="scss">
  .actions {
    width: 200px;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    &__btn {
      background-color: rgba(0, 0, 0, 0.15);
      border-radius: 3px;
    }
  }

  .personCard {
    margin: 20px auto 0;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    overflow: hidden;
    width: 730px;
    &__header {
      display: flex;
      justify-content: center;
      height: 131px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      background-color: #f9f9f9;
      &_img {
        border-radius: 50%;
        overflow: hidden;
        width: 150px;
        height: 150px;
        &_wrap {
          margin-top: 20px;
          border: 1px solid rgba(0, 0, 0, 0.25);
          width: 160px;
          height: 160px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
    &__nav {
      display: flex;
      justify-content: center;
    }
    &__details {
      margin-top: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: Ubuntu, sans-serif;
      &_title {
        color: #999;
        font-size: 18px;
        margin: 0;
      }
      &_description {
        color: #2c2e31;
        font-size: 38px;
        margin: 5px;
      }
    }

  }

  .nl {
    display: flex;
    float: left;
    &__item {
      cursor: pointer;
      display: block;
      width: 40px;
      height: 48px;
      float: left;
      margin: 20px;
      background-image: url("/card_icons.png");
      background-size: 378px;
      transition: all .35s ease-out;
      background-position-y: 48px;
      &:hover {
        background-position-y: 0;
      }
      &_email {
        background-position-x: -68px;
      }
      &_dob {
        background-position-x: -136px;
      }
      &_address {
        background-position-x: -204px;
      }
      &_phone {
        background-position-x: -272px;
      }
      &_pass {
        background-position-x: -340px;
      }
    }
  }

  .active {
    background-position-y: 0;
  }
</style>
