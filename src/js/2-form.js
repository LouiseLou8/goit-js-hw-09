const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';

const saveData = localStorage.getItem(STORAGE_KEY);
if (saveData) {
  const parsedData = JSON.parse(saveData);
  form.elements.email.value = parsedData.email || '';
  form.elements.message.value = parsedData.message || '';
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
}
form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }
  console.log('form data submitted:', formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
