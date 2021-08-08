import './style.css';
import { createElement } from './utils/createElement';
import type { Character } from './types';
import { createCharacterCard } from './components/character/character';
import { getCharacters } from './utils/api';

const characters: Character[] = await getCharacters();

const characterContainer = createElement('div', {
  className: 'characterContainer',
  childElements: characters.map((character) => createCharacterCard(character)),
});

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: 'Animal Crossing: New Horizon',
    }),
    createElement('input', {
      placeholder: 'Search for your favourite bug...',
    }),
    characterContainer,
  ],
});

document.querySelector<HTMLDivElement>('#app')?.append(mainElement);
