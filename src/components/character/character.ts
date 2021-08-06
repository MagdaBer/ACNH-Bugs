import { createElement } from '../../utils/createElement';

export function createCharacterCard(): HTMLElement {
  return createElement('article', {
    className: 'character-card',
    childElements: [
      createElement('img', {
        className: 'character-card__image',
        src: 'https://acnhapi.com/v1/images/bugs/1',
      }),
      createElement('section', {
        className: 'character-card__info',
        childElements: [
          createElement('h2', { innerText: 'Kohlweißling' }),
          createElement('h3', { innerText: 'common butterfly' }),
          createElement('div', {
            className: 'availability',
            childElements: [
              createElement('h4', { innerText: 'availability' }),
              createElement('p', { innerText: 'month-northern: 9-6' }),
              createElement('p', { innerText: 'month-southern: 3-12' }),
            ],
          }),
          createElement('p', { innerText: 'price: 160' }),
        ],
      }),
    ],
  });
}
