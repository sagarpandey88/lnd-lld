class Generator
{
  generate(count)
  {
    let result = [];
    for (let i = 0; i < count; ++i)
      result.push(Math.floor((Math.random() * 6) + 1));
    return result;
  }
}

class Splitter
{
  split(array)
  {
    let result = [];

    let rowCount = array.length;
    let colCount = array[0].length;

    // get the rows
    for (let r = 0; r < rowCount; ++r)
    {
      let theRow = [];
      for (let c = 0; c < colCount; ++c)
        theRow.push(array[r][c]);
      result.push(theRow);
    }

    // get the columns
    for (let c = 0; c < colCount; ++c)
    {
      let theCol = [];
      for (let r = 0; r < rowCount; ++r)
        theCol.push(array[r][c]);
      result.push(theCol);
    }

    // now the diagonals
    let diag1 = [];
    let diag2 = [];
    for (let c = 0; c < colCount; ++c)
    {
      for (let r = 0; r < rowCount; ++r)
      {
        if (c === r)
          diag1.push(array[r][c]);
        let r2 = rowCount - r - 1;
        if (c === r2)
          diag2.push(array[r][c]);
      }
    }

    result.push(diag1);
    result.push(diag2);

    return result;
  }
}

class Verifier
{
  verify(array)
  {
    if (array.length < 1) return false;
    let adder = function(p, c)
    {
      return p + c;
    };
    let expected = array[0].reduce(adder);
    let ok = true;
    array.forEach(function (subarray) {
      if (subarray.reduce(adder) !== expected) {
        ok = false;
      }
    });
    return ok;
  }
}

class MagicSquareGenerator {
    constructor() {
      // create instances of the subsystem classes
      this.generator = new Generator();
      this.splitter = new Splitter();
      this.verifier = new Verifier();
    }
  
    generate(size) {
      // generate a 1D list of random digits
      let list = this.generator.generate(size * size);
  
      // convert the 1D list into a 2D matrix
      let matrix = [];
      for (let i = 0; i < size; i++) {
        matrix[i] = list.slice(i * size, (i + 1) * size);
      }
  
      // check if the matrix is a magic square
      let result = this.verifier.verify(this.splitter.split(matrix));
  
      // if not, try again until a magic square is found
      while (!result) {
        list = this.generator.generate(size * size);
        for (let i = 0; i < size; i++) {
          matrix[i] = list.slice(i * size, (i + 1) * size);
        }
        result = this.verifier.verify(this.splitter.split(matrix));
      }
  
      // return the magic square
      return matrix;
    }
  }


const run = () => {


    const msg = new MagicSquareGenerator(3);
    
      const ms = msg.generate(3);

      let matrix = "";
      ms.map(val =>{
        matrix+= val.join(",") + '\n'
      })

      return `Generating Square \n ${matrix}`;
    };
    
    export default run;