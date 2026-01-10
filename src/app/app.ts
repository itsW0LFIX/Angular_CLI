import { Component } from '@angular/core';
import { Boxstable } from './boxstable/boxstable';
import { List } from './list/list';
import { Header } from './header/header';
import { RouterOutlet } from "@angular/router";
import { Welcomepage } from './welcomepage/welcomepage';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Boxstable, List, Header,Welcomepage, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
