import { NgClass, NgForOf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wx-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wx-root.html',
  styleUrl: './wx-root.css',
})

export class WxRoot {

  @Output() heroAdded = new EventEmitter<{
    name: string;
    power: number;
    imageUrl: string;
  }>();

  inputName = '';
  inputPower = 0;
  inputImageUrl = '';

  addHero() {
    if (!this.inputName || !this.inputPower || !this.inputImageUrl) {
      return;
    }


    this.heroAdded.emit({
      name: this.inputName,
      power: this.inputPower,
      imageUrl: this.inputImageUrl
    });

    this.inputName = '';
    this.inputPower = 0;
    this.inputImageUrl = '';
  }
}