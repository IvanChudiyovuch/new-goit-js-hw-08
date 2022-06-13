import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

massageTextArea();

function onFormInput(event) {
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;

  const formData = {
    email,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;

  const formData = {
    email,
    message,
  };

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function massageTextArea() {
  const saveMassege = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveMassege) {
    for (const key in saveMassege) {
      if (key === 'email') {
        form.elements.email.value = saveMassege[key];
      }
      if (key === 'message') {
        form.elements.message.value = saveMassege[key];
      }
    }
  }
}

// const STORAGE_KEY = 'feedback-form-state';
// const EMAIL_KEY = 'feedback-email-state';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   input: document.querySelector('.feedback-form input'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', throttle(onEmailInput, 500));
// refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));

// emaileTextArea();
// massageTextArea();

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formElements = event.currentTarget.elements;
//   const email = formElements.email.value;
//   const message = formElements.message.value;

//   const formData = {
//     email,
//     message,
//   };

//   console.log(formData);

//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   localStorage.removeItem(EMAIL_KEY);
// }

// function onEmailInput(event) {
//   const messageEmail = event.target.value;
//   localStorage.setItem(EMAIL_KEY, messageEmail);
// }

// function onTextAreaInput(event) {
//   const message = event.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// function emaileTextArea() {
//   const saveMassege = localStorage.getItem(EMAIL_KEY);

//   if (saveMassege) {
//     refs.input.value = saveMassege;
//   }
// }

// function massageTextArea() {
//   const saveMassege = localStorage.getItem(STORAGE_KEY);

//   if (saveMassege) {
//     refs.textarea.value = saveMassege;
//   }
// }
