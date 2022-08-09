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

console.log(products);

// why did the product 2 update to 'product 2 updated'

// throwing the objects in the, a mutation was performed and it has updated it. this is why we avoid mutations and use the SPREAD OPERATOR for correct it.

// jUST BECAUSE YOU USED THE REST OPERATOR DOES NOT MEAN YOU ARE SAFE FORM MUTATIONS
