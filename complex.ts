class Complex{
    private real: number;
    private imagine: number;
    
    constructor(real: number, imagine: number){
        this.real = real;
        this.imagine = imagine;   
    }
    add(comp: Complex): Complex{
        return new Complex(this.real + comp.real,this.imagine + comp.imagine);
    }
    subtract(comp: Complex): Complex{
        return new Complex(this.real - comp.real,this.imagine - comp.imagine);
    }
    module(): number{
        return Math.sqrt((Math.pow(this.real,2),Math.pow(this.imagine,2)));
    }
    toString(){
        return "rzeczywista: " + this.real+ "   urojona: " + this.imagine;
    }

}
let com = new Complex(3,2);
let com2 = new Complex(4,5);

let com3 = com.add(com2);
console.log(com3);
let com4 = com3.subtract(com);
console.log(com4);
let com5 = com4.module();
console.log(com5);

