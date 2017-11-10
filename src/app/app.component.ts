import { Component } from '@angular/core';
import { MonsterService } from './service/monster.service';
import { Item } from './class/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public gold: number = 4000;
  public dammage: number = 0;
  public click: number = 1;
  public text: string = '';

  public validGold: boolean = false;
  public validDammage: boolean = false;
  public validGold2: boolean = false;
  public validDammage2: boolean = false;
  public validP: boolean = false;
  public validE: boolean = false;

  public item1: Item;
  public item2: Item;
  public item3: Item;
  public item4: Item;
  public item5: Item;
  public item6: Item;


  addGold(){
    if(this.validGold == true && this.validGold2 == false){
      this.gold += 10;
    }
    if(this.validGold2 == true){
      this.validGold = false;
      this.gold += 20;
    }
    else{
      this.gold += 5;
    }
  }
  addDammage(){
    if(this.validDammage == true && this.validDammage2 == false){
      this.dammage += 4;
      this.click = 5;
    }
    if(this.validDammage2 == true){
      this.validDammage = false;
      this.dammage += 6;
      this.click = 10;
    }
    else{
      this.dammage += 2;
    }
  }

  itemBuy(){
    if(this.gold >= 50){
        this.item1 = new Item(1, 'SUPER-DAMMAGE');
    }
    if(this.gold >= 150){
        this.item2 = new Item(2, 'SUPER-GOLD');
    }
    if(this.gold >= 400){
      this.item3 = new Item(3, 'ULTRA-DAMMAGE');
    }
    if(this.gold >= 800){
      this.item4 = new Item(4, 'ULTRA-GOLD');
    }
    if(this.gold >= 1500){
      this.item5 = new Item(5, 'COMPAGNON');
    }
    if(this.gold >= 3000){
      this.item6 = new Item(6, 'Pierre Foudre');
    }
  }
  validG(){
    if(this.gold >= 60){
      this.gold -= 60;
      this.validGold = true;
      document.getElementById('i2').style.display = "none";
      this.text = "";
    }
    else{
      this.text = "Pas assez de Gold !";
    }
  }
  validD(){
    if(this.gold >= 30){
      this.gold -= 30;
      this.validDammage = true;
      document.getElementById('i1').style.display = "none";
      this.text = "";
    }
    else{
      this.text = "Pas assez de Gold !";
    }
  }
  validD2(){
    if(this.gold >= 400){
      this.gold -= 400;
      this.validDammage2 = true;
      document.getElementById('i3').style.display = "none";
      this.text = "";
    }
    else{
      this.text = "Pas assez de Gold !";
    }
  }
  validG2(){
    if(this.gold >= 800){
      this.gold -= 800;
      this.validGold2 = true;
      document.getElementById('i4').style.display = "none";
      this.text = "";
    }
    else{
      this.text = "Pas assez de Gold !";
    }
  }
  validPoke(){
    if(this.gold >= 1500){
      this.gold -= 1500;
      this.validP = true;
      document.getElementById('i5').style.display = "none";
      this.text = "";
    }
    else{
      this.text = "Pas assez de Gold !";
    }
  }
  validEvo(){
    if(this.gold >= 3000){
      this.gold -= 3000;
      this.validE = true;
      document.getElementById('i6').style.display = "none";
      this.text = "";
    }
    else{
      this.text = "Pas assez de Gold !";
    }
  }
}
