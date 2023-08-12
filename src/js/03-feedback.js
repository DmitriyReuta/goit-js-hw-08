import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('[name="email"]');
const messageInput = feedbackForm.querySelector('[name="message"]');

const saveFormState = throttle(() => {
    const formState = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formState));
}, 500)

feedbackForm.addEventListener('input', saveFormState);
const storedFormState = localStorage.getItem("feedback-form-state");
if (storedFormState) {
    const parsedFormState = JSON.parse(storedFormState);
    emailInput.value = parsedFormState.email || '';
    messageInput.value = parsedFormState.message || '';
}

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };

console.log(formState);
    
emailInput.value = '';
messageInput.value = '';
localStorage.removeItem('feedback-form-state');
})
