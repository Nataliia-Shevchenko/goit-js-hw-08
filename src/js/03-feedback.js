import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');
const emailFormEl = document.querySelector('.feedback-form input');
const messageFormEl = document.querySelector('.feedback-form textarea');

const DATA_KEY = 'feedback-form-state';

fillFormInput();

formEl.addEventListener('submit', handleFormSubmit);

formEl.addEventListener('input', throttle(handleFormInput, 500));

function handleFormSubmit(e) {
  e.preventDefault();

  if (e.target.elements.email.value === '' && e.target.elements.message.value === '') {
    alert('Усі поля повинні бути заповнені!');
  }

  console.log(JSON.parse(localStorage.getItem(DATA_KEY)));
 

  e.currentTarget.reset();
  localStorage.removeItem(DATA_KEY);
}

function handleFormInput(e) {

  if (emailFormEl.value !== '' || messageFormEl.value !== '') {
    localStorage.setItem(
      DATA_KEY,
      JSON.stringify({
        email: `${emailFormEl.value}`,
        message: `${messageFormEl.value}`,
      })
    );
  }
}

function fillFormInput() {
  const savedData = JSON.parse(localStorage.getItem(DATA_KEY));

  if (savedData) {
    
    emailFormEl.value = savedData.email;
    messageFormEl.value = savedData.message;
  }
}