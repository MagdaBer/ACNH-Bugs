import { Character } from '../../types';
import { createElement } from '../../utils/createElement';
import styles from './character.module.css';
import { types } from '../../types';

export function createCharacterCard({
  img,
  name,
  nameUS,
  northern,
  southern,
  price,
  phrase,
}: Character): HTMLElement {
  return createElement('article', {
    className: styles.card,
    childElements: [
      createElement('img', {
        className: styles.img,
        src: img,
      }),
      createElement('section', {
        className: styles.card__info,
        childElements: [
          createElement('h2', { innerText: name }),
          createElement('h3', { innerText: nameUS }),
          createElement('div', {
            className: styles.card__availability,
            childElements: [
              createElement('h4', { innerText: 'Availability' }),
              createElement('p', { innerText: northern }),
              createElement('p', { innerText: southern }),
            ],
          }),
          createElement('p', { innerText: `price: ${price}` }),
          createElement('p', {
            innerText: phrase,
          }),
        ],
      }),
    ],
  });
}
