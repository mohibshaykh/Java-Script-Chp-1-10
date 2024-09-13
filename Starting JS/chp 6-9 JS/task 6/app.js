function calculateMarks() {
  // Get values from the form
  const subject1 = document.getElementById("subject1").value;
  const marks1 = parseFloat(document.getElementById("marks1").value);
  const subject2 = document.getElementById("subject2").value;
  const marks2 = parseFloat(document.getElementById("marks2").value);
  const subject3 = document.getElementById("subject3").value;
  const marks3 = parseFloat(document.getElementById("marks3").value);

  // Total marks for each subject
  const totalMarksPerSubject = 100;
  const totalMarks = totalMarksPerSubject * 3;

  // Calculate total obtained marks
  const obtainedMarks = marks1 + marks2 + marks3;

  // Calculate percentage
  const percentage = (obtainedMarks / totalMarks) * 100;

  // Display results in a table
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
        <table>
            <tr>
                <th>Subject</th>
                <th>Marks Obtained</th>
                <th>Total Marks</th>
            </tr>
            <tr>
                <td>${subject1}</td>
                <td>${marks1}</td>
                <td>${totalMarksPerSubject}</td>
            </tr>
            <tr>
                <td>${subject2}</td>
                <td>${marks2}</td>
                <td>${totalMarksPerSubject}</td>
            </tr>
            <tr>
                <td>${subject3}</td>
                <td>${marks3}</td>
                <td>${totalMarksPerSubject}</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>${obtainedMarks}</th>
                <th>${totalMarks}</th>
            </tr>
            <tr>
                <th>Percentage</th>
                <th colspan="2">${percentage.toFixed(2)}%</th>
            </tr>
        </table>
    `;
}
