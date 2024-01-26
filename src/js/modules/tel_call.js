function telCallForm() {
    // Находим необходимые элементы: кнопка открытия, мод. окно, кнопка закрытия

    const button = document.getElementById('tel_call');
    const modal = document.querySelector('.popup_bg');
    const buttonClose = document.querySelector('#call');

    // Прослуживаем клик на кнопке открытия, открываем окно
    button.addEventListener('click', function () {
        console.log(button);
        modal.classList.remove('hidden'); 
    })
    // Прослуживаем клик на кнопке закрытия, закрываем окно
    buttonClose.addEventListener('click', function () {        
        modal.classList.add('hidden');
    })
    // Прослушиваем клик на фейде (вокруг кнопки), закрываем окно
    modal.addEventListener('click', function () {
        console.log('Close fade');
        modal.classList.add('hidden');
    })
    // Запрещаем закрытие окна по клику на его зону
    modal.querySelector('.popup').addEventListener('click', function (е) {        
        е.stopPropagation();
    })
}

export default telCallForm;