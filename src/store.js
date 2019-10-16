import Vue from 'vue'
import Vuex from 'vuex'
import CommentError from "./dao/CommentError";
import { repositories } from './settings/functions'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    commentError: new CommentError(),
    comments: repositories.commentsRepository.getAll()
  },
  mutations: {
    pushComment(state,newComment){
      const repo = repositories.commentsRepository;
      repo.unshift(newComment);
      state.comments = repo.getAll();
    },
    setError(state,obj){
      state.commentError[obj.name].flag = obj.val;
    }
  },
  actions: {

  }
});
