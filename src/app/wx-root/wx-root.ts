// wx-root.ts
import { NgClass, NgForOf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wx-root',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgStyle,
    NgClass,
  ],
  templateUrl: './wx-root.html',
  styleUrl: './wx-root.css',
})


export class WxRoot {

titelwx = 'wolfix';
Hero = { 
  name: '',
  power: '',
  imageUrl: ''
};

inputName='';
inputPower='';
inputImageUrl='';

AddHero: { name: string; power: string; imageUrl: string }[] = [];

StylesCard = {}

addHero() {
  // hard stop if ANY input is empty
  if (!this.inputName || !this.inputPower || !this.inputImageUrl) {
    return;
  }

  this.AddHero.push({
    name: this.inputName,
    power: this.inputPower,
    imageUrl: this.inputImageUrl
  });

  this.StylesCard = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '200px',
    textAlign: 'center'
  };

  // reset inputs
  this.inputName = '';
  this.inputPower = '';
  this.inputImageUrl = '';
}





  










}


