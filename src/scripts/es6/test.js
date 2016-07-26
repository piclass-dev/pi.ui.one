
class Animal{
  constructor(){
    console.log("==constructor animal==");
  }
  sayHello(){
    console.log("==sayHello animal==");
  }
}

var a=1;
   
export default Animal;//这个必须，否则require到的模块将会是空Object
//，webpack里导出模块其实是(module.exports = Animal) 