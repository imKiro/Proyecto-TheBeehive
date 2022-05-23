class User {
    constructor(id, name, phone, username, website, avatar, email, isOwner) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.username = username;
        this.website = website;
        this.posts = [];
        this.avatar = avatar;
        this.email = email;
        this.isOwner = isOwner;

    }

    addPost(post) {
        this.posts.unshift(post);
    }
}