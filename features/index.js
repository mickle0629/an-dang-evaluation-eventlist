const view = new EventListView();
const model = new EventListModel();
const api = new EventListApi();
const controller = new EventListController(model, view, api);
// const event1 = {
//   eventName: "Art Exhibition",
//   startDate: "2023-02-15",
//   endDate: "2023-02-18",
//   id: "ab123"
// }

// const event2 = {
//   eventName: "Food Festival",
//   startDate: "2023-03-10",
//   endDate: "2023-03-12",
//   id: "bc234"
// }

// const event3 = {
//   eventName: "Tech Conference",
//   startDate: "2023-04-05",
//   endDate: "2023-04-07",
//   id: "cd345"
// }

// const event4 = {
//   eventName: "Book Fair",
//   startDate: "2023-05-20",
//   endDate: "2023-05-22",
//   id: "de456"
// }
// view.addNewEvent(event1)
// // view.editEventName("aabd", "Cooking Competition");
// // view.editStartDate("aabd", "2024-02-01");
// // view.editEndDate("aabd", "2024-02-03");


// model.addEvent(event1);
// model.addEvent(event2);
// model.deleteEvent(event1);
// console.log("Model event list", model.getEvents())

// api.apiFetchEvents().then((res) => {console.log("Fetching test:",res)})

//view.addEventInput()

view.prepareEditFields("30a1");

