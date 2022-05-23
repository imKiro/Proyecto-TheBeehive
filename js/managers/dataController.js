class DataController {
    constructor(appManager) {
        this.appManager = appManager;
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    addPost(post) {

        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if (post.userId === user.id) {
                user.addPost(post);
                return;
            }
        }

    }

    addComment(comment) {

        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            for (let j = 0; j < user.posts.length; j++) {
                const post = user.posts[j];
                if (post.id === comment.postId) {
                    post.addComment(comment);
                    return;
                }

            }
        }

    }

    getUserByEmail(email) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if (user.email === email) {
                return user;
            }
        }

        return null;
    }

    getUserByBeeId(beeId) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if (user.id === beeId) {
                return user;
            }
        }

        return null;
    }


}