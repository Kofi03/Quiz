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

const productInformation = {
  name: "",
  price: 10,
  description: "",
  quantity: 20,
};

const total = productInformation.price * 7;

if (total >= 500) {
  console.log("You get free extra product");
}

// this is implicit coercion
if (productInformation.quantity) {
  console.log("We have stock");
} else {
  console.log("We do not have it");
}
