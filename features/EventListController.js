class EventListController {
  #model;
  #view;
  #api;
  constructor(model, view, api) {
    this.#model = model;
    this.#view = view;
    this.#api = api;
    this.initApp();
  }

  initApp() {
    this.updateData();
    this.setupAddEvent();
    this.setupDeleteEvent();
    this.setupEditEvent();
  }

  /**
   * Updates the current state of the DOM (view) and the model with the current database state.
   */
  updateData() {
    this.#api.apiFetchEvents().then((res) => {
      res.forEach(event => {
        console.log(event);
        this.#view.addNewEvent(event);
        this.#model.addEvent(event);
      });
    });
    // console.log("Model Current State:", this.#model.getEvents())
  }

  setupAddEvent() {
    this.#view.addEventButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("Adding New Event")
      this.#view.addEventInput();
      //now setup the confirm/cancel events here
      this.setupConfirmEvent();
      this.setupCancelEvent();
    })
  }

  setupConfirmEvent() {
    const confirmBtn = this.#view.newEventConfirmBtn;
    confirmBtn.addEventListener('click', (e) => {
      const newEvent = {
        eventName: this.#view.newEventNameInputField.value,
        startDate: this.#view.newEventStartInputField.value,
        endDate: this.#view.newEventEndInputField.value,
      }
      //onclick:
      //post new event to db
      //update dom
      //update model
      console.log("newEvent:", newEvent);
      fetch(this.#api.apiAddEvent(newEvent).then((res) => {
        this.#view.addNewEvent(res);
        this.#model.addEvent(res);
      }))
      this.#view.newEventRow.remove();
    })
  }

  setupCancelEvent() {
    const cancelBtn = this.#view.newEventCancelBtn;
    cancelBtn.addEventListener('click', (e) => {
      this.#view.deletePendingNewEvent();
    });
  }

  setupDeleteEvent() {
    const tableBody = this.#view.tableBody;
    console.log("TableBody:", tableBody);
    tableBody.addEventListener('click', (e) => {
      console.log("Deleting Event");
      if (e.target.classList.contains("event-list-table__del-btn")) {
        const itemId = e.target.parentElement.parentElement.id;
        this.#api.apiDeleteEvent(itemId);
        this.#view.deleteEvent(itemId);
        this.#model.deleteEvent(itemId);
      }
    })
  }

  //out of time.
  //place input fields in where original name, start and end dates were, then create new event listeners for a "confirm-edit button"
  setupEditEvent() {
    const tableBody = this.#view.tableBody;
    tableBody.addEventListener('click', (e) => {
      if (e.target.classList.contains("event-list-table__edit-btn")) {
        const itemId = e.target.parentElement.parentElement.id;
      }  
      console.log("editing event:");
    })
  }
}