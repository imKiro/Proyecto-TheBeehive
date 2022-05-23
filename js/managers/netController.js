class NetController {
    constructor(appManager) {
        this.appManager = appManager;
        this.url = 'https://thebeehive2022-179d4-default-rtdb.firebaseio.com/data/';

    }

    downloadUsersData() {
        var request = new XMLHttpRequest();
        request.open('GET', `${this.url}users.json`);
        request.onreadystatechange = this.onUsersDataDownloaded.bind(this);
        request.send();
    }

    onUsersDataDownloaded(e) {
        var request = e.target;

        if (request.readyState === 4) {
            if (request.status === 200) {
                var usersData = JSON.parse(request.responseText);
                usersData.forEach((userData, i) => {
                    var user = new User(userData.id, userData.name, userData.phone, userData.username, userData.website, userData.avatar, userData.email, userData.isOwner);
                    console.log(user);
                    this.appManager.dataController.addUser(user);
                });
                this.downloadPostsData();
            }
        }
    }

    downloadPostsData() {
        var request = new XMLHttpRequest();
        request.open('GET', `${this.url}posts.json`);
        request.onreadystatechange = this.onPostsDataDownloaded.bind(this);
        request.send();
    }

    onPostsDataDownloaded(e) {
        var request = e.target;
        if (request.readyState === 4) {
            if (request.status === 200) {
                var postsData = JSON.parse(request.responseText);
                postsData.forEach((postData, i) => {
                    var post = new Post(postData.id, postData.body, postData.title, postData.userId)
                    this.appManager.dataController.addPost(post);
                });
                this.downloadCommentsData();
            }
        }
    }

    downloadCommentsData() {
        var request = new XMLHttpRequest();
        request.open('GET', `${this.url}comments.json`);
        request.onreadystatechange = this.onCommentsDataDownloaded.bind(this);
        request.send();
    }

    onCommentsDataDownloaded(e) {
        var request = e.target;

        if (request.readyState === 4) {
            if (request.status === 200) {
                var commentsData = JSON.parse(request.responseText);
                commentsData.forEach((commentData, i) => {
                    var comment = new Comment(commentData.id, commentData.body, commentData.name, commentData.postId, commentData.beeId);
                    comment.setUser(this.appManager.dataController.getUserByBeeId(comment.beeId));
                    this.appManager.dataController.addComment(comment);
                });
                this.appManager.downloadDataCompleted();
            }
        }
    }

}