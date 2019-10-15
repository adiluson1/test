import CommentsRepository from "./CommentsRepository";

class LocalStorageCommentsRepository extends CommentsRepository{
    constructor(){
        super(window.localStorage);
    }
    static getInstance(){
        if (this.instance) return this.instance;
        this.instance = new LocalStorageCommentsRepository();
        return this.instance;
    }
}
LocalStorageCommentsRepository.instance = undefined;
const repository = LocalStorageCommentsRepository.getInstance();
export default repository;