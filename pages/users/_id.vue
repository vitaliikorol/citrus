<template>
  <section>
    <p>Route params - {{$route.params}}</p>
    <p>Route params.id - {{$route.params.id}}</p>
    <hr>
    <h1>{{user[0].name.first}}</h1>
    <h1>{{user[0].name.last}}</h1>

    <div class="personCard">
      <header class="personCard__header">
        <div class="personCard__header_img_wrap">
          <img :src="user[0].picture.large" alt="" class="personCard__header_img">
        </div>
      </header>
      <section personCard__details>
        <p class="personCard__details_greeting">Hi, my name is</p>
        <h2 class="personCard__details_name">{{user[0].name.first + ' ' + user[0].name.last}}</h2>
      </section>
      <nav class="personCard__nav">
        <ul class="personCard__nav_list nl">
          <li class="nl_item">1</li>
          <li class="nl_item">2</li>
          <li class="nl_item">3</li>
          <li class="nl_item">4</li>
          <li class="nl_item">5</li>
          <li class="nl_item">6</li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
  export default {
    async asyncData({$axios, params}) {
      const data = await $axios.$get('https://randomuser.me/api/?page=1&results=10&seed=abc')
      const user = data.results.filter(person => person.name.title + person.name.first + person.name.last === params.id)
      return {user}
    }
  }
</script>

<style>
  .personCard {

  }

  .personCard__header {
    display: flex;
    justify-content: center;
    height: 131px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
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
    border: 1px solid rgba(0,0,0,0.25);
    width: 160px;
    height: 160px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .test12 {
    position: relative;
    top: 50px;
  }


</style>
