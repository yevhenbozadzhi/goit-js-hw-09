const form = document.querySelector('.feedbackform');
const STORAGE_KEY = 'feedback-form-state';
let formData = {
    email: '',
    massage: '',
};
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.massage.value = formData.massage || '';
}

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fromData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { email, massage } = formData;
    if (email.trim() === '' || massage.trim() === '') {
        alert('Fill please all fields');
return;
    }


console.log(formData);

formData = { email: '', massage: '' };
localStorage.removeItem(STORAGE_KEY);
form.reset();
});