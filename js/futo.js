function calculateAggregate() {
    // Convert the input to uppercase
    let grade1 = document.querySelector("#grade1").value.toUpperCase();
    let grade2 = document.querySelector("#grade2").value.toUpperCase();
    let grade3 = document.querySelector("#grade3").value.toUpperCase();
    let grade4 = document.querySelector("#grade4").value.toUpperCase();

    const A1 = 100;
    const B2 = 90;
    const B3 = 80;
    const C4 = 70;
    const C5 = 60;
    const C6 = 50;

    const message = document.querySelector(".pop-up");
    const sitting = document.querySelector(".sitting");
    const utme = parseFloat(document.querySelector("#score").value);

    if (utme > 0 && utme < 401) {
        console.log("UTME Score is valid!");
    } else {
        console.log("Invalid UTME Score!");
        message.innerText = "Invalid UTME score or O'level grade(s)!";
        message.style.color = "red";
        return;
    }

    
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


    let total = waec + utme;
    let aggregateScore = total/8;
   let aggregate = aggregateScore.toFixed(2); 
    console.log(aggregate + "% is the aggregate score!");
    message.innerText = `Your aggregate score is ${aggregate}%`;
    message.style.color = "darkgreen"
}