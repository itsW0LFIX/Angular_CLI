// hero.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeroService {

heroes = [
  { id: 1, name: 'Fox', imageUrl: 'https://i.pinimg.com/736x/c0/a4/5e/c0a45e3eb6b3fdbfff0400cc326074ea.jpg', power: 250 },
  { id: 2, name: 'Yara', imageUrl: 'https://i.pinimg.com/736x/f5/0a/9d/f50a9dca64c179fe54f83f6e88292d4c.jpg', power: 90 },
  { id: 3, name: 'Icons', imageUrl: 'https://i.pinimg.com/736x/9c/5d/c5/9c5dc536da152274bd0b12a9f086dbc5.jpg', power: 180 }
];

getHeroes() {
  return this.heroes;
}

}
