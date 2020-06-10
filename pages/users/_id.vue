<template>
  <section>
    <div class="personCard" v-for="person of user">
      <header class="personCard__header">
        <div class="personCard__header_img_wrap">
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
            v-on:mouseover="setView(
              'Hi, my name is',
               person.name.first + ' ' + person.name.last
               )"
          ></li>
          <li class="nl__item nl__item_email" v-on:mouseover="setView('My email address is', person.email)"></li>
          <li class="nl__item nl__item_dob" v-on:mouseover="setView('My birthday is', person.dob.date)"></li>
          <li class="nl__item nl__item_address" v-on:mouseover="setView('My address is', person.location.street.number + ' ' + person.location.street.name)"></li>
          <li class="nl__item nl__item_phone" v-on:mouseover="setView('My phone number is', person.phone)"></li>
          <li class="nl__item nl__item_pass" v-on:mouseover="setView('My password is', person.login.password)"></li>
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
    async asyncData({$axios, params}) {
      const data = await $axios.$get('https://randomuser.me/api/?page=1&results=10&seed=abc')
      const user = data.results.filter(person => person.name.title + person.name.first + person.name.last === params.id)
      return {user}
    },
    methods: {
      goBack() {
        this.$router.back();
      },
      setView(i, o) {
        this.title = i;
        this.description = o;
      }
    },
    data: () => ({
      title: String,
      description: String,
    }),
  }
</script>

<style>
  .actions {
    width: 200px;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
  }

  .actions__btn{
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 3px;
  }

  .personCard {
    margin-top: 20px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    overflow: hidden;
  }

  .personCard__nav {
    display: flex;
    justify-content: center;
  }

  .nl {
    display: flex;
    float: left;
  }
  .nl__item {
    cursor: pointer;
    display: block;
    width: 40px;
    height: 48px;
    float: left;
    margin: 20px;
    background-image: url(/card_icons.png);
    background-size: 378px;
    background-position-y: -48px;
    transition: all .35s ease-out;
  }

  .nl__item_name {

  }

  .nl__item_email {

  }

  .nl__item_dob {

  }

  .nl__item_address {

  }

  .nl__item_phone {

  }

  .nl__item_pass {

  }

  .personCard__details {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Ubuntu, sans-serif;
  }

  .personCard__details_title {
    color: #999;
    font-size: 18px;
    margin: 0;
  }

  .personCard__details_description {
    color: #2c2e31;
    font-size: 38px;
    margin: 5px;
  }

  .personCard__header {
    display: flex;
    justify-content: center;
    height: 131px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    background-color: #f9f9f9;
  }

  .personCard__header_img {
    border-radius: 50%;
    overflow: hidden;
    width: 150px;
    height: 150px;
  }

  .personCard__header_img_wrap {
    margin-top: 20px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    width: 160px;
    height: 160px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
