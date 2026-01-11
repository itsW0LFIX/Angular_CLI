// src/app/hero-store.ts
import { Injectable } from '@angular/core';

export interface Hero {
  name: string;
  power: number;
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class HeroStore {
  heroes: Hero[] = [];
}
