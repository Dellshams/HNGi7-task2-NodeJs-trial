class hngTask{
  constructor(fullName,id,email,language){
    this.fullName = fullName;
    this.id = id;
    this.email = email;
    this.language = language;
  }
  showDetails(){
    return `Hello World, this is ${this.fullName} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task`;
  }
}

let task2 = new hngTask('Adeyemi Adesola','HNG-05272','adeyemisola11@gmail.com','Javascript');
console.log(task2.showDetails());
