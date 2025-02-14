import * as bootstrap from "bootstrap";
import './index.scss';

document.addEventListener("DOMContentLoaded", () => {
    // Get form elements
    const editForm = document.getElementById("editForm");
    const codeInput = document.getElementById("code");
    const nameInput = document.getElementById("name");
    const courseInput = document.getElementById("course");
    const dobInput = document.getElementById("dob");

    // Function to get student data from localStorage or URL parameters
    function getStudentData() {
        const urlParams = new URLSearchParams(window.location.search);
        const studentData = {
            code: urlParams.get("code") || "",
            name: urlParams.get("name") || "",
            course: urlParams.get("course") || "",
            dob: urlParams.get("dob") || ""
        };
        return studentData;
    }

    // Populate the form with student data
    const student = getStudentData();
    codeInput.value = student.code;
    nameInput.value = student.name;
    courseInput.value = student.course;
    dobInput.value = student.dob;

    // Handle form submission
    editForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get updated values
        const updatedStudent = {
            code: codeInput.value,
            name: nameInput.value,
            course: courseInput.value,
            dob: dobInput.value
        };

        // Simulate saving updated data (You can replace this with an API call)
        localStorage.setItem("editedStudent", JSON.stringify(updatedStudent));
        alert("Student information updated successfully!");

        // Redirect back to the list page (modify as needed)
        window.location.href = "list.html";
    });
});
