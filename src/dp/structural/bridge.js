// You are given an example of an inheritance hierarchy which results in Cartesian-product duplication.

// Please refactor this hierarchy, 
//giving the base class Shape  a constructor that takes a renderer, whose expected interface is:

// class <SomeRenderer>
// {
//   get whatToRenderAs()
//   {
//     // todo
//   }
// }
// There's no need to implement the type above (due to duck typing), but I do want you to implement classes VectorRenderer  and RasterRenderer . Each inheritor of the Shape  class should have a constructor that takes a Renderer  such that, subsequently, each constructed object's toString()  operates correctly, for example,

// new Triangle(new RasterRenderer()) # returns "Drawing Triangle as pixels" 


class Shape
{
  constructor(name,renderer)
  {
    this.name = name;
    this.renderer=renderer;
  }
}


class RasterRenderer
{

    renderTriangle()
    {
        return "Drawing triangle as pixels";
    }

    renderSquare()
    {
        return "Drawing square as pixels";
    }


} 

class VectorRenderer
{
    renderTriangle()
    {
        return "Drawing triangle as lines";
    }

    renderSquare()
    {
        return "Drawing square as lines";
    }
}


class Triangle extends Shape
{
  constructor(renderer)
  {   
    super('triangle',renderer);
  }

  toString()
  {
    return this.renderer.renderTriangle();
  }
  
}

class Square extends Shape
{
    constructor(renderer)
    {   
      super('square',renderer);
    }
  
    toString()
    {
      return this.renderer.renderSquare();
    }
    
}
//
// class VectorSquare extends Square
// {
//   toString()
//   {
//     return `Drawing square as lines`;
//   }
// }
//
// class RasterSquare extends Square
// {
//   toString()
//   {
//     return `Drawing square as pixels`;
//   }
// }

// imagine VectorTriangle and RasterTriangle are here too



const run = () => {


    // build an adapter called SquareToRectangleAdapter
    // s.t. we could call
    //
    let tr = new  Triangle(new RasterRenderer());
    
  
    return `${tr.toString()}`;
  };
  
  export default run;