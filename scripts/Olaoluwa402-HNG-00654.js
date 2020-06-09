function generateData(fullName,HNGi7ID,lang,email){
	
	return `Hello World, this is ${fullName} with HNGi7 ID ${HNGi7ID} and email ${email} using ${lang} for stage 2 task`;
}


const fullName ='Olaoluwa Ibukun';
const HNGi7ID ='HNG-00654';
const lang ='JavaScript';
const email='ibukundaniel402@yahoo.co.uk';


const result = generateData(fullName,HNGi7ID, lang,email);

console.log(result);