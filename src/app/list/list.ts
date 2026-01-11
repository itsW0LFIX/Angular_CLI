import { Component, OnInit } from '@angular/core';
import { NgForOf, NgStyle, NgClass,NgFor } from '@angular/common';
import { HeroStore } from '../hero-store';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgForOf, NgStyle, NgClass],
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})
export class List {


    heroes: any[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
    console.log(this.heroes);
  }
  // constructor(public store: HeroStore) {}

  StylesCard = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '200px',
    textAlign: 'center'
  };
}
// export class ListComponent implements OnInit {


// }
