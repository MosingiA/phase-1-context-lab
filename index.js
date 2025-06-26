/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

// //     return payable
// }

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

// Function to create multiple employee records
function createEmployeeRecords(records) {
  return records.map(createEmployeeRecord);
}

// Add a time-in event to an employee record
function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  });
  return this;
}

// Add a time-out event to an employee record
function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  });
  return this;
}

// Calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
  const inEvent = this.timeInEvents.find(e => e.date === date);
  const outEvent = this.timeOutEvents.find(e => e.date === date);
  return (outEvent.hour - inEvent.hour) / 100;
}

// Calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

// Provided to you — use call(this) in the lab to bind the context
function allWagesFor() {
  const eligibleDates = this.timeInEvents.map(e => e.date);
  return eligibleDates.reduce((memo, d) => memo + wagesEarnedOnDate.call(this, d), 0);
}

// Find employee by first name
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(rec => rec.firstName === firstName);
}

// Calculate payroll for all employees
function calculatePayroll(records) {
  return records.reduce((total, record) => total + allWagesFor.call(record), 0);
}
