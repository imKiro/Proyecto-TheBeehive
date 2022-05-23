class Comment {
    constructor(id, body, name, postId, beeId, user = null) {
        this.id = id;
        this.body = body;
        this.name = name;
        this.postId = postId;
        this.beeId = beeId;
        this.user = user;
    }

    setUser(user) {
        this.user = user;
    }
}