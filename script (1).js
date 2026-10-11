function calculateTotal(m1, m2, m3) {
  return m1 + m2 + m3;
}

function calculateAverage(total) {
  return total / 3;
}

function getGrade(avg) {
  if (avg >= 90) {
    return "A";
  } else if (avg >= 75) {
    return "B";
  } else if (avg >= 50) {
    return "C";
  } else {
    return "F";
  }
}

function isValidMark(mark) {
  if (isNaN(mark) || mark < 0 || mark > 100) {
    return false;
  }
  return true;
}

function getResult() {
  var name = prompt("Enter student name:");
  if (name === null || name.trim() === "") {
    alert("Name cannot be empty!");
    return;
  }

  var mark1 = prompt("Enter marks in subject 1:");
  var mark2 = prompt("Enter marks in subject 2:");
  var mark3 = prompt("Enter marks in subject 3:");

  if (mark1 === null || mark2 === null || mark3 === null ||
      mark1.trim() === "" || mark2.trim() === "" || mark3.trim() === "") {
    alert("Error: Please enter all the marks.");
    return;
  }

  var m1 = Number(mark1);
  var m2 = Number(mark2);
  var m3 = Number(mark3);

  if (!isValidMark(m1) || !isValidMark(m2) || !isValidMark(m3)) {
    alert("Error: Marks must be numbers between 0 and 100.");
    return;
  }

  var total = calculateTotal(m1, m2, m3);
  var average = calculateAverage(total);
  var grade = getGrade(average);

  alert("Student Name: " + name +
        "\nTotal Marks: " + total +
        "\nAverage: " + average.toFixed(2) +
        "\nGrade: " + grade);
}

var again;
do {
  getResult();
  again = confirm("Do you want to calculate another student's result?");
} while (again);

alert("Program ended.");
