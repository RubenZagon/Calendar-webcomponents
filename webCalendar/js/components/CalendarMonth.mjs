export class CalendarMonth extends HTMLElement {
    constructor() {
        super();

        for (let i = 1; i < 31; i++) {
            this.innerHTML += `<calendar-day numberDay="${i}"></calendar-day>`
        }
    }
}

customElements.define('calendar-month', CalendarMonth);