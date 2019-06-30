const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  // Object 안에 Array 넣기 가능
  favMovies: ["Along the Gods", "LOTR", "Oldboy"],
  // Array 안에 Object 넣기 가능
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "Cheese burger", fatty: true }
  ]
};
console.log(nicoInfo.favFood[0].fatty);
