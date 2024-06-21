class EventListModel {
  //tracks event objects
  //add and remove events accordingly to match database
  #events; //holds event objects
  constructor() {
    this.#events = []
  }

  addEvent(event) {
    this.#events.push(event)
  }

  deleteEvent(eventId) {
    this.#events = this.#events.filter((e) => {
      return e !== eventId;
    })
  }

  getEvents() {
    return this.#events;
  }

  setEvents(events) {
    this.#events = events;
  }
}