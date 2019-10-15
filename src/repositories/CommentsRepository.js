export default class CommentsRepository {
    constructor(storage){
        this.storage = storage;
        this.comments = JSON.parse(storage.getItem('comments')) || [];
    }

    getById(id){
        return this.comments.find(function (comment) {
            return comment.id === id;
        });
    }

    getAll(){
        return this.comments;
    }

    setAll(all){
        this.comments = all;
        this.storage.setItem('comments',JSON.stringify(all))
    }
    push(newComment){
        let commentsLength = this.comments.length;
        newComment.id = commentsLength > 0 ? this.comments[commentsLength - 1].id + 1 : 1;
        this.comments.push(newComment);
        this.storage.setItem('comments',JSON.stringify(this.comments))
    }
}