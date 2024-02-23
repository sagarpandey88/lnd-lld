
// a flyweight pattern tries to store data effienlty by storing ranges or hashing values 

class Sentence
{
  constructor(plainText)
  {
    // todo
    this.plainText= plainText;
    this.wordCount = plainText.length>0 && plainText.split(" ").length;
    this.formattings = [];
  }

  at(index)
  {
    // todo
    const tf = new TextFormating(index);
    this.formattings.push(tf);
    return tf;
    
  }

  toString()
  {
    // todo
    
    let buffer=[];
    const words = this.plainText.split(" ");
    for(let i=0;i<words .length;i++)
        {
            
            let word = words[i];
            for(const fm in  this.formattings)
            {
            
                const tf = this.formattings[fm]
            if(tf.covers(i))
            {
                word = tf.capitalize ? word.toUpperCase() : word;
            }
              
            }
              buffer.push(word);
            
        } 
        
        return buffer.join(" ");
        
  }
}

class TextFormating
{
    constructor(wordIndex)
    {
        this.wordIndex= wordIndex;
        this.capitalize = false; 
    }
    
    covers(wordIndex)
    {
        return wordIndex==this.wordIndex;
    }
    
}




const run = () => {


    let s = new Sentence('alpha beta gamma');
    s.at(1).capitalize = true;    

    return s.toString();
    };
    
    export default run;