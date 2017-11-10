import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable() // ce service pourra s'injecter dans un constructeur
export class MonsterService{

    private url: string = 'http://localhost:8888/angular/hero/fakeapi_TP.php';

    constructor(private http: Http){

    }

    getAllMonster(): Promise<any>{
        
        return this.http.get(this.url)
            .toPromise();
        
    }

}