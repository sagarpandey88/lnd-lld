/**
 * A singleton class always returns a the same instance. This can be useful incase the same class is called by multiple consumers and all need to use same instance.
 *  A better example is assume there are 3 places on a single page where an api is called from this class ideally only one call should be made and a single response should be sent to all three. In these cases you can return the same promise from these singleton classes.
 */
class Singleton {
  constructor(message) {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }

    this.constructor.instance = this;
    this.message = message;
  }

  toString() {
    return this.message;
  }
}

const run = () => {
  const st1 = new Singleton('Calling the api 1');
  const st2 = new Singleton('Calling the api 2');

  console.log(st1.toString());
  return {output: st1.toString() + st2.toString() , message: "Singleton generates only one object and returns same instance when requested again"} ;
};

export default run;
