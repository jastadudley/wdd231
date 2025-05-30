const byuCourse = {
    code: "WDD231",
    name: "Web Frontend Development I",
    sections: [
      {
        sectionNumber: 1,
        enrolled: 88,
        instructor: "Brother Bingham"
      },
      {
        sectionNumber: 2,
        enrolled: 81,
        instructor: "Sister Shultz"
      },
      {
        sectionNumber: 3,
        enrolled: 95,
        instructor: "Sister Smith"
      }
    ],
    changeEnrollment: function (sectionNumber, add = true) {
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNumber === sectionNumber
      );
  
      if (sectionIndex >= 0) {
        if (add) {
          this.sections[sectionIndex].enrolled++;
        } else {
          this.sections[sectionIndex].enrolled--;
        }
        renderSections(this.sections);
      }
    }
  };
  
  export default byuCourse;
  