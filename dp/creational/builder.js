/**
 * 
 * You are asked to implement the Builder design pattern for rendering simple chunks of code.

Sample use of the builder you are asked to create:

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());
The expected output of the above code is:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
Please observe the same placement of spaces and indentation
 * 
 */

class CodeBuilder {
  constructor(className) {
    this.className = className;
    this.fields = [];
  }
  addField(name) {
    // todo
    // reminder: we want a fluent interface
    this.fields.push(name);
    return this;
  }

  toString() {
    // todo
    const nextLine = '\n';
    const indent = `   `;
    const code = [];
    code.push(`class ${this.className} { ${nextLine}`);
    code.push(` ${indent} constructor(${this.fields.join(',')}) { ${nextLine}`);
    this.fields.forEach((fld) => {
      code.push(`  this.${fld} = ${fld}; ${nextLine}`);
    });
    code.push(`}`);

    return code.join('');
  }
}

const run = () => {
  const cb = new CodeBuilder('Person');
  cb.addField('name').addField('age');
  console.log(cb.toString());
  return cb.toString();
};

export default run;
