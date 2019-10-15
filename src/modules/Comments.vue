<template>
    <div class="comments">
        <div class="container">
            <h1 class="title is-2 comments__title">Выводим комментарии</h1>
            <div class="comments__body">
                <div class="columns is-multiline">
                    <template v-for="(comment,ind) in comments">
                        <div class="column comment__gap is-one-third" :key="ind"><Comment :item="comment" :index="ind"/></div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Comment from '@/components/Comment.vue'
    export default {
        name: "Comments",
        components: {
            Comment
        },
        data(){
            return{
            }
        },
        computed: mapState({
            comments: state => state.comments
        }),
    }
</script>

<style scoped>
.comments{
    display: inline-block;
    min-height: 100vh;
    width: 100%;
    background: rgb(246, 246, 247);
    padding-bottom: 100px;
}
    .comments__title{
        margin: 100px auto !important;
    }
.comment__gap{
    padding: 2rem;
}
</style>