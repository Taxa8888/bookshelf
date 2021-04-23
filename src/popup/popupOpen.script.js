const body = document.querySelector('body');
const wrapperShadow = document.querySelector('.wrapper-shadow');

// Действие при открытие модального окна
const openPopup = () => {
    wrapperShadow.classList.toggle('wrapper-shadow--active');
    body.classList.toggle('body-overflow');
};

export default openPopup;
