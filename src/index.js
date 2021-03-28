import books from './books.js';

const body = document.querySelector('body');
const wrapperShadow = document.querySelector('.wrapper-shadow');
const mainContainer = document.querySelector('.main-container');
const addButton = document.querySelector('.book-button-add');

// Вызываем форму добавление или редактирования книги
function createPopupForm(e) {
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
  const popupButtonSave = document.createElement('button');
  const popupButtonCancel = document.createElement('button');

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
  popupButtonSave.className = 'popup-button-save';
  popupButtonCancel.className = 'popup-button-cancel';

  if (e.path[0].textContent === 'Добавить') {
    popupAddTitle.textContent = 'Добавление новой книги';
  } else if (e.path[0].textContent === 'Редактировать') {
    popupAddTitle.textContent = 'Редактирование книги';
  }
  popupBookTitle.textContent = 'Название:';
  popupBookAuthor.textContent = 'Автор(ы):';
  popupBookYear.textContent = 'Год издания:';
  popupBookImage.textContent = 'Ссылка на изображение';
  popupButtonSave.textContent = 'Сохранить';
  popupButtonCancel.textContent = 'Отменить';

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
}

// Действие при закрытие модального окна
const closePopup = function() {
  body.removeChild(body.lastChild);
  wrapperShadow.classList.toggle('wrapper-shadow--active');
  body.classList.toggle('body-overflow');
};

// Действие при открытие модального окна
const openPopup = function() {
  wrapperShadow.classList.toggle('wrapper-shadow--active');
  body.classList.toggle('body-overflow');
};

// Отображаем список книг
function createBookField(allBooks) {
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

      const popupButtonSave = document.querySelector('.popup-button-save');
      const popupButtonCancel = document.querySelector('.popup-button-cancel');
      const popupBookTitleInput = document.querySelector('.popup-book--title-input');
      const popupBookAuthorInput = document.querySelector('.popup-book--author-input');
      const popupBookYearInput = document.querySelector('.popup-book--year-input');
      const popupBookImageInput = document.querySelector('.popup-book--image-input');

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
}

createBookField(books);

// Функция генерации уникального id

function createID() {
  const idArray = [];
  for (let i = 0; i < books.length; i += 1) {
    idArray.push(books[i].id);
  }
  const newId = Math.floor(Math.random() * (1000 - books.length)) + 1;
  if (idArray.includes(newId)) {
    createID();
  } return newId;
}

// Добавление новой книги и работа с ней
addButton.addEventListener('click', (e) => {
  createPopupForm(e);
  openPopup();

  const popupButtonSave = document.querySelector('.popup-button-save');
  const popupButtonCancel = document.querySelector('.popup-button-cancel');
  const popupBookTitleInput = document.querySelector('.popup-book--title-input');
  const popupBookAuthorInput = document.querySelector('.popup-book--author-input');
  const popupBookYearInput = document.querySelector('.popup-book--year-input');
  const popupBookImageInput = document.querySelector('.popup-book--image-input');

  popupButtonSave.addEventListener('click', () => {
    if (!popupBookYearInput.checkValidity()) {
      popupBookYearInput.reportValidity();
      return;
    }

    const newBook = {
      id: createID(),
      title: popupBookTitleInput.value,
      author: popupBookAuthorInput.value,
      year: popupBookYearInput.value,
      img: popupBookImageInput.value,
    };

    createBookField([newBook]);

    closePopup();
  });

  popupButtonCancel.addEventListener('click', closePopup);
});

wrapperShadow.addEventListener('click', closePopup);
