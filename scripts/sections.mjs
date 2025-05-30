import byuCourse from "./courses.mjs";


export function setSectionSelection() {
    const sectionSelect = document.querySelector("#sectionNumber");
    byuCourse.sections.forEach((section) => {
      const option = document.createElement("option");
      option.value = section.sectionNumber;
      option.textContent = `Section ${section.sectionNumber}`;
      sectionSelect.appendChild(option);
    });
  }
  