const body = document.querySelector('body');
const wrapperShadow = document.querySelector('.wrapper-shadow');

// Действие при закрытие модального окна
const closePopup = () => {
    body.removeChild(body.lastChild);
    wrapperShadow.classList.toggle('wrapper-shadow--active');
    body.classList.toggle('body-overflow');
};

export default closePopup;
