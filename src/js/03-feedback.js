import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const emailField = form.elements.email;
const messageField = form.elements.message;

const storedValues = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (storedValues) {
  emailField.value = storedValues.email;
  messageField.value = storedValues.message;
}


form.addEventListener('input', throttle(() => {
  const valuesToStore = {
    email: emailField.value,
    message: messageField.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(valuesToStore));
}, 500));


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const valuesToLog = {
    email: emailField.value,
    message: messageField.value,
  };
  console.log(valuesToLog);

  localStorage.removeItem(STORAGE_KEY);
  emailField.value = '';
  messageField.value = '';
});