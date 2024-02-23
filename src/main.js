//Creational
import Builder from './dp/creational/builder.js';
import Factory from './dp/creational/factory.js';
import Prototype from './dp/creational/prototype.js';
import Singleton from './dp/creational/singleton.js';
//structural
import Adapter from './dp/structural/adapter.js';
import Bridge from './dp/structural/bridge.js';
import Composite from './dp/structural/composite.js';
import Decorator from './dp/structural/decorator.js';

import Facade from './dp/structural/facade.js';
import Flyweight from './dp/structural/flyweight.js';

const dpMapping = {
  Builder: Builder,
  Factory: Factory,
  Prototype: Prototype,
  Singleton: Singleton,
  Adapter:Adapter,
  Bridge:Bridge,
  Composite:Composite,
  Decorator:Decorator,
  Facade:Facade,
  Flyweight: Flyweight
};


const printToScreen = (contents) => {
  document.getElementById('dvContents').innerText = contents;
};
window.onButtonClick = (key) => { 
  printToScreen(dpMapping[key]());
};

const addButtons = () => {
  let buttons = '';

  for (var key of Object.keys(dpMapping)) {
    buttons += `<button onClick='javascript:onButtonClick("${key}")' > ${key} </button>`;
  }
  console.log(buttons);
  document.getElementById('dvButtons').innerHTML = buttons;
};

addButtons();
