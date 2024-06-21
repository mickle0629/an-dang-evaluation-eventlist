class EventListView {
  // View has to:
    // Add rows to table
    // Remove them
    // Edit each field of a row.
  constructor() {
    this.tableBody = document.querySelector(".event-list-table__body");
  }

  addNewEvent(event) {
    const { eventName, startDate, endDate, id } = event;

    const newRow = document.createElement("tr");
    newRow.classList.add("event-list-table__row");
    newRow.id = id;
    
    //TODO: these three are all the same, put them in a loop later
    const eventNameDatum = document.createElement("td");
    eventNameDatum.classList.add("event-list-table__event-name")
    eventNameDatum.textContent = eventName;

    const startDateDatum = document.createElement("td");
    startDateDatum.classList.add("event-list-table__start-date")
    startDateDatum.textContent = startDate;

    const endDateDatum = document.createElement("td");
    endDateDatum.classList.add("event-list-table__end-date")
    endDateDatum.textContent = endDate;

    const buttonsCell = document.createElement("td");
    buttonsCell.classList.add("event-list-table__row");
    const delBtn = document.createElement("button");
    delBtn.classList.add("event-list-table__del-btn")
    delBtn.textContent = "Delete"
    const editBtn = document.createElement("button");
    editBtn.classList.add("event-list-table__edit-btn")
    editBtn.textContent = "Edit";

    buttonsCell.append(editBtn, delBtn);
    newRow.append(eventNameDatum, startDateDatum, endDateDatum, buttonsCell);
    this.tableBody.append(newRow)
  }

  deleteEvent(eventId) {
    const elementDeleted = document.getElementById(eventId);
    elementDeleted.remove();
  }

  editEventName(eventId, newEventName) {
    const elementEdited = document.getElementById(eventId);
    console.log(elementEdited);
    const nameElement = elementEdited.getElementsByClassName("event-list-table__event-name");
    nameElement[0].textContent = newEventName;
  }

  editStartDate(eventId, newStartDate) {
    const elementEdited = document.getElementById(eventId);
    console.log(elementEdited);
    const startDateElement = elementEdited.getElementsByClassName("event-list-table__start-date");
    startDateElement[0].textContent = newStartDate;
  }

  editEndDate(eventId, newEndDate) {
    const elementEdited = document.getElementById(eventId);
    console.log(elementEdited);
    const endDateElement = elementEdited.getElementsByClassName("event-list-table__end-date");
    endDateElement[0].textContent = newEndDate;
  }
}

