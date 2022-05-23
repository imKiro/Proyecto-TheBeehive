class Component {
    constructor(appManager, parent) {
        this.appManager = appManager;
        this.parent = parent;
        this.container = div({}, parent)
    }

    hide() {
        this.container.classList.add('hide');
    }

    show() {
        this.container.classList.remove('hide');
    }

    moveIn() {}

    moveOut() {}
}