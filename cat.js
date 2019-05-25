function cat(name){

    this.name=name;
    this.dead=false;
    this.stomach=[];
}

cat.prototype.eat(mouse)=function(){
    this.stomach.push(mouse);
}

module.export=cat;