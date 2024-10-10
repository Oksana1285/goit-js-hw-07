const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

const placeholder = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== '') {
    outputNam.textContent = currentTarget.value.trim();
  } else {
    outputNam.textContent = 'Anonymous';
  }
};

inputName.addEventListener('input', placeholder);
