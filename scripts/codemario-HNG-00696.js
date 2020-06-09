const fullName = "Umeh Victor";
const internshipId = "HNG-00696";
const email = "umehvictormario@gmail.com";
const language = "Javascript";

let aboutMe = () => {
  return `Hello World, this is ${fullName} with HNGi7 ID ${internshipId} and email ${email} using ${language} for stage 2 task`;
};

let outputMessage = aboutMe();
console.log(outputMessage);
