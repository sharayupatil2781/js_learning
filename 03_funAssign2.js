function bankDetails(bankName, accountNum, location, pinCode) {
  console.log(
    `Bank name is ${bankName} located at ${location} ,${pinCode} and account num is ${accountNum}.`
  );
}

bankDetails("CITI Bank", 23344544, "Pune", 123456);
bankDetails("Axis Bank", 23344544, "Mumbai", 123456);
bankDetails("HDFC Bank", 23344544, "Nasik", 123456);
