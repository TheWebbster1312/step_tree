let Bubbles = {
    createBubble: function(name){
      this.bubbles.push(new Bubble(name))  
    },
    bubbles: [],
    listBubbles: function(){
        for(let bubble of this.bubbles){
            console.log(bubble);
        }
    },
    getChildren: function(){
        return(this.bubbles)
    }    
}

class Bubble{
    constructor(name){
        this.name = name
        this.colour = "#e03134"
        this.description = "noDescription"
    }
}