// app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WxRoot } from './wx-root/wx-root';
import { FormsModule } from '@angular/forms';
import { NgForOf,NgStyle ,NgClass} from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    WxRoot,
    FormsModule,
    NgForOf,
    NgStyle,
    NgClass,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  AddHero: { name: string; power: number; imageUrl: string }[] = [];

  StylesCard = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '200px',
    textAlign: 'center'
  };

  onHeroAdded(hero: { name: string; power: number; imageUrl: string }) {
    this.AddHero.push(hero);
  }
}
