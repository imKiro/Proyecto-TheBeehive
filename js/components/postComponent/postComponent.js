class PostComponent extends Component {
    constructor(appManager, parent, post) {
        super(appManager, parent);
        this.post = post;
        this.container.classList.add('postComponent');
        this.content = div({ className: 'postComponent_content', innerHTML: post.title}, this.container)
        this.content = div({ className: 'postComponent_content2', innerHTML: post.body}, this.container)
        this.commentsContainer = div({ className: '.postComponent_comments_container' }, this.container);
        this.addBtn = null;
        this.addComments();
    }

    addComments() {
        this.post.comments.forEach(comment => {
            var commentComponent = new CommentComponent(this.appManager, this.commentsContainer, comment);
        });

        this.addBtn = div({ classList: 'postComponent_addBtn', innerHTML: 'Add new comment', onclick: this.onAddBtn.bind(this) }, this.commentsContainer);
    }

    onAddBtn(e) {
        this.appManager.postSelected = this.post;
        this.appManager.uiController.showFormComponent(SHOWING_NEW_COMMENT);
    }

}