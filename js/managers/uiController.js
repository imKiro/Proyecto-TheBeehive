class UIController {
    constructor(appManager) {
        this.appManager = appManager;
        this.loadingComponent = new LoadingComponent(null, document.body);
        this.mainComponent = null;
        this.state = SHOWING_USERS;
    }

    showUI() {
        this.loadingComponent.hide();
        this.mainComponent = new MainComponent(this.appManager, document.body);
    }

    onBackBtn() {
        switch (this.state) {
            case SHOWING_USERS:
                console.log('Already SHOWING_USERS');
                break;
            case SHOWING_POSTS:
                this.appManager.userSelected = null;
                this.mainComponent.hideBackBtn();
                this.state = SHOWING_USERS;
                this.mainComponent.hidePostListComponent();
                break;
            case SHOWING_NEW_POST:
                this.state = SHOWING_POSTS;
                this.mainComponent.showBackBtn();
                this.mainComponent.hideFormComponent();
                this.mainComponent.refreshPostListComponent();
                break;
            case SHOWING_NEW_COMMENT:
                this.appManager.postSelected = null;
                this.state = SHOWING_POSTS;
                this.mainComponent.hideFormComponent();
                this.mainComponent.refreshPostListComponent();
            default:
                break;
        }

    }

    showPostListComponent(user) {
        this.appManager.userSelected = user;
        this.state = SHOWING_POSTS;
        this.mainComponent.showBackBtn();
        this.mainComponent.showPostListComponent(user);
    }

    showFormComponent(newState) {
        this.state = newState;
        this.mainComponent.showFormComponent();
    }


}