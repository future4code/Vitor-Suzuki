export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: string,
        private created_at: Date,
        private author_id: string
    ) {}

    public getId() {
        return this.id
    }

    public getPhoto() {
        return this.photo
    }

    public getDescription() {
        return this.description
    }

    public getType() {
        return this.type
    }

    public getCreatedAt() {
        return this.created_at
    }

    public getAuthorId() {
        return this.author_id
    }
}