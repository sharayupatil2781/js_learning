function swap(arg1, arg2) {
  console.log("Values before swap.....");
  console.log(arg1, arg2);

  let temp = arg1;
  arg1 = arg2;
  arg2 = temp;

  console.log("Values after swap.....");
  console.log(arg1, arg2);
}

swap("pune", "Mumbai");
swap(11, 22);
