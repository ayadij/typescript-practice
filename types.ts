class Shark {
  name: string = "Moa";
  static motorcycle: string = "SV650"
  saying: string;

  constructor() {
    this.saying = Shark.motorcycle;
  }

  hello(person:string){
    console.log("Hello, " + person)
  } 
}

var aya = new Shark();
aya.saying = "ATGATT";
//console.log(Shark.motorcycle);
aya.hello("David");