class NavbarComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.classList.add('navbarComponent');
        this.backBtn = div({ 'onclick': this.onBackBtn.bind(this), className: 'navbarComponent_backBtn' }, this.container);
        this.backBtnIcon = image({ className: 'navbarComponent_backBtnIcon', src: 'src/images/backIcon.svg' }, this.backBtn);
        this.appName = p({ className: 'navbarComponent_appName', innerHTML: "The Beehive App" }, this.container);
        this.addBtn = div({ 'onclick': this.onAddBtn.bind(this), className: 'navbarComponent_addBtn' }, this.container);
        this.addBtnIcon = image({ className: 'navbarComponent_addBtnIcon', src: 'src/images/addIcon.svg' }, this.addBtn);
        this.hideBackBtn();
    }

    onBackBtn(e) {
        this.appManager.uiController.onBackBtn();
    }

    onAddBtn(e) {
        this.appManager.uiController.showFormComponent(SHOWING_NEW_POST);
        this.addBtnIcon.classList.add('hide');
    }

    showBackBtn() {
        this.backBtnIcon.classList.remove('hide');
        this.showAddBtn();
    }

    hideBackBtn() {
        this.backBtnIcon.classList.add('hide');
        this.addBtnIcon.classList.add('hide');
    }

    showAddBtn() {
        this.addBtnIcon.classList.remove('hide');
    }

    hideAddBtn() {
        this.addBtnIcon.classList.add('hide');
    }
}