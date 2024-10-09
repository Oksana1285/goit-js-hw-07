const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

const placeholder = some => {
  outputName.textContent =
    inputName.value !== ' ' ? some.currentTarget.value : 'Anonymous';
};

inputName.addEventListener('input', placeholder);
