// Initializing Variables
const timerEl = document.querySelector(".timer");

// Current Time logic and day.
const logic = () => {
  let total = "";
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  let date = new Date().getDay();
  if (date == 0) {
    if (hour >= 12) {
      total = `Sun ${hour} : ${minutes} : PM`;
    } else if (hour == 0) {
      total = `Sun ${hour} : ${minutes}0 : AM`;
    } else {
      total = `Sun ${hour} : ${minutes} : AM`;
    }
  } else if (date == 1) {
    if (hour >= 12) {
      total = `Mon ${hour} : ${minutes} : PM`;
    } else if (hour == 0) {
      total = `Mon ${hour} : ${minutes}0 : AM`;
    } else {
      total = `Mon ${hour} : ${minutes} : AM`;
    }
  } else if (date == 2) {
    if (hour >= 12) {
      total = `Tue ${hour} : ${minutes} : PM`;
    } else if (hour == 0) {
      total = `Tue ${hour} : ${minutes}0 : AM`;
    } else {
      total = `Tue ${hour} : ${minutes} : AM`;
    }
  } else if (date == 3) {
    if (hour >= 12) {
      total = `Wed ${hour} : ${minutes} : PM`;
    } else if (hour == 0) {
      total = `Wed ${hour} : ${minutes}0 : AM`;
    } else {
      total = `Wed ${hour} : ${minutes} : AM`;
    }
  } else if (date == 4) {
    if (hour >= 12) {
      total = `Thus ${hour} : ${minutes} : PM`;
    } else if (hour == 0) {
      total = `Thus ${hour} : ${minutes}0 : AM`;
    } else {
      total = `Thus ${hour} : ${minutes} : AM`;
    }
  } else if (date == 5) {
    if (hour >= 12) {
      total = `Fri ${hour} : ${minutes} : PM`;
    } else if (hour == 0) {
      total = `Fri ${hour} : ${minutes}0 : AM`;
    } else {
      total = `Fri ${hour} : ${minutes} : AM`;
    }
  } else if (date == 6) {
    if (hour >= 12) {
      total = `Sat ${hour} : ${minutes} : PM`;
    } else if (hour == 0) {
      total = `Sat ${hour} : ${minutes}0 : AM`;
    } else {
      total = `Sat ${hour} : ${minutes} : AM`;
    }
  }
  timerEl.textContent = total;
  console.log(100);
};

setInterval(logic, 1000);
