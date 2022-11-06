<template>
  <div class="container container-add-title">
    <div class="title">
      <h2>Тема поста</h2>
      <input v-model="article.title" type="text" :class="{ 'border-danger': $v.article.title.$invalid }" class="input-title" placeholder="тема">
    </div>
    <div class="title">
      <h2>Картинка поста</h2>
      <input v-model="article.img" type="text" :class="{ 'border-danger': $v.article.img.$invalid }" class="input-title" placeholder="url картинки">
    </div>
    <div class="body">
      <h2>Опис поста</h2>
      <textarea v-model="article.body" :class="{ 'border-danger': $v.article.body.$invalid }" class="form-control body-text" aria-label="With textarea" placeholder="текст"></textarea>
    </div>
    <button :disabled="$v.article.$invalid" class="button-add-title btn btn-info" @click="addPost" > Опублікувати </button>
  </div>
</template>

<script>
  import Axios from 'axios';
  import { required } from 'vuelidate/lib/validators';
  import { mapActions } from 'vuex';

  export default {
    name: 'AddTitle',
    data() {
      return {
        article: {
         title: '',
         img:'',
         body: ''          
        }
      }
    },
    methods: {
      ...mapActions(['newPost']),
      addPost() {
        this.newPost(this.article);
      }
    },
    validations: {
      article: {
        title: { required },
        img:{required},
        body: { required }
      }
    }
  }
</script>

<style scoped>
  .container-add-title {
    padding: 10px;
    min-height: 500px;
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .body-text {
    max-width: 70%;
    height: 70%;
  }

  .button-add-title {
    margin: 10px;
  }
  .title{
    margin-bottom: 30px;
  }
  
</style>