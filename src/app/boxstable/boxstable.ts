import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroStore } from '../hero-store';

@Component({
  selector: 'app-boxstable',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './boxstable.html',
  styleUrls: ['./boxstable.css'],
})
export class Boxstable {

  constructor(private store: HeroStore) {}

  inputName = '';
  inputPower = 0;
  inputImageUrl = '';

  addHero() {
    if (!this.inputName || !this.inputImageUrl) return;

    this.store.heroes.push({
      name: this.inputName,
      power: this.inputPower,
      imageUrl: this.inputImageUrl
    });

    this.inputName = '';
    this.inputPower = 0;
    this.inputImageUrl = '';
  }
}
