
import { throttle } from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');


const feedbackFormStateKey = 'feedback-form-state';


emailInput.addEventListener(
'input',
throttle(() => {

const state = {
email: emailInput.value,
message: messageInput.value,
};
localStorage.setItem(feedbackFormStateKey, JSON.stringify(state));
}, 500)
);

messageInput.addEventListener(
'input',
throttle(() => {

const state = {
email: emailInput.value,
message: messageInput.value,
};
localStorage.setItem(feedbackFormStateKey, JSON.stringify(state));
}, 500)
);


const savedState = localStorage.getItem(feedbackFormStateKey);
if (savedState) {

const state = JSON.parse(savedState);
emailInput.value = state.email;
messageInput.value = state.message;
}


feedbackForm.addEventListener('submit', (event) => {
event.preventDefault();

localStorage.removeItem(feedbackFormStateKey);

emailInput.value = '';
messageInput.value = '';

const state = {
email: emailInput.value,
message: messageInput.value,
};
console.log(state);
});
