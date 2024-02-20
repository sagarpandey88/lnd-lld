//wraps around the class to provide additonal functionality.


class Creature
{
    constructor(age=0){
        this.age = age;
    }
}

class Bird
{
  constructor(age=0)
  {
    this.age = age;
  }

  fly()
  {
    return this.age < 10 ? 'flying' : 'too old';
  }
}

class Lizard
{
  constructor(age=0)
  {
    this.age = age;
  }

  crawl()
  {
    return this.age > 1 ? 'crawling' : 'too young';
  }
}

class Dragon
{
  constructor(age=0)
  {
    // todo
    this.Bird = new Bird(age);
    this.Lizard = new Lizard(age);
  }

  // todo: API members

  crawl(){
    return this.Lizard.crawl();
  }

  fly(){
    return this.Bird.fly();
  }

}