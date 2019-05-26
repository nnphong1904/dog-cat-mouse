var chalk=require('chalk');

function Cat(name){
    this.name=name;
    this.dead=false;
    this.stomach=[];
}

Cat.prototype.eat=function(mouse){
    this.stomach.push(mouse);
}
Cat.prototype.sayHi=function(){
    console.log('Hi! I am a cat. My name is '+ chalk.blue(this.name))
}
module.exports=Cat;