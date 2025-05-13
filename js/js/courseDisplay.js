function renderCourses(courseArray) {
    const courseContainer = document.getElementById("courses");
    courseContainer.innerHTML = "";
  
    let totalCredits = 0;
  
    courseArray.forEach(course => {
      const card = document.createElement("div");
      card.classList.add("course-card");
      if (course.completed) {
        card.classList.add("completed");
      }
  
      card.innerHTML = `
        <h3>${course.code}: ${course.name}</h3>
        <p>Credits: ${course.credits}</p>
        <p>Category: ${course.category}</p>
        <p>Status: ${course.completed ? "✅ Completed" : "❌ Not Completed"}</p>
      `;
  
      courseContainer.appendChild(card);
  
      totalCredits += course.credits;
    });
  
    const total = document.createElement("p");
    total.classList.add("total-credits");
    total.textContent = `Total Credits: ${courseArray.reduce((sum, c) => sum + c.credits, 0)}`;
    courseContainer.appendChild(total);
  }
  
  function setupFilterButtons() {
    const filters = ["All", "WDD", "CSE"];
    const courseContainer = document.getElementById("courses");
  
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("filter-buttons");
  
    filters.forEach(filter => {
      const btn = document.createElement("button");
      btn.textContent = filter + " Courses";
      btn.addEventListener("click", () => {
        const filtered =
          filter === "All"
            ? courses
            : courses.filter(c => c.category === filter);
        renderCourses(filtered);
      });
      buttonContainer.appendChild(btn);
    });
  
    courseContainer.before(buttonContainer);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setupFilterButtons();
    renderCourses(courses);
  });
  