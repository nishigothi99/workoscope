function greeting(name) {
  console.log(`Hello `+name+`, welcome to JS Learning!`);
}
function introduction(firstName, lastName, callback) {
  const fullName = `${firstName} ${lastName}`;

  callback(fullName);
}

introduction('Nishi','Gothi', greeting);

