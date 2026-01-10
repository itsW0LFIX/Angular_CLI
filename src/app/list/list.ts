import { Component } from '@angular/core';
import { NgForOf, NgStyle, NgClass } from '@angular/common';
import { HeroStore } from '../hero-store';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgForOf, NgStyle, NgClass],
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})
export class List {

  constructor(public store: HeroStore) {}

  StylesCard = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '200px',
    textAlign: 'center'
  };
}
