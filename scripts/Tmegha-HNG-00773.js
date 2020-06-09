const introduction = ({name, id, email, language}) =>{ 
    return `Hello World, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task`
   }
   const myIntroduction = introduction({
    name: 'Akinmegha Temitope',
    id:  'HNG-00773',
    email: 'temitopeakinmegha@gmail.com',
    language: 'JavaScript',
   });
   console.log(myIntroduction);
