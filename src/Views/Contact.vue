<template>
  <div class="contact">
    <p>

  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Телефон довіри
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
   <p>Національної гвардії України (044) 249-27-82, (044) 226-22-52</p> 
    Гаряча телефонна лінія Міністра внутрішніх справ України Дениса Монастирського для військовослужбовців Національної гвардії України 15-36
  </div>
</div>
<p>

<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
  Головне управління Національної гвардії України
</button>
</p>
<div class="collapse" id="collapseExample2">
<div class="card card-body">
  <p>тел.: (044) 249-41-12, 249-41-13,</p>
  <p>факс: (044) 249-41-97</p>
  <p>Електронна адреса: gu@ngu.gov.ua</p>
</div>
</div>
<p>
<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
  Служба по роботі зі зверненнями громадян та доступу до публічної інформації
</button>
</p>
<div class="collapse" id="collapseExample3">
<div class="card card-body">
<p>Телефон: (044) 365-31-31</p>
<p>Електронна адреса: public-info@ngu.gov.ua</p>
</div>
</div>
<p>
<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
  Пресслужба Національної гвардії України
</button>
</p>
<div class="collapse" id="collapseExample4">
<div class="card card-body">
<p>Телефон: (044) 249-28-70</p>
<p>(044) 428-66-16</p>
<p>Електронна адреса: ngu-press@ngu.gov.ua</p>
</div>
</div>
<p>
<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
  Юридичне управління
</button>
</p>
<div class="collapse" id="collapseExample5">
<div class="card card-body">
<p>Телефон: (044) 365-31-64</p>
</div>
</div>
<p>
<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
  Відділ комплектування та проходження служби рядовим, сержантським і старшинським складом та служби у військовому резерві</button>
</p>
<div class="collapse" id="collapseExample6">
<div class="card card-body">
<p>Телефони: (044) 462-58-99; (066)736-12-39; (063)235-82-09</p>
</div>
</div>
<p>
<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample7">
  Управління міжнародного співробітництва</button>
</p>
<div class="collapse" id="collapseExample7">
<div class="card card-body">
<p>Телефони: (044) 462-47-22; (044) 249-28-48</p>
</div>
</div>
<p>
<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample8">
  Відділ з питань запобігання та виявлення корупції Головного управління Національної гвардії України</button>
</p>
<div class="collapse" id="collapseExample8">
<div class="card card-body">
<p>Телефон/факс: (044) 365-29-70</p>
<p>Електронна адреса: antikor@ngu.gov.ua</p>
</div>
</div>
  </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'contact',
  computed:{
  } 
}
</script>

<style scoped>
.btn{
  width: 100%;
  text-align: left;
}
.contact{
  margin-top: 30px;
}
</style>