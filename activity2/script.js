// Pair each student's name with a score stored as a string.
const students = [
    { name: "Alma", score: "74" },
    { name: "Nora", score: "75" },
    { name: "Fe", score: "90" }
];
const results = document.querySelector("#results");

for (const student of students) {
    const studentName = student.name;
    const scoreString = student.score;
    // Convert the numeric string to a number before comparing it.
    const score = Number(scoreString);
    const passed = score >= 75;
    const status = passed ? "Passed" : "Failed";

    // Backticks create a template literal with embedded variables.
    const message = `${studentName} scored ${score}: ${status}.`;
    console.log(message);

    // Show the same message on the webpage.
    const result = document.createElement("li");
    result.textContent = message;
    results.appendChild(result);
}
