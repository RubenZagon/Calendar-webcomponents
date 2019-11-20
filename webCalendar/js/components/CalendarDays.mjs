export class CalendarDays extends HTMLElement {

    constructor() {
        super();
        const numberDay = this.getAttribute('numberDay');
        const nameDay = this.getAttribute('nameDay');
        // const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
        this.innerHTML = `
            <style>
                .Day {
                    display: inline-block;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid black;
                    width: 50px;
                    height: 85px;
                }
            </style>
            <div class ="Day">${numberDay}</div>
            `
    }
}

customElements.define('calendar-day', CalendarDays);


{/* <div class = "${nameDay[days]}"></div> */ }