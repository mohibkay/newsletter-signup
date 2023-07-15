const form = document.getElementById('form');
const formContainer = document.querySelector('main');
const successMessage = document.querySelector('.success');
const emailId = document.querySelector('.email__id');
const dismissBtn = document.querySelector('.dismiss__btn');

function validateForm(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(emailInput, 'Valid email required');
  } else {
    emailId.innerText = emailValue;
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
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

form.addEventListener('submit', validateForm);
dismissBtn.addEventListener('click', () => window.location.reload());
