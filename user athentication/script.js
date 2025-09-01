document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  const forms = document.querySelectorAll('.form');

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      forms.forEach(form => {
        form.classList.remove('active');
        if (form.id === `${tabName}-form`) {
          form.classList.add('active');
        }
      });
    });
  });

  // Forgot password link
  document.getElementById('show-forgot').addEventListener('click', function(e) {
    e.preventDefault();
    forms.forEach(form => form.classList.remove('active'));
    document.getElementById('forgot-form').classList.add('active');
    tabs.forEach(tab => tab.classList.remove('active'));
  });

  // Back to login
  document.getElementById('back-to-login').addEventListener('click', function(e) {
    e.preventDefault();
    forms.forEach(form => form.classList.remove('active'));
    document.getElementById('email-form').classList.add('active');

    tabs.forEach(tab => {
      tab.classList.remove('active');
      if (tab.getAttribute('data-tab') === 'email') {
        tab.classList.add('active');
      }
    });
  });

  // OTP countdown timer
  let countdownInterval;
  function startCountdown() {
    const timerElement = document.getElementById('timer');
    let timeLeft = 5 * 60;

    if (countdownInterval) clearInterval(countdownInterval);

    document.getElementById('countdown').style.display = 'block';

    countdownInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        timerElement.textContent = "00:00";
        return;
      }

      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;

      timerElement.textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }

  // Send OTP
  document.getElementById('send-otp').addEventListener('click', function() {
    const email = document.getElementById('otp-email').value;
    if (!email) {
      alert('Please enter your email address first');
      return;
    }
    alert(`OTP has been sent to ${email}. In a real app, it would be via email/SMS.`);
    startCountdown();
  });

  // Form submissions
  document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login successful! In a real application, this would validate credentials.');
  });

  document.getElementById('otp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('OTP verification successful! In a real application, this would validate the OTP.');
  });

  document.getElementById('forgot-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('forgot-email').value;
    alert(`Password reset instructions sent to ${email}.`);
  });
});
