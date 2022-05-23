const SHOWING_USERS = 1;
const SHOWING_POSTS = 2;
const SHOWING_NEW_POST = 3;
const SHOWING_NEW_COMMENT = 4;

class AppManager {
    constructor() {
        this.netController = new NetController(this);
        this.dataController = new DataController(this);
        this.uiController = new UIController(this);
        this.netController.downloadUsersData();
        this.navbarHeight = getComputedStyle(document.documentElement).getPropertyValue('--nav-bar-height');
        this.navbarHeight = Number(this.navbarHeight.split('px')[0]);
        this.userSelected = null;
        this.postSelected = null;
    }

    downloadDataCompleted() {
        this.uiController.showUI();
    }
}