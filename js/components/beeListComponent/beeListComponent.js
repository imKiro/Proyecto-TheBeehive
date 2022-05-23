class BeeListComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.classList.add('beeListComponent');
        this.showUsers();
    }

    showUsers() {
        var users = this.appManager.dataController.users;
        users.forEach(user => {
            var userComponent = new UserComponent(this.appManager, this.container, user);
        });
    }
}