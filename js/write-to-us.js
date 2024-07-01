//Проверка чекбокса

const writeToUsLabel = document.querySelector('.write-to-us-label');
const writeToUsCheckBox = document.querySelector('.write-to-us-checkbox');

const writeToUsButton = document.querySelector('.write-to-us-btn');

writeToUsLabel.addEventListener('click', ()=>{
    if(writeToUsCheckBox.checked){
        writeToUsButton.disabled = false;
        writeToUsButton.classList.add('active');
    }
    else{
        writeToUsButton.disabled = true;
        writeToUsButton.classList.remove('active');
    }
})
