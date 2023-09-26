let courses = [];
      
      function addCourse() {
        let courseName = document.getElementById("course-name").value;
        let creditHours = document.getElementById("credit-hours").value;
        let grade = document.getElementById("grade").value;
        
        let course = { name: courseName, credit: creditHours, grade: grade };
        courses.push(course);
        
        let courseTable = document.getElementById("course-table");
        let newRow = courseTable.insertRow(-1);
        let nameCell = newRow.insertCell(0);
        let creditCell = newRow.insertCell(1);
        let gradeCell = newRow.insertCell(2);
        nameCell.innerHTML = courseName;
        creditCell.innerHTML = creditHours;
        gradeCell.innerHTML = grade;
      }
      
      function calculateCGPA() {
        let totalCredits = 0;
        let totalGradePoints = 0;
        for (let i = 0; i < courses.length; i++) {
          let course = courses[i];
          totalCredits += parseInt(course.credit);
          totalGradePoints += parseInt(course.credit) * parseFloat(course.grade);
        }
        let cgpa = (totalGradePoints / totalCredits).toFixed(2);
        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Your CGPA is: " + cgpa;
      }