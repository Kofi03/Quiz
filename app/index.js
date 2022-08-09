const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
  },
  {
    id: 2,
    name: "Product 2",
    price: 50,
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
  },
];

const [, ...last2Products] = products;

last2Products.push({
  id: 4,
  name: "Product 4",
  price: 40,
});

console.log(products, last2Products);

last2Products[0].name = "Product 2 updated";

// why did the product 2 update to 'product 2 updated'

// throwing the objects in the, a mutation was performed and it has updated it. this is why we avoid mutations and use the SPREAD OPERATOR for correct it.

// jUST BECAUSE YOU USED THE REST OPERATOR DOES NOT MEAN YOU ARE SAFE FORM MUTATIONS

// LOOP: perfroming the same action across an array

// MAP : runs a function over and over again on each element.
// we use MAP because we avoid mutations and not FOR LOOPS
const productNames = products.map((product) => {
  console.log("current product in map", product);
  return product.name;
});

const productPrices = products.map((product) => {
  if (product.price <= 20) {
    product.price *= 100;
    return product;
  }
});

console.log(productPrices);
// we are only looking at one individual item in the array at a time and then go to the next one and grab the next one. ebeyrtime we return it puts it into a new array.
// all of our products and the inddividual products
console.log(productNames);

// you can have an empty array and manual fill them in.
// but you can also use for loop
// but you can use MAP to make it all automated , the MAP mimics FOR LOOP but it is a condensed way of doing it but with a few changs

const nums = [1, 4, 9, 16];
const doubled = [];

doubled[0] = nums[0] * 2; // etc, the rest of the infO is on SLACK

// MAPS does this but all in one go
