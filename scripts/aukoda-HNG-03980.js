let msg = '';

const userInfo = {
    name: 'Wahab Giwa',
    hngId:  'HNG-03980',
    language: 'Javascript',
    email: "kodagiwa@gmail.com"
}


const printInfo = ({ name, hngId, language, email }) => {
     msg = `Hello World, this is ${name} with HNGi7 ID ${hngId} and email ${email} using ${language} for stage 2 task`
     return msg;
}

console.log(printInfo(userInfo))