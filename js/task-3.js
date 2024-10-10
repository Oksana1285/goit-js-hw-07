const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

const placeholder = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== '') {
    outputName.textContent = currentTarget.value.trim();
  } else {
    outputName.textContent = 'Anonymous';
  }
};

inputName.addEventListener('input', placeholder);
