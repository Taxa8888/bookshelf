import books from './books.js';
import createPopupForm from './popup/poput.script.js';
import closePopup from './popup/popupClose.script.js';
import openPopup from './popup/popupOpen.script.js';

const wrapperShadow = document.querySelector('.wrapper-shadow');
const mainContainer = document.querySelector('.main-container');
const addButton = document.querySelector('.book-button-add');
let counter = 3;

// Отображаем список книг
const createBookFields = (allBooks) => {
    allBooks.forEach((kit) => {
        const bookCard = document.createElement('div');
        const bookImage = document.createElement('img');
        const bookInfo = document.createElement('div');
        const bootTitle = document.createElement('h3');
        const bookAuthor = document.createElement('h4');
        const bookYear = document.createElement('h5');
        const buttonEdit = document.createElement('button');
        const buttonDelete = document.createElement('button');

        bookCard.className = 'book-card';
        bookInfo.className = 'book-information';
        bookImage.className = 'book-card-image';
        bootTitle.className = 'book-card-title';
        bookAuthor.className = 'book-card-author';
        bookYear.className = 'book-card-year';
        buttonEdit.className = 'book-button-edit';
        buttonDelete.className = 'book-button-delete';

        bookCard.dataset.number = kit.id;
        bookImage.src = kit.img;
        bootTitle.textContent = `${kit.title}`;
        bookAuthor.textContent = `${kit.author}`;
        bookYear.textContent = `${kit.year}`;
        buttonEdit.textContent = 'Редактировать';
        buttonDelete.textContent = 'Удалить';

        mainContainer.append(bookCard);
        bookCard.append(bookImage);
        bookCard.append(bookInfo);
        bookInfo.append(bootTitle);
        bookInfo.append(bookAuthor);
        bookInfo.append(bookYear);
        bookCard.append(buttonEdit);
        bookCard.append(buttonDelete);

        buttonEdit.addEventListener('click', (e) => {
            createPopupForm(e);
            openPopup();

            const popupButtonSave = document.querySelector(
                '.popup-button-save'
            );
            const popupButtonCancel = document.querySelector(
                '.popup-button-cancel'
            );
            const popupBookTitleInput = document.querySelector(
                '.popup-book--title-input'
            );
            const popupBookAuthorInput = document.querySelector(
                '.popup-book--author-input'
            );
            const popupBookYearInput = document.querySelector(
                '.popup-book--year-input'
            );
            const popupBookImageInput = document.querySelector(
                '.popup-book--image-input'
            );

            popupBookTitleInput.value = bootTitle.textContent;
            popupBookAuthorInput.value = bookAuthor.textContent;
            popupBookYearInput.value = bookYear.textContent;
            popupBookImageInput.value = kit.img;

            popupButtonSave.addEventListener('click', () => {
                if (!popupBookYearInput.checkValidity()) {
                    popupBookYearInput.reportValidity();
                    return;
                }

                bootTitle.textContent = `${popupBookTitleInput.value}`;
                bookAuthor.textContent = `${popupBookAuthorInput.value}`;
                bookYear.textContent = `${popupBookYearInput.value}`;
                bookImage.src = popupBookImageInput.value;

                closePopup();
            });

            popupButtonCancel.addEventListener('click', closePopup);
        });

        buttonDelete.addEventListener('click', () => {
            bookCard.remove();
        });
    });
};

createBookFields(books);

// Добавление новой книги и работа с ней
addButton.addEventListener('click', (e) => {
    createPopupForm(e);
    openPopup();

    const popupButtonSave = document.querySelector('.popup-button-save');
    const popupButtonCancel = document.querySelector('.popup-button-cancel');
    const popupBookTitleInput = document.querySelector(
        '.popup-book--title-input'
    );
    const popupBookAuthorInput = document.querySelector(
        '.popup-book--author-input'
    );
    const popupBookYearInput = document.querySelector(
        '.popup-book--year-input'
    );
    const popupBookImageInput = document.querySelector(
        '.popup-book--image-input'
    );

    popupButtonSave.addEventListener('click', () => {
        if (!popupBookYearInput.checkValidity()) {
            popupBookYearInput.reportValidity();
            return;
        }
        counter += 1;
        const newBook = {
            id: counter,
            title: popupBookTitleInput.value,
            author: popupBookAuthorInput.value,
            year: popupBookYearInput.value,
            img: popupBookImageInput.value,
        };

        createBookFields([newBook]);

        closePopup();
    });

    popupButtonCancel.addEventListener('click', closePopup);
});

// Действие по click по shadow области
wrapperShadow.addEventListener('click', closePopup);
