import { createElement } from '../../utils/createElement';
import styles from './character.module.css';

export function createCharacterCard(): HTMLElement {
  return createElement('article', {
    className: styles.card,
    childElements: [
      createElement('img', {
        className: styles.img,
        src: 'https://acnhapi.com/v1/images/bugs/1',
      }),
      createElement('section', {
        className: styles.card__info,
        childElements: [
          createElement('h2', { innerText: 'Kohlweißling' }),
          createElement('h3', { innerText: 'common butterfly' }),
          createElement('div', {
            className: styles.card__availability,
            childElements: [
              createElement('h4', { innerText: 'Availability' }),
              createElement('p', { innerText: 'month-northern: 9-6' }),
              createElement('p', { innerText: 'month-southern: 3-12' }),
            ],
          }),
          createElement('p', { innerText: 'price: 160' }),
          createElement('p', {
            innerText:
              'catch-phrase: I caught a common butterfly! They often flutter by',
          }),
        ],
      }),
    ],
  });
}
