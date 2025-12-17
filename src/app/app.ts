// app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WxRoot } from './wx-root/wx-root';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WxRoot],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // title = 'welcome to my world !!!';
}
