function studentMarks() {
    let marks = Number(prompt("enter student marks(0 to 100):"));

 
    if(marks 100) {

        console. log(" Please input a number from 0 to 100." );
        
        return;
        
     }
    
    let grade;

    if (marks > 79) {
       grade = "A";

    } else if (marks >= 60) {
        grade = "B";

    } else if (marks >= 50) {
        grade = "C";

    } else if (marks >= 40) {
        grade = "D";

    } else {
        grade = "E";

    }

   console.log(studentMarks)
}

studentMarks();
