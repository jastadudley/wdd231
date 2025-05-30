import byuCourse from "./courses.mjs";
import { setSectionSelection } from "./sections.mjs";
import { setTitle, renderSections } from "./output.mjs";

document.querySelector("#enrollStudent").addEventListener("click", () => {
  const section = Number(document.querySelector("#sectionNumber").value);
  byuCourse.changeEnrollment(section);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const section = Number(document.querySelector("#sectionNumber").value);
  byuCourse.changeEnrollment(section, false);
});

setTitle(byuCourse);
setSectionSelection(byuCourse.sections);
renderSections(byuCourse.sections);