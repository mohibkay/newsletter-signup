const form = document.getElementById('form');
const formContainer = document.querySelector('main');
const successMessage = document.querySelector('.success');

function validateForm(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(emailInput, 'Valid email required');
  } else {
    setSuccessFor(emailInput);
    formContainer.style.display = 'none';
    successMessage.style.display = 'block';
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('.error-message');

  formControl.className = 'form-control error';
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener('submit', validateForm);
