class PostListComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.className = 'postListComponent';
        this.fade = div({ classList: 'postListComponent_fade hide' }, this.container);
        this.dataContainer = div({ classList: 'postListComponent_dataContainer' }, this.container);
        this.dataContainer.style.transform = `translateX(${window.innerWidth}px)`;
        this.container.classList.add('hide');
    }

    showPosts() {
        this.dataContainer.innerHTML = '';

        this.appManager.userSelected.posts.forEach(post => {
            var postComponent = new PostComponent(this.appManager, this.dataContainer, post);
        });

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

    refresh() {
        this.showPosts();
    }


}