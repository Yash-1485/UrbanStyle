let cartQuantity = localStorage.getItem("quantity");
let cartTotal = localStorage.getItem("total");
let cartItems = JSON.parse(localStorage.getItem("cartItems"));

let listCard = document.getElementById("checkout-cart-cards");
let total = document.getElementById("total");
let quantity = document.getElementById("quantity");

let products = [
  // Men Footwear - 1
  {
    id: 1,
    name: "Adidas Oxo Sports",
    type: "Shoes",
    subtype: "Sports Shoes",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
              <br><strong>Date First Available : </strong>   18 July 2020
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
              <br><strong>Net Quantity :</strong> 2 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["6UK", "7UK", "8UK", "9UK", "10UK"],
    price: 1299,
    old_price: 1599,
    image: "assets/images/Footwear/Sport_Shoes/img3.png",
    feedback: 5,
    category: "men",
  },
  {
    id: 2,
    name: "Adidas Hex Sports",
    type: "Shoes",
    subtype: "Sports Shoes",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
              <br><strong>Date First Available : </strong>   18 July 2020
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
              <br><strong>Net Quantity :</strong> 2 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["6UK", "7UK", "8UK", "9UK", "10UK"],
    price: 999,
    old_price: 1099,
    image: "assets/images/Footwear/Sport_Shoes/img4.png",
    feedback: 4,
    category: "men",
  },
  {
    id: 3,
    name: "Skechers Free Style",
    type: "Shoes",
    subtype: "Sports Shoes",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
              <br><strong>Date First Available : </strong>   18 July 2020
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
              <br><strong>Net Quantity :</strong> 2 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["6UK", "7UK", "8UK", "9UK", "10UK"],
    price: 899,
    old_price: 1099,
    image: "assets/images/Footwear/Sport_Shoes/img1.png",
    feedback: 4,
    category: "men",
  },
  {
    id: 4,
    name: "Power Evo Shoes",
    type: "Shoes",
    subtype: "Sports Shoes",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
              <br><strong>Date First Available : </strong>   18 July 2020
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
              <br><strong>Net Quantity :</strong> 2 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["6UK", "7UK", "8UK", "9UK", "10UK"],
    price: 1399,
    old_price: 1799,
    image: "assets/images/Footwear/Sport_Shoes/img6.png",
    feedback: 5,
    category: "men",
  },
  {
    id: 5,
    name: "Nike Sneakers",
    type: "Shoes",
    subtype: "Sneakers",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
              <br><strong>Date First Available : </strong>   18 July 2020
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
              <br><strong>Net Quantity :</strong> 2 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["6UK", "7UK", "8UK", "9UK", "10UK"],
    price: 2999,
    old_price: 3599,
    image: "assets/images/Footwear/Sneakers_Shoes/img8.png",
    feedback: 5,
    category: "men",
  },
  {
    id: 6,
    name: "Adidas Wooden Sneakers",
    type: "Shoes",
    subtype: "Sneakers",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
              <br><strong>Date First Available : </strong>   18 July 2020
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
              <br><strong>Net Quantity :</strong> 2 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["6UK", "7UK", "8UK", "9UK", "10UK"],
    price: 2199,
    old_price: 3099,
    image: "assets/images/Footwear/Sneakers_Shoes/img1.png",
    feedback: 4,
    category: "men",
  },
  {
    id: 7,
    name: "Puma Sneakers",
    type: "Shoes",
    subtype: "Sneakers",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
              <br><strong>Date First Available : </strong>   18 July 2020
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
              <br><strong>Net Quantity :</strong> 2 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["6UK", "7UK", "8UK", "9UK", "10UK"],
    price: 3599,
    old_price: 4099,
    image: "assets/images/Footwear/Sneakers_Shoes/img7.png",
    feedback: 5,
    category: "men",
  },
  {
    id: 8,
    name: "Reebok Cleats",
    type: "Shoes",
    subtype: "Cleats",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
              <br><strong>Date First Available : </strong>   18 July 2020
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
              <br><strong>Net Quantity :</strong> 2 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["6UK", "7UK", "8UK", "9UK", "10UK"],
    price: 2799,
    old_price: 3199,
    image: "assets/images/Footwear/Cleats/img1.jpg",
    feedback: 5,
    category: "men",
  },
  {
    id: 9,
    name: "Nivia Football Cleats",
    type: "Shoes",
    subtype: "Cleats",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
              <br><strong>Date First Available : </strong>   18 July 2020
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
              <br><strong>Net Quantity :</strong> 2 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["6UK", "7UK", "8UK", "9UK", "10UK"],
    price: 1899,
    old_price: 2199,
    image: "assets/images/Footwear/Cleats/img2.jpg",
    feedback: 5,
    category: "men",
  },
  {
    id: 10,
    name: "Crocs Blue Style",
    type: "Shoes",
    subtype: "Crocs",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
              <br><strong>Date First Available : </strong>   18 July 2020
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
              <br><strong>Net Quantity :</strong> 2 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["6UK", "7UK", "8UK", "9UK", "10UK"],
    price: 799,
    old_price: 999,
    image: "assets/images/Footwear/Crocs/img2.jpg",
    feedback: 5,
    category: "men",
  },
  {
    id: 11,
    name: "Campus Men Sandals",
    type: "Sandals",
    subtype: "Sandals",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
              <br><strong>Date First Available : </strong>   18 July 2020
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
              <br><strong>Net Quantity :</strong> 2 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["6UK", "7UK", "8UK", "9UK", "10UK"],
    price: 659,
    old_price: 799,
    image: "assets/images/Footwear/Sandals/img1.jpg",
    feedback: 5,
    category: "men",
  },

  // Women Footwear - 31
  {
    id: 31,
    name: "Campus Running Shoes",
    type: "Shoes",
    subtype: "Sports Shoes",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 799,
    old_price: 999,
    image: "assets/images/Footwear/Sport_Shoes/img31.jpg",
    feedback: 5,
    category: "women",
  },
  {
    id: 32,
    name: "Skechers Running Shoes",
    type: "Shoes",
    subtype: "Sports Shoes",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 2199,
    old_price: 2599,
    image: "assets/images/Footwear/Sport_Shoes/img32.jpg",
    feedback: 5,
    category: "women",
  },
  {
    id: 33,
    name: "Asian Running Shoes",
    type: "Shoes",
    subtype: "Sports Shoes",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 745,
    old_price: 859,
    image: "assets/images/Footwear/Sport_Shoes/img33.jpg",
    feedback: 4,
    category: "women",
  },
  {
    id: 34,
    name: "Puma High Hill Sneakers",
    type: "Shoes",
    subtype: "Sports Shoes",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 2899,
    old_price: 2999,
    image: "assets/images/Footwear/Sneakers_Shoes/img32.jpg",
    feedback: 5,
    category: "women",
  },
  {
    id: 35,
    name: "Asian Women Sneakers",
    type: "Shoes",
    subtype: "Sneakers",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 1799,
    old_price: 2199,
    image: "assets/images/Footwear/Sneakers_Shoes/img33.jpg",
    feedback: 4,
    category: "women",
  },
  {
    id: 36,
    name: "Skechers Sneakers",
    type: "Shoes",
    subtype: "Sneakers",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 1899,
    old_price: 2199,
    image: "assets/images/Footwear/Sneakers_Shoes/img31.jpg",
    feedback: 3,
    category: "women",
  },
  {
    id: 37,
    name: "Crocs Ladies Sandals",
    type: "Shoes",
    subtype: "Sandals",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 1659,
    old_price: 1799,
    image: "assets/images/Footwear/Sandals/img31.jpg",
    feedback: 4,
    category: "women",
  },
  {
    id: 38,
    name: "Power Women Sandals",
    type: "Shoes",
    subtype: "Sandals",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 2199,
    old_price: 2599,
    image: "assets/images/Footwear/Sandals/img32.jpg",
    feedback: 5,
    category: "women",
  },
  {
    id: 39,
    name: "Adidas Women Sandals",
    type: "Shoes",
    subtype: "Sandals",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 1459,
    old_price: 1699,
    image: "assets/images/Footwear/Sandals/img33.jpg",
    feedback: 5,
    category: "women",
  },
  {
    id: 40,
    name: "Crocs Women Wear",
    type: "Shoes",
    subtype: "Crocs",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 699,
    old_price: 899,
    image: "assets/images/Footwear/Crocs/img31.jpg",
    feedback: 4,
    category: "women",
  },

  // Kids Footwear - 61
  {
    id: 61,
    name: "Asian Boy's VAYU-09",
    type: "Shoes",
    subtype: "Sports Shoes",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 620,
    old_price: 699,
    image: "assets/images/Footwear/Sport_Shoes/img61.jpg",
    feedback: 5,
    category: "kids",
  },
  {
    id: 62,
    name: "Puma Kynder Shoes",
    type: "Shoes",
    subtype: "Sports Shoes",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 1099,
    old_price: 1299,
    image: "assets/images/Footwear/Sport_Shoes/img62.jpg",
    feedback: 4,
    category: "kids",
  },
  {
    id: 63,
    name: "Asian Wonder-07",
    type: "Shoes",
    subtype: "Sports Shoes",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 499,
    old_price: 699,
    image: "assets/images/Footwear/Sport_Shoes/img63.jpg",
    feedback: 5,
    category: "kids",
  },
  {
    id: 64,
    name: "Asian Boy's Sneakers",
    type: "Shoes",
    subtype: "Sneakers",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 599,
    old_price: 699,
    image: "assets/images/Footwear/Sneakers_Shoes/img61.jpg",
    feedback: 4,
    category: "kids",
  },
  {
    id: 65,
    name: "Puma Sneakers",
    type: "Shoes",
    subtype: "Sneakers",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 1299,
    old_price: 1499,
    image: "assets/images/Footwear/Sneakers_Shoes/img62.png",
    feedback: 4,
    category: "kids",
  },
  {
    id: 66,
    name: "Puma Girl's Sneakers",
    type: "Shoes",
    subtype: "Sneakers",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 1899,
    old_price: 2199,
    image: "assets/images/Footwear/Sneakers_Shoes/img63.jpg",
    feedback: 5,
    category: "kids",
  },
  {
    id: 67,
    name: "Skechers Kids Crocs",
    type: "Shoes",
    subtype: "Crocs",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 999,
    old_price: 1299,
    image: "assets/images/Footwear/Crocs/img61.jpg",
    feedback: 3,
    category: "kids",
  },
  {
    id: 68,
    name: "Crocs Girls Crocs",
    type: "Shoes",
    subtype: "Crocs",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 1299,
    old_price: 1499,
    image: "assets/images/Footwear/Crocs/img62.jpg",
    feedback: 5,
    category: "kids",
  },
  {
    id: 69,
    name: "Crocs Unisex-Clog",
    type: "Shoes",
    subtype: "Crocs",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 2099,
    old_price: 2199,
    image: "assets/images/Footwear/Crocs/img63.jpg",
    feedback: 5,
    category: "kids",
  },
  {
    id: 70,
    name: "Crocs Unisex Sandals",
    type: "Shoes",
    subtype: "Sandals",
    desc: "Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.",
    price: 3099,
    old_price: 3599,
    image: "assets/images/Footwear/Sandals/img61.jpg",
    feedback: 5,
    category: "kids",
  },

  // Clothing

  {
    id: 1001,
    name: "Linen Casual Shirt",
    type: "Shirt",
    subtype: "Casual Shirt",
    desc: "Lightweight linen shirt, designed for breathable comfort in warm weather.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 26 x 19 x 6 cm; 320 g
              <br><strong>Date First Available : </strong> 5 May 2022
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 320 g
              <br><strong>Item Dimensions LxWxH :</strong> 26 x 19 x 6 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Allen Solly",
    availabel_sizes: ["S", "M", "L", "XL"],
    price: 1099,
    old_price: 1399,
    image: "assets/images/Clothes/Shirts/img2.png",
    feedback: 4.5,
    category: "men_clothing",
  },
  {
    id: 1002,
    name: "Floral Print Shirt",
    type: "Shirt",
    subtype: "Casual Shirt",
    desc: "Elegant floral printed shirt with a soft fabric for all-day comfort.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 24 x 17 x 4 cm; 280 g
              <br><strong>Date First Available : </strong> 15 April 2021
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 280 g
              <br><strong>Item Dimensions LxWxH :</strong> 24 x 17 x 4 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "FabIndia",
    availabel_sizes: ["XS", "S", "M", "L"],
    price: 799,
    old_price: 1099,
    image: "assets/images/Clothes/Shirts/img3.png",
    feedback: 4.6,
    category: "women_clothing",
  },
  {
    id: 1003,
    name: "Silk Blend Shirt",
    type: "Shirt",
    subtype: "Party Wear Shirt",
    desc: "Premium silk-blend shirt for an elegant and classy look at special events.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 27 x 20 x 5 cm; 350 g
              <br><strong>Date First Available : </strong> 22 June 2021
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 350 g
              <br><strong>Item Dimensions LxWxH :</strong> 27 x 20 x 5 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Van Heusen",
    availabel_sizes: ["XS", "S", "M", "L"],
    price: 1299,
    old_price: 1699,
    image: "assets/images/Clothes/Shirts/img4.png",
    feedback: 4.8,
    category: "women_clothing",
  },
  {
    id: 1004,
    name: "Kids Checkered Shirt",
    type: "Shirt",
    subtype: "Casual Shirt",
    desc: "Soft cotton checkered shirt for kids, perfect for playtime and outings.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 3 cm; 200 g
              <br><strong>Date First Available : </strong> 12 February 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 200 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 3 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "U.S. Polo Assn.",
    availabel_sizes: ["XS", "S", "M"],
    price: 599,
    old_price: 899,
    image: "assets/images/Clothes/Shirts/img5.png",
    feedback: 4.9,
    category: "kids_clothing",
  },
  {
    id: 1005,
    name: "Kids Cartoon Print Shirt",
    type: "Shirt",
    subtype: "Casual Shirt",
    desc: "Colorful cartoon-printed shirt, making everyday dressing fun for kids.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 22 x 16 x 3 cm; 210 g
              <br><strong>Date First Available : </strong> 1 January 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 210 g
              <br><strong>Item Dimensions LxWxH :</strong> 22 x 16 x 3 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "H&M Kids",
    availabel_sizes: ["XS", "S", "M"],
    price: 499,
    old_price: 799,
    image: "assets/images/Clothes/Shirts/img6.png",
    feedback: 4.7,
    category: "kids_clothing",
  },
  // Tshirts Section
  {
    id: 1006,
    name: "Classic Cotton T-Shirt",
    type: "T-Shirt",
    subtype: "Casual T-Shirt",
    desc: "A soft and breathable cotton T-shirt, perfect for daily wear.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 24 x 18 x 3 cm; 250 g
              <br><strong>Date First Available : </strong> 10 April 2022
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 250 g
              <br><strong>Item Dimensions LxWxH :</strong> 24 x 18 x 3 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Nike",
    availabel_sizes: ["S", "M", "L", "XL", "XXL"],
    price: 699,
    old_price: 999,
    image: "assets/images/Clothes/Tshirts/img7.png",
    feedback: 4.7,
    category: "men_clothing",
  },
  {
    id: 1007,
    name: "Striped Polo T-Shirt",
    type: "T-Shirt",
    subtype: "Polo T-Shirt",
    desc: "A stylish striped polo T-shirt with a comfortable fit for any occasion.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 26 x 19 x 4 cm; 280 g
              <br><strong>Date First Available : </strong> 5 June 2022
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 280 g
              <br><strong>Item Dimensions LxWxH :</strong> 26 x 19 x 4 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["S", "M", "L", "XL"],
    price: 899,
    old_price: 1199,
    image: "assets/images/Clothes/Tshirts/img8.png",
    feedback: 4.6,
    category: "men_clothing",
  },
  {
    id: 1008,
    name: "Graphic Print T-Shirt",
    type: "T-Shirt",
    subtype: "Casual T-Shirt",
    desc: "Trendy graphic print T-shirt designed for casual street style.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 23 x 17 x 3 cm; 220 g
              <br><strong>Date First Available : </strong> 15 March 2021
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 220 g
              <br><strong>Item Dimensions LxWxH :</strong> 23 x 17 x 3 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "H&M",
    availabel_sizes: ["XS", "S", "M", "L"],
    price: 599,
    old_price: 899,
    image: "assets/images/Clothes/Tshirts/img9.png",
    feedback: 4.5,
    category: "women_clothing",
  },
  {
    id: 1009,
    name: "V-Neck Stretch T-Shirt",
    type: "T-Shirt",
    subtype: "Fitted T-Shirt",
    desc: "A soft stretchable V-neck T-shirt for a perfect fit and comfort.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 25 x 18 x 3 cm; 260 g
              <br><strong>Date First Available : </strong> 20 July 2021
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 260 g
              <br><strong>Item Dimensions LxWxH :</strong> 25 x 18 x 3 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Zara",
    availabel_sizes: ["XS", "S", "M", "L"],
    price: 799,
    old_price: 1099,
    image: "assets/images/Clothes/Tshirts/img10.png",
    feedback: 4.8,
    category: "women_clothing",
  },
  {
    id: 1010,
    name: "Cartoon Print Kids T-Shirt",
    type: "T-Shirt",
    subtype: "Casual T-Shirt",
    desc: "Bright and colorful cartoon-printed T-shirt for kids.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 20 x 15 x 3 cm; 180 g
              <br><strong>Date First Available : </strong> 12 August 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 180 g
              <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 3 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Puma Kids",
    availabel_sizes: ["XS", "S", "M"],
    price: 499,
    old_price: 799,
    image: "assets/images/Clothes/Tshirts/img11.png",
    feedback: 4.9,
    category: "kids_clothing",
  },
  {
    id: 1011,
    name: "Superhero Kids T-Shirt",
    type: "T-Shirt",
    subtype: "Casual T-Shirt",
    desc: "Soft cotton superhero-printed T-shirt for fun and style.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 22 x 16 x 3 cm; 190 g
              <br><strong>Date First Available : </strong> 5 September 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 190 g
              <br><strong>Item Dimensions LxWxH :</strong> 22 x 16 x 3 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Marvel Kids",
    availabel_sizes: ["XS", "S", "M"],
    price: 599,
    old_price: 899,
    image: "assets/images/Clothes/Tshirts/img12.png",
    feedback: 4.7,
    category: "kids_clothing",
  },
  // Jeans
  {
    id: 1012,
    name: "Slim Fit Denim Jeans",
    type: "Jeans",
    subtype: "Slim Fit",
    desc: "Classic slim fit jeans with a stretchable fabric for maximum comfort.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 30 x 20 x 5 cm; 500 g
              <br><strong>Date First Available : </strong> 15 May 2022
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 500 g
              <br><strong>Item Dimensions LxWxH :</strong> 30 x 20 x 5 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Levi’s",
    availabel_sizes: ["28", "30", "32", "34", "36"],
    price: 1599,
    old_price: 1999,
    image: "assets/images/Clothes/Jeans/img13.png",
    feedback: 4.8,
    category: "men_clothing",
  },
  {
    id: 1013,
    name: "Straight Fit Blue Jeans",
    type: "Jeans",
    subtype: "Straight Fit",
    desc: "Classic straight fit blue jeans made from premium denim.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 32 x 22 x 5 cm; 550 g
              <br><strong>Date First Available : </strong> 10 June 2022
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 550 g
              <br><strong>Item Dimensions LxWxH :</strong> 32 x 22 x 5 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Wrangler",
    availabel_sizes: ["30", "32", "34", "36", "38"],
    price: 1699,
    old_price: 2199,
    image: "assets/images/Clothes/Jeans/img14.png",
    feedback: 4.7,
    category: "men_clothing",
  },
  {
    id: 1014,
    name: "High Waist Skinny Jeans",
    type: "Jeans",
    subtype: "Skinny Fit",
    desc: "Trendy high-waist skinny jeans designed for a perfect fit and sleek look.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 28 x 18 x 4 cm; 480 g
              <br><strong>Date First Available : </strong> 25 July 2022
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 480 g
              <br><strong>Item Dimensions LxWxH :</strong> 28 x 18 x 4 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "H&M",
    availabel_sizes: ["26", "28", "30", "32", "34"],
    price: 1799,
    old_price: 2299,
    image: "assets/images/Clothes/Jeans/img15.png",
    feedback: 4.6,
    category: "women_clothing",
  },
  {
    id: 1015,
    name: "Ripped Mom Jeans",
    type: "Jeans",
    subtype: "Relaxed Fit",
    desc: "Stylish ripped mom jeans for a casual and comfortable look.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 29 x 19 x 5 cm; 490 g
              <br><strong>Date First Available : </strong> 18 August 2022
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 490 g
              <br><strong>Item Dimensions LxWxH :</strong> 29 x 19 x 5 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Zara",
    availabel_sizes: ["26", "28", "30", "32", "34"],
    price: 1899,
    old_price: 2399,
    image: "assets/images/Clothes/Jeans/img16.png",
    feedback: 4.8,
    category: "women_clothing",
  },
  {
    id: 1016,
    name: "Boys Regular Fit Jeans",
    type: "Jeans",
    subtype: "Regular Fit",
    desc: "Durable and stylish regular fit jeans designed for active kids.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 26 x 16 x 4 cm; 420 g
              <br><strong>Date First Available : </strong> 8 September 2022
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 420 g
              <br><strong>Item Dimensions LxWxH :</strong> 26 x 16 x 4 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Puma Kids",
    availabel_sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    price: 899,
    old_price: 1199,
    image: "assets/images/Clothes/Jeans/img17.png",
    feedback: 4.9,
    category: "kids_clothing",
  },
  {
    id: 1017,
    name: "Girls Flared Jeans",
    type: "Jeans",
    subtype: "Flared Fit",
    desc: "Trendy flared jeans designed for stylish young girls.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 27 x 17 x 4 cm; 430 g
              <br><strong>Date First Available : </strong> 12 October 2022
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 430 g
              <br><strong>Item Dimensions LxWxH :</strong> 27 x 17 x 4 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "H&M Kids",
    availabel_sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    price: 999,
    old_price: 1299,
    image: "assets/images/Clothes/Jeans/img18.png",
    feedback: 4.7,
    category: "kids_clothing",
  },
  // Jackets
  {
    id: 1018,
    name: "Men's Leather Jacket",
    type: "Jacket",
    subtype: "Leather",
    desc: "Premium quality leather jacket with a stylish and durable design.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 35 x 25 x 10 cm; 800 g
              <br><strong>Date First Available : </strong> 5 January 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 800 g
              <br><strong>Item Dimensions LxWxH :</strong> 35 x 25 x 10 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Zara",
    availabel_sizes: ["S", "M", "L", "XL", "XXL"],
    price: 3999,
    old_price: 4599,
    image: "assets/images/Clothes/Jackets/img19.png",
    feedback: 4.8,
    category: "men_clothing",
  },
  {
    id: 1019,
    name: "Men's Bomber Jacket",
    type: "Jacket",
    subtype: "Bomber",
    desc: "Trendy bomber jacket with a modern fit and lightweight fabric.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 34 x 24 x 9 cm; 750 g
              <br><strong>Date First Available : </strong> 10 February 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 750 g
              <br><strong>Item Dimensions LxWxH :</strong> 34 x 24 x 9 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "H&M",
    availabel_sizes: ["S", "M", "L", "XL"],
    price: 3499,
    old_price: 3999,
    image: "assets/images/Clothes/Jackets/img20.png",
    feedback: 4.7,
    category: "men_clothing",
  },
  {
    id: 1020,
    name: "Women's Puffer Jacket",
    type: "Jacket",
    subtype: "Puffer",
    desc: "Warm and stylish puffer jacket for winter wear.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 33 x 23 x 8 cm; 700 g
              <br><strong>Date First Available : </strong> 15 March 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 700 g
              <br><strong>Item Dimensions LxWxH :</strong> 33 x 23 x 8 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Forever 21",
    availabel_sizes: ["XS", "S", "M", "L", "XL"],
    price: 2999,
    old_price: 3599,
    image: "assets/images/Clothes/Jackets/img21.png",
    feedback: 4.9,
    category: "women_clothing",
  },
  {
    id: 1021,
    name: "Women's Denim Jacket",
    type: "Jacket",
    subtype: "Denim",
    desc: "Classic denim jacket with a comfortable and relaxed fit.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 32 x 22 x 7 cm; 680 g
              <br><strong>Date First Available : </strong> 20 April 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 680 g
              <br><strong>Item Dimensions LxWxH :</strong> 32 x 22 x 7 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Levi’s",
    availabel_sizes: ["XS", "S", "M", "L", "XL"],
    price: 2499,
    old_price: 2999,
    image: "assets/images/Clothes/Jackets/img22.png",
    feedback: 4.8,
    category: "women_clothing",
  },
  {
    id: 1022,
    name: "Kids Hooded Winter Jacket",
    type: "Jacket",
    subtype: "Hooded",
    desc: "Soft and cozy hooded winter jacket for kids.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 30 x 20 x 6 cm; 600 g
              <br><strong>Date First Available : </strong> 25 May 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 600 g
              <br><strong>Item Dimensions LxWxH :</strong> 30 x 20 x 6 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Puma Kids",
    availabel_sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    price: 1799,
    old_price: 2199,
    image: "assets/images/Clothes/Jackets/img23.png",
    feedback: 4.9,
    category: "kids_clothing",
  },
  {
    id: 1023,
    name: "Kids Lightweight Rain Jacket",
    type: "Jacket",
    subtype: "Rain Jacket",
    desc: "Waterproof and breathable rain jacket for kids.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 28 x 18 x 5 cm; 550 g
              <br><strong>Date First Available : </strong> 30 June 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 550 g
              <br><strong>Item Dimensions LxWxH :</strong> 28 x 18 x 5 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Nike Kids",
    availabel_sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    price: 1599,
    old_price: 1999,
    image: "assets/images/Clothes/Jackets/img24.png",
    feedback: 4.8,
    category: "kids_clothing",
  },
  // Tracks

  {
    id: 1024,
    name: "Men's Sports Track",
    type: "Track",
    subtype: "Sports",
    desc: "Lightweight and breathable sports track with moisture-wicking fabric for maximum comfort.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 40 x 30 x 5 cm; 500 g
              <br><strong>Date First Available : </strong> 12 January 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 500 g
              <br><strong>Item Dimensions LxWxH :</strong> 40 x 30 x 5 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Nike",
    availabel_sizes: ["S", "M", "L", "XL", "XXL"],
    price: 2499,
    old_price: 2999,
    image: "assets/images/Clothes/Track/img25.png",
    feedback: 4.7,
    category: "men_clothing",
  },
  {
    id: 1025,
    name: "Men's Casual Track",
    type: "Track",
    subtype: "Casual",
    desc: "Soft fabric casual track, perfect for everyday wear and lounging.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 42 x 32 x 5 cm; 520 g
              <br><strong>Date First Available : </strong> 5 March 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 520 g
              <br><strong>Item Dimensions LxWxH :</strong> 42 x 32 x 5 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Adidas",
    availabel_sizes: ["S", "M", "L", "XL", "XXL"],
    price: 2199,
    old_price: 2699,
    image: "assets/images/Clothes/Track/img26.png",
    feedback: 4.6,
    category: "men_clothing",
  },
  {
    id: 1026,
    name: "Women's Fitness Track",
    type: "Track",
    subtype: "Fitness",
    desc: "Stretchable fitness track designed for gym and workouts.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 38 x 28 x 4 cm; 450 g
              <br><strong>Date First Available : </strong> 20 February 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 450 g
              <br><strong>Item Dimensions LxWxH :</strong> 38 x 28 x 4 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Puma",
    availabel_sizes: ["XS", "S", "M", "L", "XL"],
    price: 1999,
    old_price: 2399,
    image: "assets/images/Clothes/Track/img27.png",
    feedback: 4.8,
    category: "women_clothing",
  },
  {
    id: 1027,
    name: "Women's Slim Fit Track",
    type: "Track",
    subtype: "Slim Fit",
    desc: "Stylish and trendy slim fit track for women, suitable for casual and sportswear.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 40 x 30 x 4 cm; 470 g
              <br><strong>Date First Available : </strong> 10 April 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 470 g
              <br><strong>Item Dimensions LxWxH :</strong> 40 x 30 x 4 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Reebok",
    availabel_sizes: ["XS", "S", "M", "L", "XL"],
    price: 2299,
    old_price: 2799,
    image: "assets/images/Clothes/Track/img28.png",
    feedback: 4.5,
    category: "women_clothing",
  },
  {
    id: 1028,
    name: "Kids' Running Track",
    type: "Track",
    subtype: "Running",
    desc: "Comfortable and flexible running track for kids with sweat-resistant fabric.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 35 x 25 x 3 cm; 400 g
              <br><strong>Date First Available : </strong> 18 May 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 400 g
              <br><strong>Item Dimensions LxWxH :</strong> 35 x 25 x 3 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Decathlon",
    availabel_sizes: ["S", "M", "L"],
    price: 1499,
    old_price: 1799,
    image: "assets/images/Clothes/Track/img29.png",
    feedback: 4.9,
    category: "kids_clothing",
  },
  {
    id: 1029,
    name: "Kids' Cotton Track",
    type: "Track",
    subtype: "Casual",
    desc: "Soft cotton casual track for kids, perfect for daily wear and comfort.",
    detailed_desc: `
              <br><strong>Product Dimensions : </strong> 36 x 26 x 3 cm; 390 g
              <br><strong>Date First Available : </strong> 25 June 2023
              <br><strong>Country of Origin :</strong> India
              <br><strong>Item Weight :</strong> 390 g
              <br><strong>Item Dimensions LxWxH :</strong> 36 x 26 x 3 cm
              <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Zara Kids",
    availabel_sizes: ["S", "M", "L"],
    price: 1299,
    old_price: 1599,
    image: "assets/images/Clothes/Track/img30.png",
    feedback: 4.7,
    category: "kids_clothing",
  },

  //Watches
  {
    id: 2001,
    name: "Rolex",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Rolex",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Premium_Watches/img1.png",
    feedback: 5,
    category: "men_watches",
  },
  {
    id: 2002,
    name: "Rolex",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Rolex",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Premium_Watches/img2.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2003,
    name: "Rolex ",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Rolex",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Premium_Watches/img3.png",
    feedback: 5,
    category: "men_watches",
  },
  {
    id: 2004,
    name: "Cartier",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Cartier",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Premium_Watches/img4.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2005,
    name: "Rolex",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Rolex",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Premium_Watches/img5.png",
    feedback: 5,
    category: "women_watches",
  },
  {
    id: 2006,
    name: "Emporio Armani",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Emporio Armani",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Premium_Watches/img6.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2007,
    name: "Tissot",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Tissot",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Premium_Watches/img7.png",
    feedback: 5,
    category: "women_watches",
  },
  {
    id: 2008,
    name: "Tissot",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    availabel_sizes: undefined,
    manufacturer: "Tissot",
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Premium_Watches/img8.png",
    feedback: 4,
    category: "women_watches",
  },
  {
    id: 2009,
    name: "MICHAEL KORS",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    availabel_sizes: undefined,
    manufacturer: "MICHAEL KORES",
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Premium_Watches/img9.png",
    feedback: 5,
    category: "women_watches",
  },
  {
    id: 2010,
    name: "Versace",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    availabel_sizes: undefined,
    manufacturer: "Versace",
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Premium_Watches/img10.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2011,
    name: "Omega",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    availabel_sizes: undefined,
    manufacturer: "Omega",
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Premium_Watches/img11.png",
    feedback: 5,
    category: "men_watches",
  },
  {
    id: 2012,
    name: "Guess",
    type: "Watch",
    subtype: "Premium",
    desc: "Elevate your style with our luxurious and sophisticated timepieces, crafted for elegance and precision.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    availabel_sizes: undefined,
    manufacturer: "Guess",
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Premium_Watches/img12.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2013,
    name: "Guess",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    availabel_sizes: undefined,
    manufacturer: "Guess",
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img1.png",
    feedback: 5,
    category: "women_watches",
  },
  {
    id: 2014,
    name: "Titan",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    availabel_sizes: undefined,
    manufacturer: "Titan",
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img2.png",
    feedback: 4,
    category: "women_watches",
  },
  {
    id: 2015,
    name: "Titan",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    availabel_sizes: undefined,
    manufacturer: "Titan",
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img3.png",
    feedback: 5,
    category: "women_watches",
  },
  {
    id: 2016,
    name: "Michael Kores",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    availabel_sizes: undefined,
    manufacturer: "Michael Kores",
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img4.png",
    feedback: 4,
    category: "women_watches",
  },
  {
    id: 2017,
    name: "Fossil",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    availabel_sizes: undefined,
    manufacturer: "Fossil",
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img5.png",
    feedback: 5,
    category: "women_watches",
  },
  {
    id: 2018,
    name: "Urbane Maxima",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    availabel_sizes: undefined,
    manufacturer: "Urbane Maxima",
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img6.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2019,
    name: "Fossil",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Fossil",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img7.png",
    feedback: 5,
    category: "women_watches",
  },
  {
    id: 2020,
    name: "Fossil",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Fossil",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img8.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2021,
    name: "Police",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Police",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img9.png",
    feedback: 5,
    category: "men_watches",
  },
  {
    id: 2022,
    name: "DW",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Danniel Willengans",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img10.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2023,
    name: "Fossil",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Fossil",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img11.png",
    feedback: 5,
    category: "men_watches",
  },
  {
    id: 2024,
    name: "Titan",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Titan",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img12.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2025,
    name: "Cartier",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Cartier",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img13.png",
    feedback: 5,
    category: "men_watches",
  },
  {
    id: 2026,
    name: "Fastrack",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Fastrack",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img14.png",
    feedback: 4,
    category: "women_watches",
  },
  {
    id: 2027,
    name: "CRRJU",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "CRRJU",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img15.png",
    feedback: 5,
    category: "men_watches",
  },
  {
    id: 2028,
    name: "AE",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "AE",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img16.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2029,
    name: "Benyar",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Benyar",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img17.png",
    feedback: 5,
    category: "men_watches",
  },
  {
    id: 2030,
    name: "Fastrack",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Fastrack",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img18.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2031,
    name: "Benyar",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Benyar",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img19.png",
    feedback: 5,
    category: "women_watches",
  },
  {
    id: 2032,
    name: "Lacoste",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Lacoste",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img20.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2033,
    name: "G-Shock",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "G-Shock",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img21.png",
    feedback: 4,
    category: "kids_watches",
  },
  {
    id: 2034,
    name: "Casio",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Casio",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img22.png",
    feedback: 5,
    category: "men_watches",
  },
  {
    id: 2035,
    name: "Titan",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Titan",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img23.png",
    feedback: 4,
    category: "kids_watches",
  },
  {
    id: 2036,
    name: "Kidzz",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Kidzz",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Casual_Watches/img24.png",
    feedback: 5,
    category: "kids_watches",
  },
  {
    id: 2037,
    name: "Fenix",
    type: "Watch",
    subtype: "Casual",
    desc: "Stay stylish every day with our trendy and comfortable casual watches, perfect for any occasion.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Fenix",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Casual_Watches/img25.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2038,
    name: "Boat",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Boat",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Smart_Watches/img1.png",
    feedback: 5,
    category: "kids_watches",
  },
  {
    id: 2039,
    name: "Fire Boult",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Fire Boult",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Smart_Watches/img2.png",
    feedback: 4,
    category: "kids_watches",
  },
  {
    id: 2040,
    name: "Fire Boult",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Fire Boult",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Smart_Watches/img3.png",
    feedback: 5,
    category: "men_watches",
  },
  {
    id: 2041,
    name: "Fastrack",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Fastrack",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Smart_Watches/img4.png",
    feedback: 4,
    category: "kids_watches",
  },
  {
    id: 2042,
    name: "Fastrack",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Fastrack",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Smart_Watches/img5.png",
    feedback: 5,
    category: "women_watches",
  },
  {
    id: 2043,
    name: "Boult",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Boult",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Smart_Watches/img6.png",
    feedback: 4,
    category: "kids_watches",
  },
  {
    id: 2044,
    name: "Noise",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Noise",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Smart_Watches/img7.png",
    feedback: 5,
    category: "kids_watches",
  },
  {
    id: 2045,
    name: "Noise",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Noise",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Smart_Watches/img8.png",
    feedback: 4,
    category: "men_watches",
  },
  {
    id: 2046,
    name: "Boult",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Boult",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Smart_Watches/img9.png",
    feedback: 5,
    category: "women_watches",
  },
  {
    id: 2047,
    name: "Boat",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Boat",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Smart_Watches/img10.png",
    feedback: 4,
    category: "women_watches",
  },
  {
    id: 2048,
    name: "Boat",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Boat",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Smart_Watches/img11.png",
    feedback: 5,
    category: "women_watches",
  },
  {
    id: 2049,
    name: "Noise",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Noise",
    availabel_sizes: undefined,
    price: 12999,
    old_price: 14999,
    image: "assets/images/Watches/Smart_Watches/img12.png",
    feedback: 4,
    category: "kids_watches",
  },
  {
    id: 2050,
    name: "Fastrack",
    type: "Watch",
    subtype: "Smart Watch",
    desc: "Stay connected and track your fitness with our feature-packed smartwatches, designed for modern lifestyles.",
    detailed_desc: `
      <br><strong>Product Dimensions : </strong> 42 x 10 x 8 mm; 
      <br><strong>Date First Available : </strong>  15 March 2023
      <br><strong>Country of Origin :</strong> Switzerland
      <br><strong>Item Weight :</strong> 150 g
      <br><strong>Dial Size :</strong> 42 mm
      <br><strong>Strap Material :</strong> Stainless Steel / Leather / Silicone
      <br><strong>Water Resistance :</strong> Up to 50 meters
      <br><strong>Battery Life :</strong> Up to 10 days (For Smartwatches)
      <br><strong>Display Type :</strong> Analog / Digital / AMOLED
      <br><strong>Warranty :</strong> 2 Years Manufacturer Warranty
  `,
    manufacturer: "Fastrack",
    availabel_sizes: undefined,
    price: 89999,
    old_price: 99999,
    image: "assets/images/Watches/Smart_Watches/img13.png",
    feedback: 5,
    category: "women_watches",
  },

  // HandBags Section

  // Gucci Handbags (5)
  {
    id: 3001,
    name: "Gucci GG Marmont Matelassé",
    type: "Handbag",
    subtype: "Shoulder Bag",
    desc: `Elevate your style with this luxurious Gucci handbag, crafted from premium materials for timeless elegance. Perfectly designed for sophistication and everyday functionality.`,
    detailed_desc: `
          <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
          <br><strong>Date First Available : </strong>   18 July 2020
          <br><strong>Country of Origin :</strong> India
          <br><strong>Item Weight :</strong> 450 g
          <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
          <br><strong>Net Quantity :</strong> 1 Count`,
    manufacturer: "Gucci",
    availabel_sizes: undefined,
    price: 15999,
    old_price: 17999,
    image: "assets/images/Handbags/handbag-image/img-3001.jpg",
    feedback: 4.9,
    category: "women_handbag",
  },
];

const reloadCheckoutCards = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  cartItems.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if (value.size != undefined) {
      sizeSection = `<p class="size">Size: ${value.size}</p>`;
    } else {
      sizeSection = ``;
    }

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.classList.add("cart-card-item");
      newDiv.innerHTML = `
            <div class="card mb-3 checkout-cart-card" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 checkout-cart-card-image">
                        <img src="${
                          value.image
                        }" class="img-fluid rounded-start d-block w-100" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body cart-card-body">
                            <h5 class="card-title">${value.name}</h5>
                            <p class="description">
                                ${value.desc}
                            </p>
                            <p class="rate">
                                Rate: ₹${products[key].price}
                            </p>
                            <div class="cart-qty-count">
                                Quantity: ${value.quantity} 
                            </div>
                            <p class="price">
                                Price: ₹${value.price.toLocaleString()}
                            </p>
                            ${sizeSection}
                        </div>
                    </div>
                </div>
            </div>
            `;
      listCard.appendChild(newDiv);
    }

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count.toLocaleString();
  });
};

if (cartItems) {
  reloadCheckoutCards();
}
// window.onload=()=>{
//     if(localStorage.getItem("quantity")!=0){
//         reloadCheckoutCards()
//     }
// }
// window.onload()
const redirect = (link) => {
  if (link) {
    window.location.assign(link);
  }
};

const checkout = () => {
  localStorage.clear();
  listCards = [];
  quantity.innerHTML = "0";
  total.innerHTML = "0";
  if (cartItems) {
    reloadCheckoutCards();
  }
  // finalDetails()
  location.reload(); //To reload Page
};

const finalDetails = () => {
  const ck = document.getElementById("checkout-cart-cards");
  ck.innerHTML = "";
  ck.innerHTML = `
        <p class="fs-3 fw-bold">Your cart<i class="fa-solid fa-cart-shopping text-primary"></i> is empty now!!</p>
        <p class="fs-3 fw-bold">Your order has been placed successfully</p>
        <button type="button" class="btn btn-warning text-white fw-bolder w-75 d-block p-3 m-3 " onclick="redirect('index.html')">Continue Shopping</button>
    `;
};

const onceClickedBtnDisable = (btn) => {
  btn.classList.add("disabled");
};

if (localStorage.length == 0) {
  finalDetails();
  total.innerHTML = "0";
  quantity.innerHTML = "0";
}
