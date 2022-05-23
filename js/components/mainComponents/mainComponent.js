class MainComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.classList.add('mainComponent');
        this.navbarComponent = new NavbarComponent(this.appManager, this.container);
        this.beeListComponent = new BeeListComponent(this.appManager, this.container);
        this.postListComponent = new PostListComponent(this.appManager, this.container);
        this.formComponent = new FormComponent(this.appManager, this.container);
    }

    showBackBtn() {
        this.navbarComponent.showBackBtn();
    }

    hideBackBtn() {
        this.navbarComponent.hideBackBtn();
    }

    showPostListComponent(user) {
        this.postListComponent.showPosts(user);
    }

    hidePostListComponent(user) {
        this.postListComponent.moveOut();
    }

    showFormComponent() {
        this.navbarComponent.hideAddBtn();
        this.formComponent.showForm();
    }

    hideFormComponent() {
        this.navbarComponent.showAddBtn();
        this.formComponent.moveOut();
    }

    refreshPostListComponent() {
        this.postListComponent.refresh();
    }
}