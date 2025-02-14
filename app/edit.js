document.addEventListener("DOMContentLoaded", () => {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const studentCode = urlParams.get('code');

    // Fetch the stored student data
    let storedData = JSON.parse(localStorage.getItem('studentsData')) || [];

    // Find the student to edit
    const student = storedData.find(s => s.code === studentCode);

    // Populate the form fields with the student's existing data
    if (student) {
        document.getElementById("code").value = student.code;
        document.getElementById("name").value = student.name;
        document.getElementById("course").value = student.course;
        document.getElementById("dob").value = student.dob;
    }

    // Handle form submission to update the student
    document.getElementById("editForm").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form reload behavior

        // Get the updated values from the form
        const updatedStudent = {
            code: document.getElementById("code").value,
            name: document.getElementById("name").value,
            course: document.getElementById("course").value,
            dob: document.getElementById("dob").value,
        };

        // Update the student in the stored data
        const index = storedData.findIndex(s => s.code === studentCode);
        if (index !== -1) {
            storedData[index] = updatedStudent; // Update the specific student
        }

        // Save the updated data back to local storage
        localStorage.setItem('studentsData', JSON.stringify(storedData));

        // Redirect to the list page to see the changes
        window.location.href = "list.html";
    });
});
