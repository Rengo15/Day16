class Person{

    static display(){
        let message = "Static method is invoke from Person class";
        return message;
    }

    show(){
        console.log(Person.display());
    }
}
// only change code below this line

// Only change code above this line

var message = new Person();
message.show();
module.exports = Person;