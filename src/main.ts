import './style.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: 'Animal Crossing: New Horizon',
    }),
    createElement('input', {
      placeholder: 'Find your favorite bug',
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
