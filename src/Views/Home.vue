
<template>
  <div class="content" data-bs-spy="scroll">
    
    <Carusel />
    <div class="d-flex">
      <vs-card-group>
        <vs-card v-for="post in allPosts" :key="post.key" @click="handleClick" data-bs-toggle="modal"
          data-bs-target="#exampleModal" v-on:click="idCard(post.id)">
          <template #img>
            <img :src="post.img" alt="">
          </template>
          <template #title>
            <h3>{{ post.title }}</h3>
          </template>
          <template #text>
            <p>
            </p>
          </template>
        </vs-card>
      </vs-card-group>
      <div class="modal fade" v-if="active = true"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button " class="btn" data-bs-dismiss="modal" aria-label="Close"><svg
                  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-square"
                  viewBox="0 0 16 16">
                  <path
                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg></button>
            </div>
            <div class="modal-body" v-for="card in allCard">
              <img class="cadr-img" :src="card.img" style="width:100%">
              <h1>{{ card.title }}</h1>
              <h1 class="description-modal">{{ card.body }}</h1>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1>Відео Національної гвардії України</h1>
      <iframe class="youtube" src="https://www.youtube.com/embed/bL9k8CNWV04" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
    <div class="social justify-content-around mt-5">
      <Facebook />
      <Twit />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Twit from '../components/Twitter.vue'
import Carusel from '../components/carusel.vue'
import Facebook from '../components/facebook.vue';
export default {
  data: () => ({

    return: {
      page: 10,
    }
  }),
  name: 'home',
  methods: {
    ...mapActions(['idCard', 'Delete'])
  },
  computed: {

    ...mapGetters(['allPosts', 'allCard']),

  },
  components: {
    Twit,
    Carusel,
    Facebook
  }
}



</script>

<style scoped>
.content {
  margin: 0 3%;
}

.modal-dialog {
  max-width: 80%;
}

.description-modal {
  font-size: 20px;
}

.youtube {
  width: 90%;
  height: 500px;
}

.social {
  display: flex;
}

@media (max-width: 992px) {
  .content {
    margin: 0;
  }

  .social {
    display: inline-block;
  }


  .youtube {
    width: 100%;
    height: 300px;
  }
  .modal-dialog {
    max-width: 100%;
    margin: 0;
  }

}
</style>

