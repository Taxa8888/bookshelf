import './card.styles.scss';

export const createBookCard = (id) => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.dataset.number = id;
    return bookCard;
};
