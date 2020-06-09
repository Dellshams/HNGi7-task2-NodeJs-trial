const name = "Ayodele Emmanuel";
const ID = "HNG-05860";
const language = "JavaScript";
const email = "codedemystifier@gmail.com";

const displayInternInfo = (internName,internID,languageUsed,internEmail) => {
    return `Hello World, this is ${internName} with HNGi7 ID ${internID} and email ${internEmail} using ${languageUsed} for stage 2 task`;
};

console.log(displayInternInfo(name,ID,language,email));