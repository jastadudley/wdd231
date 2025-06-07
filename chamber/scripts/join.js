// === Time Stamp ===
document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    const now = new Date().toISOString();
    timestampField.value = now;
});



//potentual Modal
/*
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".join-form");
    const modal = document.getElementById("confirmationModal");
    const closeModalBtn = document.getElementById("closeModal");
    const timestampField = document.getElementById("timestamp");
  
    timestampField.value = new Date().toISOString();
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      modal.showModal();
    });
  
    closeModalBtn.addEventListener("click", () => {
      modal.close();
      form.reset(); 
    });
});
*/
