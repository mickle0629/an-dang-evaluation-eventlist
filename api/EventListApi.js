class EventListApi {
  #apiUrl
  constructor() {
    this.#apiUrl = "http://localhost:3000/events";
  }

  async apiFetchEvents() {
    return fetch(this.#apiUrl).then((res) => res.json());
  }
}