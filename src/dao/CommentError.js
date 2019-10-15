import { errorMessages } from '../settings/variables'

const messages = errorMessages.addComment;

export default class CommentError {
    constructor() {
        this.name = {
            flag: false,
            message: messages.name
        };
        this.email = {
            flag: false,
            message: messages.email
        };
        this.description = {
            flag: false,
            message: messages.description
        };
    }
}
