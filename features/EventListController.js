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

  
}