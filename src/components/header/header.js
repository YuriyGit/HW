import {DivComponent} from "../../common/div-component.js";
import "./header.css";

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src="/static/logo.svg" alt="логотип">
            </div>
            <div class = "menu">
                <a class = "menu__item" href="#">
                    <img src="/static/search.svg" alt="Иконка поиска" />
                    Поиск книг
                </a>
                  <a class = "menu__item" href="#">
                    <img src="/static/favorites.svg" alt="Избранное иконока" />
                    Избранное
                </a>
                <div class = "menu__counter">
                ${this.appState.favorites.length}
                </div>
            </div>
        `;
        return this.el
    }
}