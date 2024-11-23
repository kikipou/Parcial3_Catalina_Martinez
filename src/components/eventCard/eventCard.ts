export enum EventCardAttribute {
    'title' = 'title',
    'date' = 'date',
    'hour' = 'hour',
    'location' = 'location',
    'participants' = 'participants',
    'eventimg' = 'eventimg',
    'registerbtn' = 'registerbtn'
}

class EventPost extends HTMLElement {

    private heartCount: number = 0; // Contador para el botón de corazón

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.values(EventCardAttribute);
    }

    attributeChangedCallback(propName: EventCardAttribute, oldValue: string | undefined, newValue: string | undefined) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    connectedCallback() { 
        this.render();   
        this.addHeartButtonListener();
        
    }

    render() {
        if (this.shadowRoot) {
            const eventName = this.getAttribute(EventCardAttribute.title) || 'Untitled Event';
            const eventDate = this.getAttribute(EventCardAttribute.date) || 'Unknown Date';
            const eventHour = this.getAttribute(EventCardAttribute.hour) || 'Unknown Hour';
            const eventLocation = this.getAttribute(EventCardAttribute.location) || 'Location not found';
            const eventParticipants = this.getAttribute(EventCardAttribute.participants) || 'Unknown Participants';
            const eventImage = this.getAttribute(EventCardAttribute.eventimg) || 'Image not found';

            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../public/src/components/eventCard/eventCard.css">
                <div class="post">
                    <div id="photo">
                        <img class="img2" src="${eventImage}" alt="${eventName}">
                    </div>
                    <div class="info">
                        <div class="title">
                            <h2 class="songname">${eventName}</h2>
                        </div>
                        <div class="subtitle">
                            <p class="genre">${eventDate}</p>
                            <p class="tags">${eventHour}</p>
                            <p class="genre">${eventLocation}</p>
                            <p class="tags">${eventParticipants}</p>
                            <button class="register-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
                                    <path class="heart-outline" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="#371081" stroke-width="2"/>
                                </svg>
                            </button>
                            <span class="heart-count">${this.heartCount}</span>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    addHeartButtonListener() {
        const heartButton = this.shadowRoot?.querySelector(".register-button");
        const heartCountElement = this.shadowRoot?.querySelector(".heart-count");

        if (heartButton && heartCountElement) {
            heartButton.addEventListener("click", () => {
                heartButton.classList.toggle("filled");
                const path = heartButton.querySelector(".heart-outline");

                if (path) {
                    if (heartButton.classList.contains("filled")) {
                        path.setAttribute("fill", "#371081"); // Relleno rosado
                        path.setAttribute("stroke", "#371081"); // Borde rosado
                        this.heartCount = 1; // Incrementa el contador a 1
                    } else {
                        path.setAttribute("fill", "none"); // Sin relleno
                        path.setAttribute("stroke", "#371081"); // Borde rosado
                        this.heartCount = 0; // Reinicia el contador a 0
                    }
                    heartCountElement.textContent = `${this.heartCount}`; // Actualiza el contador en la interfaz
                }
            });
        }
    }
};

customElements.define('event-post', EventPost);
export default EventPost;