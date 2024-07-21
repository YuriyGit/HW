import {AbstractView} from "../../common/view.js";

export class MainView extends AbstractView {
    constructor() {
        super();
        this.setTitle('поиск книг');
    }

    render() {
        const main = document.createElement('div');
        main.innerHTML = 'test';
        this.app.innerHTML = '';
        this.app.append(main);

    }
}

