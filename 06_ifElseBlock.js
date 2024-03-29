//voting criteria

function votingCriteria(age, name) {
  if (age >= 18) {
    console.log(`${name} can go for voting!`);
  } else {
    console.log(`${name} can't go for voting!`);
  }
}

votingCriteria(16, "shara");
votingCriteria(17, "vinay");
votingCriteria(22, "Adi");
