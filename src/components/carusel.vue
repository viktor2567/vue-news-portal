<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/carusel1.jpeg" class="d-block" alt="...">
        
      </div>
      <div class="carousel-item">
        <img src="../assets/carusel2.jpeg" class="d-block " alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/carusel3.jpeg" class="d-block " alt="...">
       
      </div>
    </div>
    <button class=" btn carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="btn carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>


<script>
export default{
    name: 'carusel'
}
</script>

<style>
.carousel {

  margin: 30px auto ;
  width: 80%;

}
.d-block{
    width: 100%;
}
@media (max-width: 992px) {
.carousel{
    width: 100%;
}


}
</style>