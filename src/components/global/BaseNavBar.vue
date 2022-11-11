<template>
  <div class="nav-bar ">
    <div class="con-switch">
      <div class="d-flex">
        <vs-switch class="switch" v-model="active" />
        <h5 v-if="active == true">developer mode</h5>
      </div>
    </div>
    <div class=" nav-bar-logo">
      <router-link to="/home">
        <img src="@/assets/logo.png" />
      </router-link>
      <h1 class="color">НАЦІОНАЛЬНА ГВАРДІЯ УКРАЇНИ</h1>
      <h4 class="color">ЧЕСТЬ*МУЖНІСТЬ*ЗАКОН</h4>
    </div>
    <div class=" col-md-6 nav-bar-items ">
      <div class="nav-bar-items-top">
        <router-link to="/home"> Новини </router-link>
        <router-link to="/contact"> Контакти </router-link>
        <router-link v-if="active == true" to="/addtitle"> Додати пост </router-link>
      </div>
    </div>
    <div class="marquee ">
      <marquee direction="left" scrollamount="7"> 📞 Телефони довіри НГУ: (044) 249-27-82, (044) 226-22-52 Регіональні –
        за посиланням 📞 Телефони довіри НГУ: (044) 249-27-82, (044) 226-22-52 Регіональні – за посиланням</marquee>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false
  }),

  name: 'base-NavBar',
  props: {
    msg: String,
  }
}
</script>

<style scoped>
.nav-bar {
  justify-content: start;
  align-items: center;
  background-color: rgb(51, 68, 38);


}

.nav-bar-items {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.nav-bar-items-top {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.nav-bar-items-buttom {
  display: flex;
  justify-content: space-between;
}

.nav-bar-items-buttom li {
  list-style-type: none;
}

a {
  color: rgb(255, 255, 255);
  padding: 10px 0;
}

hr {
  background-color: red;
  margin-top: 2px;
}

.color {
  color: rgb(234, 234, 234);
}

.router-link-active {
  color: dimgray;
  text-decoration: none;
}

.nav-bar-logo img {
  height: 200px;
  width: auto;
  padding: 10px 5px 30px 0;
}

marquee {
  font-size: 18px;
  color: rgb(5, 56, 14);
}

.marquee {
  background-color: rgb(255, 255, 255);
  z-index: 10;
  --demo-marquee_duration: 60s;
  --demo-marquee_gap: var(--demo-marquee_space);
}

.con-switch {}

.switch {
  width: 30px;
  height: 25px;
  margin-left: 5px;

}
</style>