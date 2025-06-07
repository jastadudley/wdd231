// === Time Stamp ===
document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    const now = new Date().toISOString();
    timestampField.value = now;
  });
  