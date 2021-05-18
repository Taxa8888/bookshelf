import './button.styles.scss';

export const buttonCard = (state) => {
    const button = document.createElement('button');
    switch (state) {
        case 'editButton':
            button.className = 'book-button-edit';
            button.textContent = 'Редактировать';
            return button;
        case 'deleteButton':
            button.className = 'book-button-delete';
            button.textContent = 'Удалить';
            return button;
        case 'addButton':
            button.className = 'book-button-add';
            button.textContent = 'Добавить';
            return button;
        case 'saveButton':
            button.className = 'popup-button-save';
            button.textContent = 'Сохранить';
            return button;
        case 'cancelButton':
            button.className = 'popup-button-cancel';
            button.textContent = 'Отменить';
            return button;
    }
};
