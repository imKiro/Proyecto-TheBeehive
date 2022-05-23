class FormComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.className = 'formComponent';
        this.fade = div({ classList: 'formComponent_fade hide' }, this.container);
        this.dataContainer = div({ classList: 'formComponent_dataContainer' }, this.container);
        this.dataContainer.style.transform = `translateX(${window.innerWidth}px)`;
        this.container.classList.add('hide');
        this.header = p({ className: 'formComponent_header', innerHTML: 'Create Post' }, this.dataContainer);
        this.title = input({ className: 'formComponent_input', placeholder: 'Title' }, this.dataContainer);
        this.body = input({ className: 'formComponent_input', placeholder: 'Body' }, this.dataContainer);
        this.createBtn = div({ className: 'formComponent_createBtn', innerHTML: 'Create', onclick: this.onCreateBtn.bind(this) }, this.dataContainer);
    }

    onCreateBtn() {
        var title = this.title.value;
        var body = this.body.value;
        this.title.classList.remove('formComponent_error');
        this.body.classList.remove('formComponent_error');

        if (title === '') {
            this.title.classList.add('formComponent_error');
            return;
        }

        if (body === '') {
            this.body.classList.add('formComponent_error');
            return;
        }

        switch (this.appManager.uiController.state) {
            case SHOWING_NEW_POST:
                this.createNewPost(body, title);
                break;
            case SHOWING_NEW_COMMENT:
                this.createNewComment(body, title);
                break;   
        }

        this.title.value = '';
        this.body.value = '';
        this.appManager.uiController.onBackBtn();
    }

    createNewPost(body, title) {
        var post = new Post(-1, body, title, this.appManager.userSelected.id);
        this.appManager.userSelected.addPost(post);
    }

    createNewComment(body, title) {
        var comment = new Comment(-1, body, title, this.appManager.userSelected.id, this.appManager.postSelected.id, this.appManager.userSelected);
        this.appManager.postSelected.addComment(comment);
    }

    showForm() {
        switch (this.appManager.uiController.state) {
            case SHOWING_NEW_POST:
                this.header.innerHTML = 'Create Post';
                break;
            case SHOWING_NEW_COMMENT:
                this.header.innerHTML = 'Create Comment';
                break;   
        }


        this.title.value = '';
        this.body.value = '';
        this.moveIn();

    }

    moveIn() {
        this.fade.classList.remove('hide');
        this.container.classList.remove('hide');
        gsap.to(this.dataContainer, { x: 0, duration: 0.75 });
        gsap.to(this.fade, { opacity: 0.75, duration: 0.25 });
    }

    moveOut() {
        gsap.to(this.dataContainer, { x: window.innerWidth, duration: 0.35 });
        gsap.to(this.fade, { opacity: 0, duration: 0.5, onComplete: this.moveOutComplete.bind(this) });
    }

    moveOutComplete() {
        this.fade.classList.add('hide');
        this.container.classList.add('hide');
    }
}