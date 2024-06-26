class EventListView {
  // View has to:
    // Add rows to table
    // Remove them
    // Edit each field of a row.
  constructor() {
    this.tableBody = document.querySelector(".event-list-table__body");
    this.addEventButton = document.querySelector(".add-event-btn");
    this.newEventRow = null;
    this.newEventNameInputField = null;
    this.newEventStartInputField = null;
    this.newEventEndInputField = null;
    this.newEventConfirmBtn = null;
    this.newEventCancelBtn = null;
  }

  addNewEvent(event) {
    const { eventName, startDate, endDate, id } = event;

    const newRow = newElement("tr", "event-list-table__row", undefined, id);

    const eventNameDatum = newElement("td", "event-list-table__event-name", eventName);
    const startDateDatum = newElement("td", "event-list-table__start-date", startDate);
    const endDateDatum = newElement("td", "event-list-table__end-date", endDate);

    const buttonsCell = newElement("td", "event-list-table__buttons-cell");
    const delBtn = newElement("button", "event-list-table__del-btn", "Delete");
    const editBtn = newElement("button", "event-list-table__edit-btn", "Edit");

    buttonsCell.append(editBtn, delBtn);
    newRow.append(eventNameDatum, startDateDatum, endDateDatum, buttonsCell);
    this.tableBody.append(newRow)
  }

  //TODO: make fields required
  addEventInput() {
    const newRow = document.createElement("tr");
    newRow.classList.add("event-list-table__new-event-row");

    /**
     * Creates this:
     * <td class="new-event-row__new-event-name">
          <input type="text" name="event-list-table__name-input" id="name-input-ident">
        </td>
     */
    const newEventNameInputTd = document.createElement("td");
    newEventNameInputTd.classList.add("new-event-row__new-event-name")

    const newEventNameInputField = document.createElement("input");
    newEventNameInputField.type = "text";
    newEventNameInputField.name = "event-list-table__name-input";
    newEventNameInputField.id = "name-input-ident";
    newEventNameInputTd.append(newEventNameInputField);

    /**
     *  <td class="new-event-row__new-event-start-date">
          <input type="date" name="event-list-table__start-date-input" id="start-date-input-ident">
        </td>
     */
    const newEventStartDateTd = document.createElement("td");
    newEventStartDateTd.classList.add("new-event-row__new-event-start-date")

    const newEventStartInputField = document.createElement("input");
    newEventStartInputField.type = "date";
    newEventStartInputField.name = "event-list-table__start-date-input";
    newEventStartInputField.id = "start-date-input-ident";
    newEventStartDateTd.append(newEventStartInputField);

    /**
     *  <td class="new-event-row__new-event-start-date">
          <input type="date" name="event-list-table__start-date-input" id="start-date-input-ident">
        </td>
     */
    const newEventEndDateTd = document.createElement("td");
    newEventEndDateTd.classList.add("new-event-row__new-event-end-date")

    const newEventEndInputField = document.createElement("input");
    newEventEndInputField.type = "date";
    newEventEndInputField.name = "event-list-end-date-input";
    newEventEndInputField.id = "end-date-input-ident";
    newEventEndDateTd.append(newEventEndInputField);

    const buttonsCell = document.createElement("td");
    buttonsCell.classList.add("event-list-table__cancel-btn");
    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("event-list-table__cancel-btn")
    cancelBtn.textContent = "Cancel"
    const confirmBtn = document.createElement("button");
    confirmBtn.classList.add("event-list-table__confirm-add-btn")
    confirmBtn.textContent = "Confirm";
    buttonsCell.append(confirmBtn, cancelBtn)

    newRow.append(newEventNameInputTd, newEventStartDateTd, newEventEndDateTd, buttonsCell);
    this.tableBody.append(newRow);

    this.newEventNameInputField = document.getElementById("name-input-ident");
    this.newEventStartInputField = document.getElementById("start-date-input-ident");
    this.newEventEndInputField = document.getElementById("end-date-input-ident");
    this.newEventRow = document.querySelector(".event-list-table__new-event-row");
    this.newEventConfirmBtn = document.querySelector(".event-list-table__confirm-add-btn");
    this.newEventCancelBtn = document.querySelector(".event-list-table__cancel-btn");
    // console.log("newEventConfirmBtn:", this.newEventConfirmBtn);
  }

  deletePendingNewEvent() {
    this.newEventRow.remove();
  }

  deleteEvent(eventId) {
    const elementDeleted = document.getElementById(eventId);
    elementDeleted.remove();
  }

  prepareEditFields(itemId) {
    const fieldToBeEdited = document.getElementById(itemId);
    const nameField = fieldToBeEdited.getElementsByClassName("event-list-table__event-name")[0];
    const startDateField = fieldToBeEdited.getElementsByClassName("event-list-table__start-date")[0];
    const endDateField = fieldToBeEdited.getElementsByClassName("event-list-table__end-date")[0];
    const buttonsCell = fieldToBeEdited.getElementsByClassName("event-list-table__buttons-cell")[0];

    nameField.textContent = '';
    startDateField.textContent = '';
    endDateField.textContent = '';
    buttonsCell.textContent = '';

    const newNameInput = document.createElement("input");
    newNameInput.type = "text";
    newNameInput.classList.add("event-list-table__edit-name-input");
    nameField.append(newNameInput);

    const newStartInput = document.createElement("input");
    newStartInput.type = "date";
    newStartInput.classList.add("event-list-table__edit-start-input")
    startDateField.append(newStartInput);

    const newEndInput = document.createElement("input");
    newEndInput.type = "date";
    newEndInput.classList.add("event-list-table__edit-end-input")
    endDateField.append(newEndInput);
    
    const confirmEditBtn = document.createElement("button");
    confirmEditBtn.textContent = "Confirm";
    confirmEditBtn.classList.add("event-list-table__confirm-edit-btn");
    const cancelEditBtn = document.createElement("button");
    cancelEditBtn.textContent = "Cancel";
    cancelEditBtn.classList.add("event-list-table__cancel-edit-btn");
    buttonsCell.append(confirmEditBtn, cancelEditBtn);

    console.log("Field to be edited", fieldToBeEdited)
  }

  editEventName(eventId, newEventName) {
    const elementEdited = document.getElementById(eventId);
    // console.log(elementEdited);
    const nameElement = elementEdited.getElementsByClassName("event-list-table__event-name");
    nameElement[0].textContent = newEventName;
  }

  editStartDate(eventId, newStartDate) {
    const elementEdited = document.getElementById(eventId);
    // console.log(elementEdited);
    const startDateElement = elementEdited.getElementsByClassName("event-list-table__start-date");
    startDateElement[0].textContent = newStartDate;
  }

  editEndDate(eventId, newEndDate) {
    const elementEdited = document.getElementById(eventId);
    // console.log(elementEdited);
    const endDateElement = elementEdited.getElementsByClassName("event-list-table__end-date");
    endDateElement[0].textContent = newEndDate;
  }

  rerenderEditDeleteButtons(itemId) {
    const targetButtonsCell = document.getElementById(itemId).getElementsByClassName("event-list-table__buttons-cell")[0];
    targetButtonsCell.textContent = '';
    
    const delBtn = document.createElement("button");
    delBtn.classList.add("event-list-table__del-btn")
    delBtn.textContent = "Delete"
    const editBtn = document.createElement("button");
    editBtn.classList.add("event-list-table__edit-btn")
    editBtn.textContent = "Edit";

    targetButtonsCell.append(editBtn, delBtn);
    
  }
}


