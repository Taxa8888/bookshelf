import './popup.styles.scss';
import { buttonCard } from '../button/button';

// Вызываем форму добавление или редактирования книги
const body = document.querySelector('body');
const wrapperShadow = document.querySelector('.wrapper-shadow');

const createPopupForm = (e) => {
    const popupAdd = document.createElement('div');
    const popupAddTitle = document.createElement('h1');
    const popupBookTitle = document.createElement('h4');
    const popupBookTitleInput = document.createElement('input');
    const popupBookAuthor = document.createElement('h4');
    const popupBookAuthorInput = document.createElement('input');
    const popupBookYear = document.createElement('h4');
    const popupBookYearInput = document.createElement('input');
    const popupBookImage = document.createElement('h4');
    const popupBookImageInput = document.createElement('input');
    const popupButtonContainer = document.createElement('div');
    const popupButtonSave = buttonCard('saveButton');
    const popupButtonCancel = buttonCard('cancelButton');

    popupAdd.className = 'popup-add';
    popupAddTitle.className = 'popup-add--title';
    popupBookTitle.className = 'popup-book--title';
    popupBookTitleInput.className = 'popup-book--title-input';
    popupBookAuthor.className = 'popup-book--author';
    popupBookAuthorInput.className = 'popup-book--author-input';
    popupBookYear.className = 'popup-book--year';
    popupBookYearInput.className = 'popup-book--year-input';
    popupBookYearInput.type = 'number';
    popupBookYearInput.max = '2017';
    popupBookImage.className = 'popup-book--image';
    popupBookImageInput.className = 'popup-book--image-input';
    popupButtonContainer.className = 'popup-button--container';

    if (e.path[0].textContent === 'Добавить') {
        popupAddTitle.textContent = 'Добавление новой книги';
    } else if (e.path[0].textContent === 'Редактировать') {
        popupAddTitle.textContent = 'Редактирование книги';
    }
    popupBookTitle.textContent = 'Название:';
    popupBookAuthor.textContent = 'Автор(ы):';
    popupBookYear.textContent = 'Год издания:';
    popupBookImage.textContent = 'Ссылка на изображение';

    body.append(popupAdd);
    popupAdd.append(popupAddTitle);
    popupAdd.append(popupBookTitle);
    popupAdd.append(popupBookTitleInput);
    popupAdd.append(popupBookAuthor);
    popupAdd.append(popupBookAuthorInput);
    popupAdd.append(popupBookYear);
    popupAdd.append(popupBookYearInput);
    popupAdd.append(popupBookImage);
    popupAdd.append(popupBookImageInput);
    popupAdd.append(popupButtonContainer);
    popupButtonContainer.append(popupButtonSave);
    popupButtonContainer.append(popupButtonCancel);
};

// Действие при открытие модального окна
const openPopup = () => {
    wrapperShadow.classList.toggle('wrapper-shadow--active');
    body.classList.toggle('body-overflow');
};

// Действие при закрытие модального окна
const closePopup = () => {
    body.removeChild(body.lastChild);
    wrapperShadow.classList.toggle('wrapper-shadow--active');
    body.classList.toggle('body-overflow');
};

// Действие по click по shadow области
wrapperShadow.addEventListener('click', closePopup);

export { createPopupForm, openPopup, closePopup };
