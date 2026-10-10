// Create a name variable and test three scores stored as strings.
const studentName = "Ariel Habawel";
const testScores = ["74", "75", "90"];
const results = document.querySelector("#results");

for (const scoreString of testScores) {
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
