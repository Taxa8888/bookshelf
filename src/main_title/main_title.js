import './main_title.styles.scss';

export const createMainTitle = (text, state) => {
    const title = document.createElement('div');
    title.className = state;
    title.textContent = text;
    return title;
};
