const view = new EventListView();
const newEvent = {
  eventName: "Music Festival",
  startDate: "2023-01-20",
  endDate: "2023-01-21",
  id: "aabd"
}
view.addNewEvent(newEvent)
view.editEventName("aabd", "Cooking Competition");
view.editStartDate("aabd", "2024-02-01");
view.editEndDate("aabd", "2024-02-03");