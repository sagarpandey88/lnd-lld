// when an object can have a collection of itself. like DOM

class SingleValue
{
  constructor(value)
  {
    this.value = value;
  }
}

class ManyValues extends Array
{
  // Array already has push by default, so no need to define push here
}

let sum = function(containers)
{
  let total = 0;
  for (let container of containers)
  {
    if (container instanceof SingleValue)
    {
      total += container.value;
    }
    else if (container instanceof ManyValues)
    {
      for (let value of container)
      {
        total += value;
      }
    }
  }

  return total;
};


const run = () => {


    let singleValue = new SingleValue(11);
    let otherValues = new ManyValues();
    otherValues.push(22);
    otherValues.push(33);

    
    return `${sum([singleValue,otherValues]).toString()}`;
  };
  
  export default run;