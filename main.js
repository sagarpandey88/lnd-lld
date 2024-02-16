import CSB from './dp/creational/builder.js';
import Factory from './dp/creational/factory.js';
import Prototype from './dp/creational/prototype.js';
import Singleton from './dp/creational/singleton.js';

const dpMapping = {
  Builder: CSB,
  Factory: Factory,
  Prototype: Prototype,
  Singleton: Singleton,
};

const printToScreen = (contents) => {
  console.log('I am called');
  document.getElementById('dvContents').innerText = contents;
};
window.onButtonClick = (key) => {
  console.log('i am call with ', key);
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
