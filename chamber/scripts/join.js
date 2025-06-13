// === Time Stamp ===
document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    const now = new Date().toISOString();
    timestampField.value = now;
});


//Model
document.addEventListener('DOMContentLoaded', () => {
  const timestampField = document.getElementById('timestamp');
  const now = new Date().toISOString();
  timestampField.value = now;

  
  const modalButtons = document.querySelectorAll('.learn-more');
  const modals = document.querySelectorAll('.modal');
  const closes = document.querySelectorAll('.close');

  modalButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modalId = button.getAttribute('data-modal');
          const modal = document.getElementById(modalId);
          if (modal) modal.style.display = 'block';
      });
  });

  closes.forEach(close => {
      close.addEventListener('click', () => {
          close.closest('.modal').style.display = 'none';
      });
  });

  window.addEventListener('click', e => {
      modals.forEach(modal => {
          if (e.target === modal) modal.style.display = 'none';
      });
  });
});


//Thank You Confirmation Info
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);

  const firstName = params.get('firstName') || 'N/A';
  const lastName = params.get('lastName') || 'N/A';
  const email = params.get('email') || 'N/A';
  const phone = params.get('phone') || 'N/A';
  const organization = params.get('organization') || 'N/A';
  const timestamp = params.get('timestamp') || 'N/A';

  const detailsHTML = `
    <ul>
      <li><strong>First Name:</strong> ${firstName}</li>
      <li><strong>Last Name:</strong> ${lastName}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${phone}</li>
      <li><strong>Business/Organization:</strong> ${organization}</li>
      <li><strong>Submission Time:</strong> ${new Date(timestamp).toLocaleString()}</li>
    </ul>
  `;

  document.getElementById('confirmation-message').textContent = `We look forward to getting in contact with you, ${firstName}!`;
  document.getElementById('confirmation-details').innerHTML = detailsHTML;
});
