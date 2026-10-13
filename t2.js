function result() {
    let name = prompt("enter your name")

    let m1 = Number(prompt("Enter mark 1"))
    let m2 = Number(prompt("Enter mark 2"))
    let m3 = Number(prompt("Enter mark 3"))

    if (m1 < 0 || m1 > 100 || m2 < 0 || m2 > 100 || m3 < 0 || m3 > 100 ) {
        alert("mark should allowed only from 0 to 100")
    }
    else {
        let total = m1 + m2 + m3
        let average = total / 3
        let grade;

        if (average >= 90) {
            grade = "A"
        }
        else if (average >= 75) {
            grade = "B"
        }
        else if (average >= 50) {
            grade = "C"
        }
        else {
            grade = "F"
        }

        alert("Name: " + name + "\n Total :"+total+"\nAverage :" +average+"\nGrade :"+grade)
    }
}
result()