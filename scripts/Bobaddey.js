const output = () =>{
    const info ={
        fullName : "Adewusi Bob",
        hngId: "HNG-01900",
        email: "addeybob@gmail.com",
        language: "Javascript",
    }

    return 'Hello World, this is '  + info.fullName  + ' with HNGi7 ID ' + info.hngId  + ' and email '+info.email+' using ' + info.language + ' for stage 2 task';
}

console.log(output());