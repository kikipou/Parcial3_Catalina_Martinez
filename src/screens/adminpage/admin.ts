import { dispatch, addObserver, appState } from '../../store/index';
import { getEventsAction } from '../../store/actions';
import { navigate } from '../../store/actions';
import EventPost, { EventCardAttribute } from '../../components/eventCard/eventCard';
import { addEvents } from '../../utils/firebase';
import { getEvents } from '../../utils/firebase';

const event = {
    title: "",
    date: "",
    hour: "",
    location: "",
    participants: "",
    eventimg: "",
};

class AdminPage extends HTMLElement {
    private eventsContainer?: HTMLElement;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    async connectedCallback() {
        if (appState.events.length === 0) {
            const action = await getEventsAction();
            if (action) {
                dispatch(action);
            }
        }
        this.render();
    }

    changeTitle = (e: Event) => {
        const target = e.target as HTMLInputElement;
        event.title = target.value;
    }

    changeDate = (e: Event) => {
        const target = e.target as HTMLInputElement;
        event.date = target.value;
    }

    changeHour = (e: Event) => {
        const target = e.target as HTMLInputElement;
        event.hour = target.value;
    }

    changeLocation = (e: Event) => {
        const target = e.target as HTMLInputElement;
       event.location = target.value;
    }

    changeParticipants = (e: Event) => {
        const target = e.target as HTMLInputElement;
        event.participants = target.value;
    }

    changeImg = (e: Event) => {
        const target = e.target as HTMLInputElement;
        event.eventimg = target.value;
    }

    submitForm = async (e: Event) => {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
        // Validación manual
        if (!event.title || !event.date || !event.hour || !event.location || !event.participants || !event.eventimg) {
            alert('Por favor, completa todos los campos.');
            return; // Salir si falta algún campo
        }

        await addEvents(event);  // Añadir canción a Firebase
        await this.getEvents();  // Recargar las canciones después de añadir
    }

    async renderEvents() {
        if (!this.eventsContainer) return; // Check if the container exists

        if (!appState.events || !Array.isArray(appState.events)) {
            console.log('No products found');
            return;
        }

        this.eventsContainer.innerHTML = ''; // Clean container

        appState.events.forEach((event: any) => {
            const eventComponent = this.ownerDocument.createElement('products-home-component') as EventPost;
            eventComponent.setAttribute(EventCardAttribute.title, event.title);
            eventComponent.setAttribute(EventCardAttribute.date, event.date);
            eventComponent.setAttribute(EventCardAttribute.hour, event.hour.toString());
            eventComponent.setAttribute(EventCardAttribute.location, event.location);
            eventComponent.setAttribute(EventCardAttribute.participants, event.participants);
            eventComponent.setAttribute(EventCardAttribute.eventimg, event.eventimg);
            eventComponent.classList.add('product');
            this.eventsContainer?.appendChild(eventComponent);
        });
    }

    async render() {
		if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../public/src/screens/adminpage/admin.css">
              <div class="admin">
                        <form class="form">
                          <input id="name-input" placeholder="Event name" required>
                          <input id="date-input" placeholder="Event date" required>
                          <input id="hour-input" placeholder="Event Hour" type="date" required>
                          <input id="location-input" placeholder="Event Location" required>
                          <input id="participants-input" placeholder="Event Participants" required>
                          <input id="img" placeholder="Add image link" required />
                            <button type="submit" id="Publish">Publish event</button>
                        </form>
              </div>
            `;

        // Referencia al input de tipo file y al elemento img
        const postImg = this.shadowRoot.querySelector('#eventImg') as HTMLImageElement;

        this.shadowRoot.getElementById("name")?.addEventListener("change", this.changeTitle);
        this.shadowRoot.getElementById("date")?.addEventListener("change", this.changeDate);
        this.shadowRoot.getElementById("hour")?.addEventListener("change", this.changeHour);
        this.shadowRoot.getElementById("location")?.addEventListener("change", this.changeLocation);
        this.shadowRoot.getElementById("img")?.addEventListener("change", this.changeImg);
        this.shadowRoot.getElementById("event-form")?.addEventListener("submit", this.submitForm);

	    }
    }
}

customElements.define('admin-page', AdminPage);