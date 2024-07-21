import {AbstractView} from "../../common/view.js";

export class MainView extends AbstractView {
    constructor() {
        super();
        this.setTitle('поиск книг');
    }

    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }

    render() {
        const main = document.createElement('div');
        main.innerHTML = 'Test';
        // this.app.innerHTML = ''  !
        this.app.append(main)
    }
}