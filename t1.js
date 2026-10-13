let hi = true;

while (hi == true) {
    
    let input = prompt("Enter a num:");
    let num = Number(input);
    
    let type;
    if (num % 2 == 0) {
        type = "even";
    } else {
        type = "odd";
    }
    
    function multiply(n) {
        for (let i = 1; i <= 10; i++) {
            console.log(n + " x " + i + " = " + (n * i));
        }
    }
    multiply(num);
    
    let total = 0;
    for (let j = 1; j <= num; j++) {
        total = total + j;
    }
    
    if (type == "even") {
        for (let r = 1; r <= num; r++) {
            let line = "";
            for (let c = 1; c <= num; c++) {
                line = line + "*";
            }
            console.log(line);
        }
    } else {
        for (let r = 1; r <= num; r++) {
            let line = "";
            for (let c = 1; c <= r; c++) {
                line = line + "*";
            }
            console.log(line);
        }
    }
    
    alert("Your num is " + type + "\nThe total from 1 to " + num + " is " + total);
    
    hi = confirm("Do you want to try another num?");
}

