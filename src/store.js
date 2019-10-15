import Vue from 'vue'
import Vuex from 'vuex'
import CommentError from "./dao/CommentError";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    commentError: new CommentError(),
    comments:[]
  },
  mutations: {
    pushComment(state,newComment){
      let commentsLength = state.comments.length;
      newComment.id = commentsLength > 0 ? state.comments[commentsLength - 1].id + 1 : 1;
      state.comments.push(newComment);
    },
    setError(state,obj){
      state.commentError[obj.name].flag = obj.val;
    }
  },
  actions: {

  }
});
