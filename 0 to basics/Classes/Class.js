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
}

module.exports = Hello;

const Lakshman = new Hello("Lakshman",28);
console.log(Lakshman.getInfo());
Lakshman.enrollPerson("Hemanth");
console.log(Lakshman.getPersonList());
console.log(Lakshman.personList);
