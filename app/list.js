document.addEventListener("DOMContentLoaded", () => {
    // Get stored student data from local storage or use mock data
    const storedData = JSON.parse(localStorage.getItem('studentsData')) || [
        { code: "S101", name: "Queen Sarah", course: "Trends in Tech", dob: "2002-10-01" },
        { code: "S102", name: "Kelly Kestin", course: "Physics", dob: "2000-05-20" },
        { code: "S103", name: "Praise Oge", course: "Computer Science", dob: "1998-09-10" },
        { code: "S104", name: "Getrude Jomia", course: "Chemistry", dob: "2001-01-30" },
        { code: "S105", name: "Bandon Anumu", course: "Biology", dob: "1997-12-05" },
    ];

    const tableBody = document.getElementById("data-table");

    // Clear existing table data
    tableBody.innerHTML = '';

    // Populate table with student data
    storedData.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = 
            `<td>${student.code}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.dob}</td>
            <td><button class="btn btn-primary btn-sm edit-btn">Edit</button></td>`;
        tableBody.appendChild(row);
    });

    // Event listener for the edit button
    tableBody.addEventListener("click", (event) => {
        if (event.target.classList.contains("edit-btn")) {
            const row = event.target.closest("tr");
            const studentCode = row.children[0].textContent;
            window.location.href = `edit.html?code=${studentCode}`;
        }
    });
});
