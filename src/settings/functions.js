import defaultCommentAddValidator from "../validators/defaultCommentAddValidator";
import LocalStorageCommentsRepository from '../repositories/LocalSorageCommentsRepository'

export const validators = {
    addCommentValidator: defaultCommentAddValidator
};
export const repositories = {
    commentsRepository: LocalStorageCommentsRepository
};