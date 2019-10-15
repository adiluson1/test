<template>
    <div class="comment-page">
        <CommentComponent :item="comment" :index="1"/>
    </div>
</template>

<script>
    import { repositories } from "../settings/functions";
    import CommentComponent from "../components/Comment";

    export default {
        name: "Comment",
        components:{
          CommentComponent
        },
        data(){
            return{
                comment: {}
            }
        },
        computed: {

        },
        mounted() {
            const repo = repositories.commentsRepository;
            this.comment = repo.getById(this.$route.params.id);
        },
    }
</script>

<style scoped>
.comment-page{
    background: rgb(246, 246, 247);
}
</style>