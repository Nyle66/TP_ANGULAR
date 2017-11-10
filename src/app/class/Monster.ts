export class Monster{

    public id: number;
    public name: string;
    public pv: number;
    public img: string;

    constructor(id: number, name: string, pv: number, img: string){
        this.id = id;
        this.name = name;
        this.pv = pv;
        this.img = img;
    }
    
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }

    getPv(){
        return this.pv;
    }

    getImg(){
        return this.img;
    }

}