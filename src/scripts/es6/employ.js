export default class employ{
  constructor(id, name, dob){
    this.id = id;
    this.name=name;
    this.dob= dob;
  }
  getAge(){
    return (new Date()).getYear() - this.dob.getYear();
  }
}

// export function getEmployee(id, name, dob){
//   return new Employee(id, name, dob);
// }

// export function add(a,b){
//   return a+b;
// }

//var emp = new Employee(1, "Rina", new Date(1987, 1, 22));