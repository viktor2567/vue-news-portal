
<template>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/carusel1.jpeg" class="d-block" alt="...">
      <div class="carousel-caption d-none ">
        <h2>Міністр внутрішніх справ України нагородив гвардійців біля стін Святої Софії</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/carusel2.jpeg" class="d-block " alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h2>БРИФІНГИГОЛОВНЕ В Нацгвардії створено 130 мобільних вогневих груп для протидії ударним дронам</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/carusel3.jpeg" class="d-block " alt="...">
      <div class="carousel-caption d-none d-md-block">
    
        <h2>Президент вручив відзнаки «За мужність та відвагу» 4 військовим частинам Нацгвардії України</h2>
      </div>
    </div>
  </div>
  <button class="btn carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="btn carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 

   <div class="row row-cols-3  row-cols-md-4 g-4">
  <div class="col-3" v-for="post in allPosts">
    <div class="card" >
      <img src="../assets/1.jpeg"  class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{post.title}}</h5>
        <p class="card-text">{{post.body}}</p>
      </div>
    </div>
  </div>
  </div>

  <div>
    <h1>Відео Національної гвардії України</h1>
    <iframe width="90%" height="700px" src="https://www.youtube.com/embed/bL9k8CNWV04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
  <!-- <div class="container">
   
    <div class="posts-list">
      <div v-for="post in allPosts" class="post-preview">
        <h2> {{post.title}} </h2>
        <p> {{post.body}} </p>
      </div>
    </div>
  </div> -->

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapGetters(['allPosts','postsCount','users']),
  }
}
</script>

<style scoped>
.carousel{
  margin: 30px;
  width: 55%;
}
.video{
  width: 100%;
height: 100%;
  background: url(https://youtu.be/bL9k8CNWV04);
}

</style>