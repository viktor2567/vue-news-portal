import Axios from "axios";

export default {
  actions: {
    async fetchPosts({commit}) {
      const response = await Axios.get('https://whispering-savannah-85934.herokuapp.com/posts?_sort=id&_order=DESC');
		commit('updatePosts', response.data);
		console.log('data', response.data);
    }, 
    async newPost({commit}, post) {
      await Axios.post('https://whispering-savannah-85934.herokuapp.com/posts', post);
      commit('NEW_POSTS', post)
    },
    async idCard({ commit }, id) {
      const response = await Axios.get(`https://whispering-savannah-85934.herokuapp.com/posts/${id}`);
      commit('updateCard', response);
		console.log('data', response);},

    async Delete({ commit }, id) {
      const response = await Axios.delete(`https://whispering-savannah-85934.herokuapp.com/posts/${id}`);
      commit('Delete', response);
		console.log('data', response);
  },},
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    updateCard (state, card) {
      state.card = card;
    },
    Delete (state, card) {
      state.card = card;
    },

    NEW_POSTS(state, newpost) {
      state.posts.push(newpost);
    }
  },
  state: {
    posts: [],
    card: []

  },
  getters: {
    allPosts(state) {
      return state.posts
    },

    allCard(state){
      return state.card
    }
  
    
  }
}
