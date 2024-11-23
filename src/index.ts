import { addObserver, appState } from './store/index';
import { Screens } from './types/store';
import './screens/adminpage/admin';
import './screens/userpage/user';
import "./components/eventCard/eventCard"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';

            switch (appState.screen) {

                case Screens.ADMIN:
                    const adminPage = this.ownerDocument.createElement('app-home');
                    this.shadowRoot.appendChild(adminPage);
                    break;

                case Screens.USER:
                    const userPage = this.ownerDocument.createElement('app-edit-products');
                    this.shadowRoot.appendChild(userPage);
                    break;
            }
            console.log('Current screen:', appState.screen);
        }
    }
}

customElements.define('app-container', AppContainer)