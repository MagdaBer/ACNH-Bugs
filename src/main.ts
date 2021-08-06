import './style.css';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: 'Animal Crossing: New Horizon',
    }),
    createElement('input', {
      placeholder: 'Find your favorite bug',
    }),
    createElement('div', {
      className: 'characterContainer',
      childElements: [createCharacterCard()],
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
