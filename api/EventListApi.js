class EventListApi {
  #apiUrl
  constructor() {
    this.#apiUrl = "http://localhost:3000/events";
  }

  /**
   * 
   * @returns Promise containing an array of events.
   */
  async apiFetchEvents() {
    return fetch(this.#apiUrl).then((res) => {
      return res.json()
    });
  }

  /**
   * 
   * @param {*} event An event object, without its id (id handled by server)
   * @returns Promise that resolves to new event added, including its id.
   */
  async apiAddEvent(event) {
    return fetch(this.#apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    }).then((res) => {
      return res.json();
    })
  }

  async apiDeleteEvent(eventId) {
    return fetch(`${this.#apiUrl}/${eventId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      return res.json();
    })
  }
}