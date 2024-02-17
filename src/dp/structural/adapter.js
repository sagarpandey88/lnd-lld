

class Square {
  constructor(side) {
    this.side = side;
  }
}

function area(rectangle) {
  return rectangle._width * rectangle._height;
}


class SquareToRectangleAdapter {

  constructor(sq) {
    this._width = sq.side;
    this._height = sq.side;
  }

}



const run = () => {


  // build an adapter called SquareToRectangleAdapter
  // s.t. we could call
  //
  let sq = new Square(10);
  const areaOfSq = area(new SquareToRectangleAdapter(sq));

  return `Area of Square is ${areaOfSq} using an adapter`;
};

export default run;