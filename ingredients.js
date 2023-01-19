const ingredients = ["flour", "sugar", "eggs", "milk", "butter", "bananas"];

// While loop
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// For loop
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Reverse loop
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
