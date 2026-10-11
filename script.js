
var items = [
  { name: "Chips", price: 20 },
  { name: "Chocolate", price: 35 },
  { name: "Cold Drink", price: 40 },
  { name: "Biscuits", price: 15 },
  { name: "Juice", price: 50 }
];

function showMenu() {
  console.log("===== VENDING MACHINE MENU =====");
  for (var i = 0; i < items.length; i++) {
    console.log((i + 1) + ". " + items[i].name + " - Rs." + items[i].price);
  }
}

function isValidItem(num) {
  if (isNaN(num) || num % 1 !== 0) {
    return false;
  }
  if (num < 1 || num > items.length) {
    return false;
  }
  return true;
}

function isValidAmount(amt) {
  if (isNaN(amt) || amt < 0) {
    return false;
  }
  return true;
}

function calculateChange(amount, price) {
  return amount - price;
}

function countdown(itemName) {
  console.log("Preparing your " + itemName + "...");
  for (var i = 3; i >= 1; i--) {
    console.log(i);
  }
  console.log("Your " + itemName + " is ready! Please collect it.");
}

function printPattern(n) {
  console.log("Pattern for item " + n + ":");
  for (var i = 1; i <= n; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row = row + j + " ";
    }
    console.log(row);
  }
}

function buyItem() {
  showMenu();

  var itemInput = prompt("Enter the item number (1 to " + items.length + "):");
  if (itemInput === null || itemInput.trim() === "") {
    alert("Invalid item number!");
    return;
  }
  var itemNo = Number(itemInput);
  if (!isValidItem(itemNo)) {
    alert("Invalid item number! Please choose between 1 and " + items.length + ".");
    return;
  }

  var amountInput = prompt("Enter the amount of money you have:");
  if (amountInput === null || amountInput.trim() === "") {
    alert("Invalid amount!");
    return;
  }
  var amount = Number(amountInput);
  if (!isValidAmount(amount)) {
    alert("Invalid amount! Amount cannot be negative or text.");
    return;
  }

  var selected = items[itemNo - 1];
  var change = calculateChange(amount, selected.price);

  if (change < 0) {
    alert("Insufficient balance! " + selected.name + " costs Rs." + selected.price +
          ". You need Rs." + (-change) + " more.");
  } else if (change === 0) {
    alert("You selected " + selected.name + ". Exact amount paid, no change.");
    countdown(selected.name);
    printPattern(itemNo);
  } else {
    alert("You selected " + selected.name + ". Your change is Rs." + change);
    countdown(selected.name);
    printPattern(itemNo);
  }
}

var again;
do {
  buyItem();
  again = confirm("Do you want to make another purchase?");
} while (again);

console.log("Thank you for using the vending machine. Goodbye!");
alert("Thank you! Have a nice day!");
