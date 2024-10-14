const products = [
    { id: 1, name: "Smartphone", price: "$699", description: "High-end smartphone with a great camera.", reviews: [] },
    { id: 2, name: "Laptop", price: "$999", description: "Powerful laptop for all your computing needs.", reviews: [] },
    { id: 3, name: "Headphones", price: "$199", description: "Noise-canceling headphones with superior sound quality.", reviews: [] }
  ];
  
  window.onload = function () {
    displayProducts();
    populateProductDropdown();
  };