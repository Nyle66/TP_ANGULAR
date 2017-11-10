import { Component, Output, Input } from '@angular/core';
import { Monster } from './class/Monster';

@Component({
  selector: 'app-dammage',
  template: `
  <div class='center'>{{dammage}}</div>
  `,
  styles:[
    `.center {text-align: center; font-size: 2.5em; font-family: arial}`
],
})
export class DammageComponent {
  public monster: Monster;

  @Input() public dammage: number = 0;
}