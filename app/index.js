const couponcode = "jhghs";
const couponcodeInput = "jhghs";

if (couponcode === couponcodeInput) {
  console.log("total - 70 ");
} else {
  console.log("No discount !");
}

console.log("msg");
const customer = {
  firstname: "Kan",
  lastName: "Led",
  id: 3,
  phoneNumber: "0740000000",
  email: "gmail@gmail.co.uk",
};

// I got confused as I had console log above and below each object containing variables

customer.address = {
  street: "NoahArk",
  city: "London",
  state: "Essex",
  zipCode: "Rm10 8xa",
};

console.log("Welcome, Kan Led!");

const productInformation = {
  name: "Kan",
  price: 10,
  description: "adaptable",
  quantity: 70,
};
console.log(productInformation.quantity);

let quantity = 1000;

const total = productInformation.price * 7;

productInformation.quantity -= 7;

if (total >= 500) {
  console.log("You get free extra product");
}

// this is implicit coercion
if (productInformation.quantity) {
  console.log("We have stock");
} else {
  console.log("We do not have it");
}

// any non-empty string is truthy

const someInputFromAForm = "Mark";

const name = someInputFromAForm || "Anonymous";

console.log(someInputFromAForm);

// Practicing ternaries

const moneyIhave = 75;
const haveSavings = false;

const msg =
  moneyIhave > 100 || haveSavings
    ? console.log("Yay! Ice cream!")
    : console.log("Ugh! Lima beans!");

console.log("msg");

// here msg is the variable

// Switch
const choice = "Lasagne";

switch (choice) {
  case "Jollof":
    console.log("Jollof rice!");
    break;
  case "Lasagne":
    console.log("Italian food!");
    break;
  case "Pulled beef":
    console.log("Pulled beef wrap!");
    break;
  default:
    console.log("We don't have that food.");
}
