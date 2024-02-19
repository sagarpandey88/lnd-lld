//Creational
import Builder from './dp/creational/builder.js';
import Factory from './dp/creational/factory.js';
import Prototype from './dp/creational/prototype.js';
import Singleton from './dp/creational/singleton.js';
//structural
import Adapter from './dp/structural/adapter.js';
import Bridge from './dp/structural/bridge.js';
import Composite from './dp/structural/composite.js';


const dpMapping = {
  Builder: Builder,
  Factory: Factory,
  Prototype: Prototype,
  Singleton: Singleton,
  Adapter:Adapter,
  Bridge:Bridge,
  Composite:Composite
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
