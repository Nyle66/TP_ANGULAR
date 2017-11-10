import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gold',
  template: `
    <div class='center'>{{gold}}</div>
  `,
  styles:[
    `.center {text-align: center; font-size: 2.5em; font-family: arial}`
],
})
export class GoldComponent {

  @Input() public gold: number = 0;

}