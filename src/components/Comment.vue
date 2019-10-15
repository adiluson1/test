<template>
    <div class="comment">
        <div class="comment__header" v-bind:class="{'comment__header-dark': isDark()}">
            <h4 class="title comment__header_title is-4">{{item.name}}</h4>
        </div>
        <div class="comment__body" v-bind:class="{'comment__body-dark': isDark()}">
            <h5 class="title is-5 comment__body_mail">{{ item.mail }}</h5>
            <p class="subtitle is-6 comment__body_description">{{ item.description }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        props:{
            item: {
                type: Object,
                required: true
            },
            index:{
                type: Number,
                required: false
            }
        },
        methods:{
            isDark(){
                return !this.index % 2
            }
        }
    }
</script>

<style scoped>
.comment{
    max-width: 300px;
}
.comment__header{
    background: rgb(87, 172, 81);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.comment__header_title{
    color: white!important;
}
.comment__body{
    background: rgb(221, 234, 221);
}
.comment__body_mail{
    padding: 40px;
    margin: 0;
}
.comment__body_description{
    padding: 0 40px 40px 40px;
    min-height: 180px;

}
.comment__header-dark{
    background: rgb(75, 89, 108)!important;
}
.comment__body-dark{
    background: rgb(232, 237, 242)!important;
}
</style>