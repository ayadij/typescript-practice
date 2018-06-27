class Motorcycle {
  name: string;
  constructor(name:string){
    this.name = name;
  }
  rev(){
    console.log(this.name + " brap braaap");
  }
}

var gixxer = new Motorcycle("Gixxer");
gixxer.rev();


class SportBike extends Motorcycle {
  rev(){
    console.log(" zoooom");
    super.rev();
  }
}  

var yami = new SportBike("Yami");
yami.rev();



