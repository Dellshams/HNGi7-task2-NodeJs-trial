const output = () => {
  const info = {
    fullName: "Favour Igwe",
    hngId: "HNG-01067",
    email: "favchiazokam@gmail.com",
    language: "Javascript",
  };
  return (
    "Hello World, this is " +
    info.fullName +
    " with HNGi7 ID " +
    info.hngId +
    " and email " +
    info.email +
    " using " +
    info.language +
    " for stage 2 task"
  );
};

console.log(output());
