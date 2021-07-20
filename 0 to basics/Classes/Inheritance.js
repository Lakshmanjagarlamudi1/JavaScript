class Hello {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    #personList = [];
    getInfo(){
        return {name : this.name,age : this.age};
    }
    enrollPerson(name){
        this.#personList.push(name);
    }
    getPersonList(){
        return this.#personList;
    }
    login(){
        return 'You are Admin1';
        
    }
}

class Hello2 extends Hello{
    constructor(name, age){
        super(name,age);
    }
    getHelloInfo(){
        return `I'am Sub Admin`
    }
    login(){
        return 'You are Admin2';
        super.login()
    }

}
// const Lakshman = new Hello("Lakshman",28);
// console.log(Lakshman.getInfo());

Hemanth = new Hello2("Hemanth", 26);
console.log(Hemanth.getHelloInfo());
console.log(Hemanth.login());
// console.log(Lakshman.login());
console.log(Hemanth.getInfo());