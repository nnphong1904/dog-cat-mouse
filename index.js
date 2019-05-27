var Cat=require('./Cat');
var Mouse=require('./mouse');
var Tom= new Cat('Tom');
var Jerry=new Mouse('Jerry');
Tom.eat(Jerry);

console.log(Tom);