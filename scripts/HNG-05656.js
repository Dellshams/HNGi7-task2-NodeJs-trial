function taskTwo(name,intershipID,email){
    this.name = name;
    this.intershipID = intershipID;
    this.email = email;
    
    this.detail = function(){
        return "Hello World, this is " + this.name + " with HNGi7 ID " + this.intershipID + " and email " + this.email + " using Javascript for stage 2 task"
    }
}

var task = new taskTwo ("Abdulrauf Abiodun","HNG-05656","adebayoabdulrauf1@gmail.com");


console.log(task.detail());