import type { AllCharactersFromAPI, Character } from '../types';

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch(`https://acnhapi.com/v1/bugs/`);
  const data: AllCharactersFromAPI = await response.json();
  const characters = Object.values(data);
  const formattedCharacters: Character[] = characters.map((character) => {
    const formattedCharacter: Character = {
      name: character.name['name-USen'],
      northern: character.availability['month-northern'],
      southern: character.availability['month-southern'],
      price: character.price,
      img: character.image_uri,
    };
    return formattedCharacter;
  });

  return formattedCharacters;
}
