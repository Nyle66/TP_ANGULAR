import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { MonsterService } from './service/monster.service';
import { Monster } from './class/Monster';

@Component({
  selector: 'app-monster',
  template: `
    <div id='bete' *ngIf='monster'>
    <div class='center' id='timer'> Temps restant : {{second}}s</div>
    <h5 class='center'> {{ monster.name }} </h5><br>
    <div class='center'><img class='papi' src='{{ monster.img }}' (click)='attack()' (click)='parentAddGold()' (load)="imgload()" /></div><br><br>
    <div id="health" class='center'> {{ monster.pv }}HP </div>
    <div class='center' id='display'><img src="{{pika}}" id="pika" /><h6>{{name}} est dans la place</h6></div></div>
  `,
  styles:[
    `.papi {width: 200px; height: auto}`,
    `#bete {margin: 20px; font-family: arial}`,
    `.center {text-align: center; font-size: 1.5em}`,
    `#pika {width: 80px; height: 80px}`,
    `#display {display: none; margin-top: 50px}`,
    `h6 {margin: 0px; font-style: italic}`,
    `#timer {font-size: 1.1em; margin-top: 50px; color: green; background-color: black; border-radius: 10px}`
],
  providers: [MonsterService]
})
export class MonsterComponent implements OnInit{
    ngOnInit(): void {
        setInterval(() => {
            this.final += 1;
            if(this.id > 10){
                alert('Bravo ! Vous avez terminé le jeu en ' + this.final + ' secondes !');
                window.location.reload();
            }

            this.autoAttack();
            this.second -= 1;
            
            if(this.second < 10){
                document.getElementById('timer').style.color = 'orange';
            }
            if(this.second < 5){
                document.getElementById('timer').style.color = 'red';
            }
            if(this.second == 0){
                alert('GAME OVER');
                window.location.reload();
            }
        }, 1000);
    }
  
    public monsters: Monster[] = [];
    public monster: Monster;
    public id: number = 0;
    public monsterIsLoading = false;
    public pika: string = 'assets/img/Pikachu.png';
    public name: string = 'Pikachu';

    public second: number = 20;
    public final: number = 0;
    
    @Input() public click: number;
    @Input() public validP: boolean;
    @Input() public validE: boolean;
    @Input() public dammage: number;

    
        constructor(private service: MonsterService){
           this.getMonster();
        }

        imgload(){
            this.monsterIsLoading = false;
        }

        getMonster(){
            this.service.getAllMonster().then((data)=>{
                for(const dmonster of data.json()){
                     this.monsters.push( new Monster(dmonster.id, dmonster.name, dmonster.pv, dmonster.img) );
                }
                this.monster = this.monsters[0];
            });
        }

        attack(){

            if( this.monsterIsLoading ){
                return;
            }
            if(this.monster.pv <= 0){
                this.monster.pv = 0;
                this.second = 20;
                this.id ++;
                this.monster = this.monsters[this.id];
                this.monsterIsLoading = true;
            }
            if(this.click == 5){
                this.monster.pv -= 5;
            }
            if(this.click == 10){
                this.monster.pv -= 10;
            }
            else{
                this.monster.pv -= 1;
            }
            
        }

        autoAttack(){
            if(this.validP == true){
                document.getElementById('display').style.display = 'block';
                this.monster.pv -= 5;
                if(this.monster.pv <= 0){
                    this.monster.pv = 0;
                    this.id ++;
                    this.monster = this.monsters[this.id];
                }
                if(this.validE == true){
                    this.monster.pv -= 5;
                }
            }
            if(this.validE == true){
                this.pika = 'assets/img/Raichu.png';
                this.name = 'Raichu';
            }
            else{
                this.monster.pv -= 0;
            }
        }

        @Output()
        public event: EventEmitter<number> = new EventEmitter<number>();
    
        parentAddGold(){
            this.event.emit();
        }

}