/**
 * You are given a class called Person . The person has two fields: id , and name .

Please implement a  PersonFactory that has a non-static  createPerson()  method that takes a person's name and returns a person initialized with this name and an id.

The id of the person should be set as a 0-based index of the object any instance of PersonFactory has created. So, the first person any factory makes should have Id=0, second Id=1 and so on.
 * 
 */

class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  toString() {
    return `${this.id}:${this.name}`;
  }
}

class PersonFactory {
  constructor() {
    this.idx = 0;
  }
  createPerson(name) {
    // todo
    return new Person(this.idx++, name);
  }
}

const run = () => {
  const pf = new PersonFactory();
  const p1 = pf.createPerson('Dave');
  const p2 = pf.createPerson('David');

  return p1.toString() + ' ' + p2.toString();
};

export default run;
