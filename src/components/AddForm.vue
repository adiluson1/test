<template>
    <form @submit.prevent="addComment">
        <div class="columns is-multiline">
            <div class="column is-center add-form__column">
                <div class="field add-form__field">
                    <label class="label add-form__label">Имя <span class="add-form__label_disable">*</span></label>
                    <div class="control">
                        <input class="input is-medium add-form__input" v-model="comment.name" type="text" min="3" max="6" placeholder="Вася">
                    </div>
                    <p v-if="this.errors.name.flag" class="help is-danger">{{ this.errors.name.message }}</p>
                </div>

                <div class="field">
                    <label class="label add-form__label">E-Mail <span class="add-form__label_disable">*</span></label>
                    <div class="control">
                        <input class="input is-medium add-form__input" v-model="comment.email" type="e-mail">
                    </div>
                    <p v-if="this.errors.email.flag" class="help is-danger">{{ this.errors.email.message }}</p>
                </div>
            </div>
            <div class="column add-form__column">
                <div class="field">
                    <label class="label add-form__label">Комментарий <span class="add-form__label_disable">*</span></label>
                    <div class="control">
                        <textarea class="textarea add-form__textarea" v-model="comment.description" placeholder="10 lines of textarea" rows="6"></textarea>
                    </div>
                    <p v-if="this.errors.description.flag" class="help is-danger">{{ this.errors.description.message }}</p>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column add-form__button-block">
                <button class="button" type="submit">Записать</button>
            </div>
        </div>
    </form>
</template>

<script>
    import { mapMutations } from 'vuex'
    import { mapState } from 'vuex';
    import Comment from "../dao/Comment";
    import { validators } from '../settings/functions'
    export default {
        name: "AddForm",
        data(){
            return{
                comment: new Comment(NaN,'', '', '')
            }
        },
        computed: mapState({
           errors: state => state.commentError
        }),
        methods:{
            ...mapMutations([
                'pushComment',
                'setError'
            ]),
            addComment(){
                if (this.isValid()){
                    this.pushComment(this.comment);
                    this.comment = new Comment(NaN,'', '','');
                }
            },
            isValid(){
                return validators.addCommentValidator(this.comment, this.setError);
            }
        }
    }
</script>

<style scoped>
    .add-form__field:not(:last-child){
        margin-bottom: 2rem!important;
    }
    .add-form__input,.add-form__textarea {
        background: transparent;
        border-color: rgba(219, 219, 219,.5);
        color: white;
    }
    .add-form__column:first-child{
        margin-right: 3rem;
    }
    .add-form__column:last-child{
        margin-left: 3rem;
    }
    .add-form__input:hover,.add-form__textarea:hover{
        border-color: rgba(219, 219, 219,.5)!important;
    }
    .add-form__input:focus, .add-form__textarea:focus{
        border-color: rgb(187, 56, 58)!important;
    }

    .add-form__input.is-danger,.add-form__textarea.is-danger{
        border-color: rgb(187, 56, 58) !important;
    }
    .label{
        color: rgb(214, 214, 214) !important;
        text-align: left !important;
    }
    .add-form__label_disable{
        color: rgb(187, 56, 58);
    }
    .add-form__label{
        font-size: 1.3rem;
    }
    .add-form__button-block{
        display: flex;
        justify-content: flex-end;
        margin-top: 3em;
    }
    .add-form__button-block button{
        border-color: rgb(187, 56, 58);
        background: rgb(187, 56, 58);
        color: white;
    }
    @media screen and (max-width: 768px){
        .add-form__column{
            margin: 20px !important;
        }
        .add-form__button-block{
            margin-right: 20px;
        }
        .comment__gap{
            justify-content: center;
        }
    }
</style>