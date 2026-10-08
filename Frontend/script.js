async function checkBackend() {
  const statusMessage = document.getElementById("statusMessage");

  statusMessage.innerText = "Checking backend connection...";

  try {
    const response = await fetch("/api/status");

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();

    statusMessage.innerText = data.message;
  } catch (error) {
    statusMessage.innerText = "Backend connection failed ❌";
  }
}

async function loadStudents() {
  const studentList = document.getElementById("studentList");

  const studentCount = document.getElementById("studentCount");

  studentList.innerHTML = `
        <div class="empty-state">
            <p>Loading students...</p>
        </div>
        `;

  try {
    const response = await fetch("/api/students");

    if (!response.ok) {
      throw new Error("Unable to fetch students");
    }

    const students = await response.json();

    studentCount.innerText = students.length;

    studentList.innerHTML = "";

    students.forEach((student) => {
      const card = document.createElement("div");

      card.className = "student-card";

      const firstLetter = student.name.charAt(0);

      card.innerHTML = `

                <div class="student-info">

                    <div class="student-avatar">
                        ${firstLetter}
                    </div>

                    <div>

                        <div class="student-name">
                            ${student.name}
                        </div>

                        <div class="student-course">
                            ${student.course}
                        </div>

                    </div>

                </div>

                <div class="student-year">
                    ${student.year}
                </div>

            `;

      studentList.appendChild(card);
    });
  } catch (error) {
    studentList.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ⚠️
                </div>

                <h3>
                    Unable to load students
                </h3>

                <p>
                    Please check the backend server.
                </p>

            </div>

        `;
  }
}
