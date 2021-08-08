import { Character } from '../../types';
import { createElement } from '../../utils/createElement';
import styles from './character.module.css';

export function createCharacterCard({
  img,
  name,
  northern,
  southern,
  price,
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
          createElement('div', {
            className: styles.card__availability,
            childElements: [
              createElement('h4', { innerText: 'Availability' }),
              createElement('p', {
                innerText: 'month-northern:' + ' ' + northern,
              }),
              createElement('p', {
                innerText: 'month-southern:' + ' ' + southern,
              }),
            ],
          }),
          createElement('p', { innerText: `price: ${price}` }),
        ],
      }),
    ],
  });
}
