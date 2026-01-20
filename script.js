function checkAttendance() {
    let name = document.getElementById("name").value.trim();
    let total = Number(document.getElementById("total").value);
    let attended = Number(document.getElementById("attended").value);
    let result = document.getElementById("result");

    if (!name) {
        result.innerHTML = "❌ Please enter a student name";
        result.style.color = "red";
        return;
    }

    if (isNaN(total) || isNaN(attended) || total <= 0 || attended < 0 || attended > total) {
        result.innerHTML = "❌ Invalid input - Please enter valid numbers";
        result.style.color = "red";
        return;
    }

    let percentage = (attended / total) * 100;
    let stage = "";
    let color = "";

    if (percentage >= 75) {
        stage = "✅ Eligible (Good Attendance)";
        color = "lightgreen";
    } 
    else if (percentage >= 60) {
        stage = "⚠️ Average Attendance";
        color = "yellow";
    } 
    else if (percentage >= 40) {
        stage = "❌ Poor Attendance";
        color = "orange";
    } 
    else {
        stage = "🚫 Not Eligible for Exam";
        color = "red";
    }

    result.style.color = color;
    result.innerHTML = `
        Student: <b>${name}</b><br>
        Attendance: ${percentage.toFixed(2)}%<br>
        Status: <b>${stage}</b>
    `;
}
