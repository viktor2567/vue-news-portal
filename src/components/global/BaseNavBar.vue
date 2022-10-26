<template>
  <div class="nav-bar ">
    <div class=" nav-bar-logo">
      <router-link to="/home">
        <img src="@/assets/logo.png"/>
      </router-link>
      <h1 class="color" >НАЦІОНАЛЬНА ГВАРДІЯ УКРАЇНИ</h1>
      <h4 class="color">ЧЕСТЬ*МУЖНІСТЬ*ЗАКОН</h4>
    </div>
    <div class="col-md-6 nav-bar-items">
      <div class="nav-bar-items-top">
        <router-link to="/home"> Новини </router-link>
        <router-link to="/addtitle"> Add Article </router-link>
        <router-link to="/category"> Category </router-link>
        <router-link to="/contact"> Контакти </router-link>
      </div>
    </div>
   
  </div>
</template>

<script>
  export default {
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
    background-color: rgb(68, 86, 70);
   
    border-radius: 5px;
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
.color{
  color: rgb(234, 234, 234);
}
  .router-link-active {
    color: dimgray;
    text-decoration: none;
  }

  .nav-bar-logo img{
    height: 200px;
    width: auto;
    padding: 10px 5px 30px 0;
  }

</style>