function printTable(num) {
  console.log("Multiplication table of " + num + ":");
  for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }
}

function findSum(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

function printTriangle(num) {
  console.log("Right-angled triangle:");
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

function printSquare(num) {
  console.log("Square pattern:");
  for (var i = 1; i <= num; i++) {
    var row = "";
    for (var j = 1; j <= num; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

function analyze() {
  var input = prompt("Enter a positive whole number:");

  if (input === null || input.trim() === "") {
    alert("Please enter a number!");
    return;
  }

  var num = Number(input);

  if (isNaN(num) || num < 1 || num % 1 !== 0) {
    alert("Invalid input! Enter a positive whole number.");
    return;
  }

  var type;
  if (num % 2 === 0) {
    type = "even";
  } else {
    type = "odd";
  }

  printTable(num);
  var sum = findSum(num);

  if (type === "even") {
    printSquare(num);
  } else {
    printTriangle(num);
  }

  alert(num + " is an " + type + " number.\nSum of 1 to " + num + " = " + sum);
}

var again;
do {
  analyze();
  again = confirm("Do you want to run the program again?");
} while (again);

console.log("Program finished.");
