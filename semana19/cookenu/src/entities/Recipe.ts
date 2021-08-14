export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private createdAt: string,
        private authorId: string
    ) { }

    public getId() {
        return this.id
    }
    public getTitle() {
        return this.title
    }
    public getDescription() {
        return this.description
    }
    public getCreatedAt() {
        return this.createdAt
    }
    public getAuthorId() {
        return this.authorId
    }

    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.createdAt, data.authorId)
    }
}