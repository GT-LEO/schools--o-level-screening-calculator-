function calculateAggregate() {
    // Convert the input to uppercase
    let grade1 = document.querySelector("#Grade1").value.toUpperCase();
    let grade2 = document.querySelector("#Grade2").value.toUpperCase();
    let grade3 = document.querySelector("#Grade3").value.toUpperCase();
    let grade4 = document.querySelector("#Grade4").value.toUpperCase();

    const A1 = 90;
    const B2 = 80;
    const B3 = 70;
    const C4 = 60;
    const C5 = 50;
    const C6 = 40;

    const message = document.querySelector(".pop-up");
    const sitting = document.querySelector(".sitting");
    const bonus = sitting.checked;
    const utme = parseFloat(document.querySelector("#score").value);

    if (utme > 0 && utme < 401) {
        console.log("UTME Score is valid!");
    } else {
        console.log("Invalid UTME Score!");
        message.innerText = "Invalid UTME score or O'level grade(s)!";
        message.style.color = "red";
        return;
    }

    let utmeAggregate = utme * 0.9;
    let waec = 0;

    function getGradePoints(grade) {
        switch (grade) {
            case "A1":
                return A1;
            case "B2":
                return B2;
            case "B3":
                return B3;
            case "C4":
                return C4;
            case "C5":
                return C5;
            case "C6":
                return C6;
            default:
                // Handle invalid grades
                console.log("Invalid O'level grade");
         message.innerText = "Invalid O'level grade!";
            message.style.color = "red";
                return 0;
        }
    }

    waec += getGradePoints(grade1) + getGradePoints(grade2) + getGradePoints(grade3) + getGradePoints(grade4);

    if (bonus) {
        waec += 40;
    }

    let total = waec * 0.1 + utmeAggregate;
    let aggregate = total.toFixed(2);
    console.log(aggregate + " is the aggregate score");
    message.innerText = `Your aggregate score is ${aggregate}`;
    message.style.color = "darkgreen"
}