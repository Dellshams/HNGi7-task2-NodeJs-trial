const name = 'Egbedokun Olayinka';
const id = 'HNG-03596';
const language = 'Javascript';
const email = 'egbedokunolayinka@gmail.com';

const output = function(num) {
    if(num % 2 === 0) {
        return `Hello World, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task`;
    } else {
        return null;
    }  
}

console.log(output(66));

