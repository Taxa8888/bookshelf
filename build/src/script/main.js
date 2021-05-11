/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <title>Bookshelf</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n  <div class=\\\"wrapper-shadow\\\"></div>\\r\\n  <main class=\\\"footer\\\">\\r\\n    <div class=\\\"main-title\\\">Книжная полка</div>\\r\\n    <button class=\\\"book-button-add\\\">Добавить</button>\\r\\n  </main>\\r\\n  <div class=\\\"wrapper\\\">\\r\\n    <div class=\\\"main-container\\\"></div>\\r\\n  </div>\\r\\n</body>\\r\\n\\r\\n</html>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://bookshelf/./index.html?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookshelf/./src/style/style.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _books_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books.js */ \"./src/books.js\");\n/* harmony import */ var _popup_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup/popup.js */ \"./src/popup/popup.js\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.html */ \"./index.html\");\n\r\n\r\n\r\n\r\n\r\nconst mainContainer = document.querySelector('.main-container');\r\nconst addButton = document.querySelector('.book-button-add');\r\nlet counter = 3;\r\n\r\n// Отображаем список книг\r\nconst createBookFields = (allBooks) => {\r\n    allBooks.forEach((kit) => {\r\n        const bookCard = document.createElement('div');\r\n        const bookImage = document.createElement('img');\r\n        const bookInfo = document.createElement('div');\r\n        const bootTitle = document.createElement('h3');\r\n        const bookAuthor = document.createElement('h4');\r\n        const bookYear = document.createElement('h5');\r\n        const buttonEdit = document.createElement('button');\r\n        const buttonDelete = document.createElement('button');\r\n\r\n        bookCard.className = 'book-card';\r\n        bookInfo.className = 'book-information';\r\n        bookImage.className = 'book-card-image';\r\n        bootTitle.className = 'book-card-title';\r\n        bookAuthor.className = 'book-card-author';\r\n        bookYear.className = 'book-card-year';\r\n        buttonEdit.className = 'book-button-edit';\r\n        buttonDelete.className = 'book-button-delete';\r\n\r\n        bookCard.dataset.number = kit.id;\r\n        bookImage.src = kit.img;\r\n        bootTitle.textContent = `${kit.title}`;\r\n        bookAuthor.textContent = `${kit.author}`;\r\n        bookYear.textContent = `${kit.year}`;\r\n        buttonEdit.textContent = 'Редактировать';\r\n        buttonDelete.textContent = 'Удалить';\r\n\r\n        mainContainer.append(bookCard);\r\n        bookCard.append(bookImage);\r\n        bookCard.append(bookInfo);\r\n        bookInfo.append(bootTitle);\r\n        bookInfo.append(bookAuthor);\r\n        bookInfo.append(bookYear);\r\n        bookCard.append(buttonEdit);\r\n        bookCard.append(buttonDelete);\r\n\r\n        buttonEdit.addEventListener('click', (e) => {\r\n            (0,_popup_popup_js__WEBPACK_IMPORTED_MODULE_1__.createPopupForm)(e);\r\n            (0,_popup_popup_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)();\r\n\r\n            const popupButtonSave = document.querySelector(\r\n                '.popup-button-save'\r\n            );\r\n            const popupButtonCancel = document.querySelector(\r\n                '.popup-button-cancel'\r\n            );\r\n            const popupBookTitleInput = document.querySelector(\r\n                '.popup-book--title-input'\r\n            );\r\n            const popupBookAuthorInput = document.querySelector(\r\n                '.popup-book--author-input'\r\n            );\r\n            const popupBookYearInput = document.querySelector(\r\n                '.popup-book--year-input'\r\n            );\r\n            const popupBookImageInput = document.querySelector(\r\n                '.popup-book--image-input'\r\n            );\r\n\r\n            popupBookTitleInput.value = bootTitle.textContent;\r\n            popupBookAuthorInput.value = bookAuthor.textContent;\r\n            popupBookYearInput.value = bookYear.textContent;\r\n            popupBookImageInput.value = kit.img;\r\n\r\n            popupButtonSave.addEventListener('click', () => {\r\n                if (!popupBookYearInput.checkValidity()) {\r\n                    popupBookYearInput.reportValidity();\r\n                    return;\r\n                }\r\n\r\n                bootTitle.textContent = `${popupBookTitleInput.value}`;\r\n                bookAuthor.textContent = `${popupBookAuthorInput.value}`;\r\n                bookYear.textContent = `${popupBookYearInput.value}`;\r\n                bookImage.src = popupBookImageInput.value;\r\n\r\n                (0,_popup_popup_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)();\r\n            });\r\n\r\n            popupButtonCancel.addEventListener('click', _popup_popup_js__WEBPACK_IMPORTED_MODULE_1__.closePopup);\r\n        });\r\n\r\n        buttonDelete.addEventListener('click', () => {\r\n            bookCard.remove();\r\n        });\r\n    });\r\n};\r\n\r\ncreateBookFields(_books_js__WEBPACK_IMPORTED_MODULE_0__.default);\r\n\r\n// Добавление новой книги и работа с ней\r\naddButton.addEventListener('click', (e) => {\r\n    (0,_popup_popup_js__WEBPACK_IMPORTED_MODULE_1__.createPopupForm)(e);\r\n    (0,_popup_popup_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)();\r\n\r\n    const popupButtonSave = document.querySelector('.popup-button-save');\r\n    const popupButtonCancel = document.querySelector('.popup-button-cancel');\r\n    const popupBookTitleInput = document.querySelector(\r\n        '.popup-book--title-input'\r\n    );\r\n    const popupBookAuthorInput = document.querySelector(\r\n        '.popup-book--author-input'\r\n    );\r\n    const popupBookYearInput = document.querySelector(\r\n        '.popup-book--year-input'\r\n    );\r\n    const popupBookImageInput = document.querySelector(\r\n        '.popup-book--image-input'\r\n    );\r\n\r\n    popupButtonSave.addEventListener('click', () => {\r\n        if (!popupBookYearInput.checkValidity()) {\r\n            popupBookYearInput.reportValidity();\r\n            return;\r\n        }\r\n        counter += 1;\r\n        const newBook = {\r\n            id: counter,\r\n            title: popupBookTitleInput.value,\r\n            author: popupBookAuthorInput.value,\r\n            year: popupBookYearInput.value,\r\n            img: popupBookImageInput.value,\r\n        };\r\n\r\n        createBookFields([newBook]);\r\n\r\n        (0,_popup_popup_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)();\r\n    });\r\n\r\n    popupButtonCancel.addEventListener('click', _popup_popup_js__WEBPACK_IMPORTED_MODULE_1__.closePopup);\r\n});\r\n\n\n//# sourceURL=webpack://bookshelf/./src/app.js?");

/***/ }),

/***/ "./src/books.js":
/*!**********************!*\
  !*** ./src/books.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst books = [\r\n    {\r\n        id: 1,\r\n        title: 'Зов кукушки',\r\n        author: 'Роберт Гэлбрейт',\r\n        year: '2013',\r\n        img: './src/img/cry_redbird.jpg',\r\n    },\r\n    {\r\n        id: 2,\r\n        title: 'Программирование на Java',\r\n        author: 'Патрик Нимейер, Дэниэл Леук',\r\n        year: '2013',\r\n        img: './src/img/java.jpg',\r\n    },\r\n    {\r\n        id: 3,\r\n        title: 'Изучаем программирование на Python',\r\n        author: 'Пол Бэрри',\r\n        year: '2016',\r\n        img: './src/img/python.jpg',\r\n    },\r\n];\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (books);\r\n\n\n//# sourceURL=webpack://bookshelf/./src/books.js?");

/***/ }),

/***/ "./src/popup/popup.js":
/*!****************************!*\
  !*** ./src/popup/popup.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPopupForm\": () => (/* binding */ createPopupForm),\n/* harmony export */   \"openPopup\": () => (/* binding */ openPopup),\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup)\n/* harmony export */ });\n// Вызываем форму добавление или редактирования книги\r\nconst body = document.querySelector('body');\r\nconst wrapperShadow = document.querySelector('.wrapper-shadow');\r\n\r\nconst createPopupForm = (e) => {\r\n    const popupAdd = document.createElement('div');\r\n    const popupAddTitle = document.createElement('h1');\r\n    const popupBookTitle = document.createElement('h4');\r\n    const popupBookTitleInput = document.createElement('input');\r\n    const popupBookAuthor = document.createElement('h4');\r\n    const popupBookAuthorInput = document.createElement('input');\r\n    const popupBookYear = document.createElement('h4');\r\n    const popupBookYearInput = document.createElement('input');\r\n    const popupBookImage = document.createElement('h4');\r\n    const popupBookImageInput = document.createElement('input');\r\n    const popupButtonContainer = document.createElement('div');\r\n    const popupButtonSave = document.createElement('button');\r\n    const popupButtonCancel = document.createElement('button');\r\n\r\n    popupAdd.className = 'popup-add';\r\n    popupAddTitle.className = 'popup-add--title';\r\n    popupBookTitle.className = 'popup-book--title';\r\n    popupBookTitleInput.className = 'popup-book--title-input';\r\n    popupBookAuthor.className = 'popup-book--author';\r\n    popupBookAuthorInput.className = 'popup-book--author-input';\r\n    popupBookYear.className = 'popup-book--year';\r\n    popupBookYearInput.className = 'popup-book--year-input';\r\n    popupBookYearInput.type = 'number';\r\n    popupBookYearInput.max = '2017';\r\n    popupBookImage.className = 'popup-book--image';\r\n    popupBookImageInput.className = 'popup-book--image-input';\r\n    popupButtonContainer.className = 'popup-button--container';\r\n    popupButtonSave.className = 'popup-button-save';\r\n    popupButtonCancel.className = 'popup-button-cancel';\r\n\r\n    if (e.path[0].textContent === 'Добавить') {\r\n        popupAddTitle.textContent = 'Добавление новой книги';\r\n    } else if (e.path[0].textContent === 'Редактировать') {\r\n        popupAddTitle.textContent = 'Редактирование книги';\r\n    }\r\n    popupBookTitle.textContent = 'Название:';\r\n    popupBookAuthor.textContent = 'Автор(ы):';\r\n    popupBookYear.textContent = 'Год издания:';\r\n    popupBookImage.textContent = 'Ссылка на изображение';\r\n    popupButtonSave.textContent = 'Сохранить';\r\n    popupButtonCancel.textContent = 'Отменить';\r\n\r\n    body.append(popupAdd);\r\n    popupAdd.append(popupAddTitle);\r\n    popupAdd.append(popupBookTitle);\r\n    popupAdd.append(popupBookTitleInput);\r\n    popupAdd.append(popupBookAuthor);\r\n    popupAdd.append(popupBookAuthorInput);\r\n    popupAdd.append(popupBookYear);\r\n    popupAdd.append(popupBookYearInput);\r\n    popupAdd.append(popupBookImage);\r\n    popupAdd.append(popupBookImageInput);\r\n    popupAdd.append(popupButtonContainer);\r\n    popupButtonContainer.append(popupButtonSave);\r\n    popupButtonContainer.append(popupButtonCancel);\r\n};\r\n\r\n// Действие при открытие модального окна\r\nconst openPopup = () => {\r\n    wrapperShadow.classList.toggle('wrapper-shadow--active');\r\n    body.classList.toggle('body-overflow');\r\n};\r\n\r\n// Действие при закрытие модального окна\r\nconst closePopup = () => {\r\n    body.removeChild(body.lastChild);\r\n    wrapperShadow.classList.toggle('wrapper-shadow--active');\r\n    body.classList.toggle('body-overflow');\r\n};\r\n\r\n// Действие по click по shadow области\r\nwrapperShadow.addEventListener('click', closePopup);\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshelf/./src/popup/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;