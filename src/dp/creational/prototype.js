/**
 * Prototype: It is generally to clone of the object where object creation is complex and consume compute so cloning an existing object make it efficient.
 */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Point(this.x, this.y);
  }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  deepCopy() {
    //return new Line(this.start.clone(), this.end.clone());
    let s = new Serializer([Point, Line]);
    return s.clone(this);
  }
}

class Serializer {
  constructor(types) {
    this.types = types;
  }

  /**
   * Marks object with type information recursively.
   */
  markRecursive(obj) {
    const idx = this.types.findIndex((t) => t.name === obj.constructor.name);

    // if complex object is found
    if (idx != -1) {
      obj['typeIndex'] = idx;

      for (let key in obj) {
        this.markRecursive(obj[key]);
      }
    }
    return obj;
  }

  reconstructRecursive(obj) {
    if (obj.hasOwnProperty('typeIndex')) {
      let type = this.types[obj['typeIndex']];
      let newObj = new type();

      for (let key in obj) {
        if (obj[key] != null) {
          newObj[key] = this.reconstructRecursive(obj[key]);
        }
      }

      delete obj.typeIndex;
      return obj;
    }
    return obj;
  }

  clone(obj) {
    this.markRecursive(obj);
    let copy = JSON.parse(JSON.stringify(obj));
    return this.reconstructRecursive(copy);
  }
}

const run = () => {
  const ln = new Line(new Point(1, 2), new Point(3, 4));
  const copiedObj = ln.deepCopy();

  return {output: JSON.stringify(copiedObj) , message: "Prototype design pattern" } ;
};

export default run;
