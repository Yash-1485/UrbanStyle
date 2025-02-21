const listCard = document.querySelector(".list-card");
const total = document.querySelector(".cart-total");
const body = document.querySelector("body");
const quantity = document.querySelector(".shopping-quantity");
const placeOrder = document.getElementById("placeOrder");
const resultAll = document.getElementById("result-container-all-pricing-cards");
const main = document.getElementById("main");

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

let listCards = [];

const getRating = (feedback) => {
  const rating = parseInt(feedback, 10);
  let star = ``;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      star += `<span class="fa fa-star checked-star"></span>`;
    } else {
      star += `<span class="fa fa-star unchecked-star"></span>`;
    }
  }
  return star;
};

const categoryMap = {
  men: document.getElementById("men"),
  women: document.getElementById("women"),
  kids: document.getElementById("kids"),
  men_clothing: document.getElementById("men_clothing"),
  women_clothing: document.getElementById("women_clothing"),
  kids_clothing: document.getElementById("kids_clothing"),
  women_handbag: document.getElementById("women_handbag"),
  men_watches: document.getElementById("men_watches"),
  women_watches: document.getElementById("women_watches"),
  kids_watches: document.getElementById("kids_watches"),
};

const subtypeMap = {
  spshoes: document.getElementById("spshoes"),
};

const manufacturerMap = {
  men: document.getElementById("men"),
  women: document.getElementById("women"),
  kids: document.getElementById("kids"),
};

// Swiper Card Slider
const swiperInitializer = (num) => {
  new Swiper(`.slider-${num}`, {
    slidesPerView: 1, // Number of slides visible at a time
    spaceBetween: 10, // Space between slides
    navigation: {
      nextEl: `.next-${num}`,
      prevEl: `.prev-${num}`,
    },
    pagination: {
      el: `.pagination-${num}`,
      clickable: true,
    },
    breakpoints: {
      // Responsive breakpoints for different screen sizes
      556: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
  });
};

const initApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("pricing-card");
    newDiv.classList.add("swiper-slide");
    newDiv.style.width = "20rem";
    newDiv.style.height = "22rem";

    const sizeSection =
      value.availabel_sizes != undefined
        ? `
                <div class="sizeSelectList" id="sizeSelectList">
                    <p>Select size:</p>
                    ${generateSelectList(value.availabel_sizes, value.id)}
                </div>
              `
        : ``;

    newDiv.innerHTML = `
        <div class="card h-100">
            <div class="card-image w-100 d-flex justify-content-center align-items-center" style="height: 230px !important; width: 100%; overflow: hidden; position: relative;">
                <img src="${
                  value.image
                }" class="card-img-top object-fit-cover fit-image" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${value.name}</h5>
                <p class="card-text">${value.desc}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <!-- Feedback Stars -->
                    <span class="product-feedback-stars">${getRating(
                      value.feedback
                    )}</span>
                </li>
                <li class="list-group-item rate">
                    <!-- Price -->
                    <p class="price">
                        Our Price: <ins>₹${value.price.toLocaleString()}</ins>                
                    </p>
                    <p class="old_price">
                        MRP: <del>₹${value.old_price.toLocaleString()}</del>
                    </p>
                    <!--<div class="sizeSelectList" id="sizeSelectList">
                        <p>Select size: </p>
                        ${generateSelectList(value.availabel_sizes, value.id)}
                    </div>-->
                    ${sizeSection}
                </li>
                <li class="list-group-item">
                    <button class="btn btn-outline-warning text-black" onclick="addToCart(${key});">
                        Add to Cart
                    </button>
                    <!-- Button trigger modal for Product Page -->
                    <button type="button" class="btn btn-warning product-btn" data-bs-toggle="modal" data-bs-target="#productPage" data-id="${
                      value.id
                    }" data-title="${value.name}" data-desc="${
      value.desc
    }" data-price="${value.price}" data-type="${value.type}" data-category="${
      value.category
    }" data-subtype="${value.subtype}" data-old-price="${
      value.old_price
    }" data-detailed-desc="${value.detailed_desc}"
                    data-image="${value.image}" data-feedback="${
      value.feedback
    }" data-manufacturer="${value.manufacturer}" data-sizes="${
      value.availabel_sizes
    }">
                        View More
                    </button>
                </li>
            </ul>
            <!-- <div class="card-body">
                <a href="/detail.html?id=1" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div> -->
        </div>
        `;

    const targetContainer = categoryMap[value.category];
    if (targetContainer) {
      targetContainer.appendChild(newDiv);
    }
  });
};

const showAllCards = () => {
  let ps = document.getElementById("pricing-section");
  localStorage.setItem("pricing-section", JSON.stringify(ps.outerHTML));
  ps.remove();
  const targetContainer_ = document.getElementById(
    "result-container-all-pricing-cards"
  );
  const targetContainer = document.createElement("div");
  targetContainer.id = "result-all-pricing-cards";
  targetContainer.classList.add("p-5");
  targetContainer.classList.add("gap-3");
  targetContainer.classList.add("row");
  products.forEach((value, key) => {    
    let newDiv = document.createElement("div");
    newDiv.classList.add("pricing-card");
    newDiv.classList.add("col-2");
    newDiv.style.width = "20rem";
    newDiv.style.height = "fit-content";
    const sizeSection =
      value.availabel_sizes != undefined
        ? `
                <div class="sizeSelectList" id="sizeSelectList">
                    <p>Select size:</p>
                    ${generateSelectList(value.availabel_sizes, value.id)}
                </div>
              `
        : ``;
    newDiv.innerHTML = `
        <div class="card h-100">
            <div class="card-image w-100 d-flex justify-content-center align-items-center" style="height: 230px !important; width: 100%; overflow: hidden; position: relative;">
                <img src="${
                  value.image
                }" class="card-img-top object-fit-cover" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${value.name}</h5>
                <p class="card-text">${value.desc}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <!-- Feedback Stars -->
                    <span class="product-feedback-stars">${getRating(
                      value.feedback
                    )}</span>
                </li>
                <li class="list-group-item rate">
                    <!-- Price -->
                    <p class="price">
                        Our Price: <ins>₹${value.price.toLocaleString()}</ins>                
                    </p>
                    <p class="old_price">
                        MRP: <del>₹${value.old_price.toLocaleString()}</del>
                    </p>
                    ${sizeSection}
                </li>
                <li class="list-group-item">
                    <button class="btn btn-outline-warning text-black" onclick="addToCart(${key});">
                        Add to Cart
                    </button>
                    <!-- Button trigger modal for Product Page -->
                    <button type="button" class="btn btn-warning product-btn" data-bs-toggle="modal" data-bs-target="#productPage" data-id="${
                      value.id
                    }" data-title="${value.name}" data-desc="${
      value.desc
    }" data-price="${value.price}" data-type="${value.type}" data-category="${
      value.category
    }" data-subtype="${value.subtype}" data-old-price="${
      value.old_price
    }" data-detailed-desc="${value.detailed_desc}"
                    data-image="${value.image}" data-feedback="${
      value.feedback
    }" data-manufacturer="${value.manufacturer}" data-sizes="${
      value.availabel_sizes
    }">
                        View More
                    </button>
                </li>
            </ul>
            <!-- <div class="card-body">
                <a href="/detail.html?id=1" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div> -->
        </div>
        `;
    targetContainer.appendChild(newDiv);
  });
  targetContainer.innerHTML += modalCreator();
  targetContainer.innerHTML += `
    <div class="btn-container text-center w-100">
        <button type="button" class="btn btn-warning w-75 text-white fw-bolder fs-3"
            onclick="collapseShowAll();onceClickedBtnEnable(document.getElementById('showAllBtn'));">
            Collapse All
        </button>
    </div>
    `;
  targetContainer_.appendChild(targetContainer);
};

const showAllClothingCards = () => {
  let ps = document.getElementById("pricing-section");
  localStorage.setItem("pricing-section", JSON.stringify(ps.outerHTML));
  ps.remove();
  const targetContainer_ = document.getElementById(
    "result-container-all-pricing-cards"
  );
  const targetContainer = document.createElement("div");
  targetContainer.id = "result-all-pricing-cards";
  targetContainer.classList.add("p-5");
  targetContainer.classList.add("gap-3");
  targetContainer.classList.add("row");
  products.forEach((value, key) => {
    if (
      value.category == "men_clothing" ||
      value.category == "women_clothing" ||
      value.category == "kids_clothing"
    ) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("pricing-card");
      newDiv.classList.add("col-2");
      newDiv.style.width = "20rem";
      newDiv.style.height = "fit-content";
      const sizeSection =
      value.availabel_sizes != undefined
        ? `
                <div class="sizeSelectList" id="sizeSelectList">
                    <p>Select size:</p>
                    ${generateSelectList(value.availabel_sizes, value.id)}
                </div>
              `
        : ``;
      newDiv.innerHTML = `
            <div class="card h-100">
                <div class="card-image w-100 d-flex justify-content-center align-items-center" style="height: 230px; width: 100%; overflow: hidden; position: relative;">
                    <img src="${
                      value.image
                    }" class="card-img-top object-fit-cover" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${value.name}</h5>
                    <p class="card-text">${value.desc}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <!-- Feedback Stars -->
                        <span class="product-feedback-stars">${getRating(
                          value.feedback
                        )}</span>
                    </li>
                    <li class="list-group-item rate">
                        <!-- Price -->
                        <p class="price">
                            Our Price: <ins>₹${value.price.toLocaleString()}</ins>                
                        </p>
                        <p class="old_price">
                            MRP: <del>₹${value.old_price.toLocaleString()}</del>
                        </p>
                        ${sizeSection}
                    </li>
                    <li class="list-group-item">
                        <button class="btn btn-outline-warning text-black" onclick="addToCart(${key});">
                            Add to Cart
                        </button>
                        <!-- Button trigger modal for Product Page -->
                        <button type="button" class="btn btn-warning product-btn" data-bs-toggle="modal" data-bs-target="#productPage" data-id="${
                          value.id
                        }" data-title="${value.name}" data-desc="${
        value.desc
      }" data-price="${value.price}" data-type="${value.type}" data-category="${
        value.category
      }" data-subtype="${value.subtype}" data-old-price="${
        value.old_price
      }" data-detailed-desc="${value.detailed_desc}"
                        data-image="${value.image}" data-feedback="${
        value.feedback
      }" data-manufacturer="${value.manufacturer}" data-sizes="${
        value.availabel_sizes
      }">
                            View More
                        </button>
                    </li>
                </ul>
                <!-- <div class="card-body">
                    <a href="/detail.html?id=1" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div> -->
            </div>
            `;
      targetContainer.appendChild(newDiv);
    }
  });
  targetContainer.innerHTML += modalCreator();
  targetContainer.innerHTML += `
    <div class="btn-container text-center w-100">
        <button type="button" class="btn btn-warning w-75 text-white fw-bolder fs-3"
            onclick="collapseShowAll();onceClickedBtnEnable(document.getElementById('showAllBtn'));">
            Collapse All
        </button>
    </div>
    `;
  targetContainer_.appendChild(targetContainer);
};

const showAllWatchCards = () => {
  let ps = document.getElementById("pricing-section");
  localStorage.setItem("pricing-section", JSON.stringify(ps.outerHTML));
  ps.remove();
  const targetContainer_ = document.getElementById(
    "result-container-all-pricing-cards"
  );
  const targetContainer = document.createElement("div");
  targetContainer.id = "result-all-pricing-cards";
  targetContainer.classList.add("p-5");
  targetContainer.classList.add("gap-3");
  targetContainer.classList.add("row");
  products.forEach((value, key) => {
    if (
      value.category == "men_watches" ||
      value.category == "women_watches" ||
      value.category == "kids_watches"
    ) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("pricing-card");
      newDiv.classList.add("col-2");
      newDiv.style.width = "20rem";
      newDiv.style.height = "fit-content";
      const sizeSection =
      value.availabel_sizes != undefined
        ? `
                <div class="sizeSelectList" id="sizeSelectList">
                    <p>Select size:</p>
                    ${generateSelectList(value.availabel_sizes, value.id)}
                </div>
              `
        : ``;
      newDiv.innerHTML = `
              <div class="card h-100">
                  <div class="card-image w-100 d-flex justify-content-center align-items-center" style="height: 230px; width: 100%; overflow: hidden; position: relative;">
                      <img src="${
                        value.image
                      }" class="card-img-top object-fit-cover" alt="...">
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">${value.name}</h5>
                      <p class="card-text">${value.desc}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                          <!-- Feedback Stars -->
                          <span class="product-feedback-stars">${getRating(
                            value.feedback
                          )}</span>
                      </li>
                      <li class="list-group-item rate">
                          <!-- Price -->
                          <p class="price">
                              Our Price: <ins>₹${value.price.toLocaleString()}</ins>                
                          </p>
                          <p class="old_price">
                              MRP: <del>₹${value.old_price.toLocaleString()}</del>
                          </p>
                          ${sizeSection}
                      </li>
                      <li class="list-group-item">
                          <button class="btn btn-outline-warning text-black" onclick="addToCart(${key});">
                              Add to Cart
                          </button>
                          <!-- Button trigger modal for Product Page -->
                          <button type="button" class="btn btn-warning product-btn" data-bs-toggle="modal" data-bs-target="#productPage" data-id="${
                            value.id
                          }" data-title="${value.name}" data-desc="${
        value.desc
      }" data-price="${value.price}" data-type="${value.type}" data-category="${
        value.category
      }" data-subtype="${value.subtype}" data-old-price="${
        value.old_price
      }" data-detailed-desc="${value.detailed_desc}"
                          data-image="${value.image}" data-feedback="${
        value.feedback
      }" data-manufacturer="${value.manufacturer}" data-sizes="${
        value.availabel_sizes
      }">
                              View More
                          </button>
                      </li>
                  </ul>
                  <!-- <div class="card-body">
                      <a href="/detail.html?id=1" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a>
                  </div> -->
              </div>
              `;
      targetContainer.appendChild(newDiv);
    }
  });
  targetContainer.innerHTML += modalCreator();
  targetContainer.innerHTML += `
      <div class="btn-container text-center w-100">
          <button type="button" class="btn btn-warning w-75 text-white fw-bolder fs-3"
              onclick="collapseShowAll();onceClickedBtnEnable(document.getElementById('showAllBtn'));">
              Collapse All
          </button>
      </div>
      `;
  targetContainer_.appendChild(targetContainer);
};

const showTypeCards = (type, id) => {
  // resultAll.style.display="block"
  products
    .filter((item) => item.subtype == type)
    .forEach((value, key) => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("pricing-card");
      newDiv.classList.add("swiper-slide");
      newDiv.style.width = "20rem";
      newDiv.style.height = "22rem";
        
      newDiv.innerHTML = `
        <div class="card h-100">
            <div class="card-image w-100 d-flex justify-content-center align-items-center" style="height: 230px;">
                <img src="${
                  value.image
                }" class="card-img-top object-fit-cover" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${value.name}</h5>
                <p class="card-text">${value.desc}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <!-- Feedback Stars -->
                    <span class="product-feedback-stars">${getRating(
                      value.feedback
                    )}</span>
                </li>
                <li class="list-group-item rate">
                    <!-- Price -->
                    <p class="price">
                        Our Price: <ins>₹${value.price.toLocaleString()}</ins>                
                    </p>
                    <p class="old_price">
                        MRP: <del>₹${value.old_price.toLocaleString()}</del>
                    </p>
                    <div class="sizeSelectList" id="sizeSelectList">
                        <p>Select size: </p>
                        ${generateSelectList(value.availabel_sizes, value.id)}
                    </div>
                </li>
                <li class="list-group-item">
                    <button class="btn btn-outline-warning text-black" onclick="addToCart(${key});">
                        Add to Cart
                    </button>
                    <!-- Button trigger modal for Product Page -->
                    <button type="button" class="btn btn-warning product-btn" data-bs-toggle="modal" data-bs-target="#productPage" data-id="${
                      value.id
                    }" data-title="${value.name}" data-desc="${
        value.desc
      }" data-price="${value.price}" data-type="${value.type}" data-category="${
        value.category
      }" data-subtype="${value.subtype}" data-old-price="${
        value.old_price
      }" data-detailed-desc="${value.detailed_desc}"
                    data-image="${value.image}" data-feedback="${
        value.feedback
      }" data-manufacturer="${value.manufacturer}" data-sizes="${
        value.availabel_sizes
      }">
                        View More
                    </button>
                </li>
            </ul>
            <!-- <div class="card-body">
                <a href="/detail.html?id=1" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div> -->
        </div>
        `;
      const targetContainer = document.getElementById(id);
      targetContainer.appendChild(newDiv);
    });
};

const modalCreator = () => {
  let div = document.createElement("div");
  div.innerHTML = `
    <!-- Product Modal -->
    <div class="modal fade" id="productPage" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="productPageTitle">
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="modal-main-content">
                        <div class="product-img-container">
                            <img src="" alt="" id="productImage" class="img-fluid" style="height: 230px; width: 100%; overflow: hidden; position: relative;">
                        </div>
                        <div class="product-content-container">
                            <h1 id="productTitle"></h1>
                            <div class="product-price-container">
                                <div>
                                    <strong>Our Price: </strong>
                                    <span id="productPrice"></span>
                                </div>
                                <div>
                                    <strong>MRP: </strong>
                                    <span id="productOldPrice"></span>
                                </div>
                            </div>
                            <p id="productDescription"></p>
                            <p>
                                <strong>Product Type: </strong>
                                <span id="productType"></span>
                            </p>
                            <p>
                                <strong>Product Subtype: </strong>
                                <span id="productSubtype"></span>
                            </p>
                            <p>
                                <strong>Category: </strong>
                                <span id="productCategory"></span>
                            </p>
                            <p>
                                <strong>Manufacturer: </strong>
                                <span id="productManufacturer"></span>
                            </p>
                            <p>
                                <strong>Available Sizes: </strong>
                                <span id="productSizes"></span>
                            </p>
                            <p>
                                <strong>Detailed Description: </strong>
                                <span id="productDetailedDesc">
                                </span>
                            </p>
                            <p>
                                <strong>Rating: </strong>
                                <span id="productStars"></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"
                        data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `;
  return div.innerHTML;
};

const collapseShowAll = () => {
  let close = document.getElementById("result-all-pricing-cards");
  close.innerHTML = "";
  close.remove();
  main.insertAdjacentHTML(
    "beforeend",
    `${JSON.parse(localStorage.getItem("pricing-section"))}`
  );
  localStorage.removeItem("pricing-section");
  location.reload();
};

const collapseAllOtherCards = (...args) => {
  args.forEach((item) => {
    ele = document.getElementById(item);
    if (ele.classList.contains("show")) {
      ele.classList.remove("show");
    }
  });
};

const show = (...args) => {
  args.forEach((item) => {
    document.getElementById(item).style.display = "block";
  });
};

const onceClickedBtnDisable = (btn) => {
  btn.classList.add("disabled");
};

const onceClickedBtnEnable = (btn) => {
  btn.classList.remove("disabled");
};

const collapse = (...args) => {
  args.forEach((item) => {
    document.getElementById(item).style.display = "none";
  });
};

function generateSelectList(optionsArray, selectId = "") {
  // Create select element
  if (optionsArray || optionsArray != undefined) {
    let select = document.createElement("select");
    if (selectId) select.id = String("product").concat(selectId);

    // Populate options
    optionsArray.forEach((optionValue) => {
      let option = document.createElement("option");
      option.value = optionValue;
      option.textContent = optionValue;
      select.appendChild(option);
    });
    // Return innerHTML
    return select.outerHTML;
  }
}

function getSelectedValue(id) {
  // console.log("Looking for ID:", id);
  var selectElement = document.getElementById(id);

  if (!selectElement) {
    console.error(`Element with ID '${id}' not found!`);
    return null;
  }

  // console.log("Found select element:", selectElement);
  // console.log("Selected value:", selectElement.value);
  return selectElement.value;
}

if (
  window.location.href.includes("Footwear.html") ||
  window.location.href.includes("Clothing.html") ||
  window.location.href.includes("Handbags.html") ||
  window.location.href.includes("Watches.html")
) {
  initApp();
  swiperInitializer(1);
  swiperInitializer(2);
  swiperInitializer(3);
  swiperInitializer(4);
  swiperInitializer(5);
  swiperInitializer(6);
  swiperInitializer(7);
  swiperInitializer(8);
  swiperInitializer(11);
  swiperInitializer(12);
  swiperInitializer(13);
  swiperInitializer(14);
  swiperInitializer(15);
  swiperInitializer(16);
}

// Add to Cart Method
const addToCart = (key) => {
  // Check if the item is already in the cart using the product's id
  let check_id = products[key].id;
  if (products[key].availabel_sizes != undefined) {
    var check_size = getSelectedValue("product" + products[key].id);
  }
  const existingItem = listCards.find(
    (item) => item.id === products[key].id && item.size == check_size
  );
  if (existingItem && existingItem.size == check_size) {
    // If the item exists, increase the quantity
    existingItem.quantity += 1;
    existingItem.new_price = existingItem.quantity * products[key].price; // Update price based on quantity
    console.log(existingItem.new_price, existingItem.price);
  } else {
    // If the item doesn't exist, add it to the cart with quantity 1
    let newItem = {
      ...products[key],
      quantity: 1,
      size: check_size,
      new_price: products[key].price,
    };
    listCards.push(newItem); // Add the new item to the list
  }
  reloadCards(); // Reload the cart to reflect changes
};

// Cart Cards
const reloadCards = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.new_price;
    count = count + value.quantity;

    var sizeSection = "";
    if (value.size != undefined) {
      sizeSection = `<p class="size">Size: ${value.size}</p>`;
    } else {
      sizeSection = ``;
    }

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.classList.add("cart-card-item");
      newDiv.innerHTML = `
            <div class="card mb-3 cart-card" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 cart-card-image">
                        <img src="${
                          value.image
                        }" class="img-fluid rounded-start d-block w-100" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body cart-card-body">
                            <h5 class="card-title">${value.name}</h5>
                            <!--<p class="size">
                                Size: ${value.size}
                            </p>-->
                            <p class="rate">
                                Rate: ₹${value.price}
                            </p>
                            <p class="price">
                                Price: ₹${value.new_price.toLocaleString()}
                            </p>
                            ${sizeSection}
                            <button type="button" class="btn rounded-pill btn-outline-warning card-quantity-btn px-3" onclick="changeQuantity(${key},${
        value.quantity - 1
      })">-</button>
                            <div class="cart-qty-count"> ${
                              value.quantity
                            } </div>
                            <button type="button" class="btn rounded-pill btn-outline-warning card-quantity-btn px-3" onclick="changeQuantity(${key},${
        value.quantity + 1
      })">+</button>
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
  cartUpdate();
};

const changeQuantity = (key, qty) => {
  if (qty == 0) {
    quantity.innerText = "0";
    total.innerText = "0";
    delete listCards[key];
  } else {
    listCards[key].quantity = qty;
    listCards[key].new_price = qty * listCards[key].price;
  }
  reloadCards();
};

// Product Page
const openProductModal = function () {
  const productButtons = document.querySelectorAll(".product-btn");

  productButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const title = btn.getAttribute("data-title");
      const image = btn.getAttribute("data-image");
      const description = btn.getAttribute("data-desc");
      const detailedDesc = btn.getAttribute("data-detailed-desc");
      const price = btn.getAttribute("data-price");
      const oldprice = btn.getAttribute("data-old-price");
      const type = btn.getAttribute("data-type");
      const subtype = btn.getAttribute("data-subtype");
      const category = btn.getAttribute("data-category");
      const feedback = btn.getAttribute("data-feedback");
      const manufacturer = btn.getAttribute("data-manufacturer");
      const sizes = btn.getAttribute("data-sizes");

      document.getElementById("productPageTitle").innerText = title;
      document.getElementById("productTitle").innerText = title;
      document.getElementById("productImage").src = image;
      document.getElementById("productImage").alt = title;
      document.getElementById("productDescription").textContent = description;
      document.getElementById("productPrice").innerHTML = `<ins>${price}</ins>`;
      document.getElementById(
        "productOldPrice"
      ).innerHTML = `<del>${oldprice}</del>`;
      document.getElementById("productType").innerHTML = `${type}`;
      document.getElementById("productSubtype").innerHTML = `${subtype}`;
      document.getElementById(
        "productCategory"
      ).innerHTML = `${category.toUpperCase()}`;
      document.getElementById(
        "productDetailedDesc"
      ).innerHTML = `${detailedDesc}`;
      document.getElementById(
        "productManufacturer"
      ).innerHTML = `${manufacturer}`;
      document.getElementById("productSizes").innerHTML = `${sizes
        .split(",")
        .join(", ")}`;

      // For Feedback
      const starsContainer = document.getElementById("productStars");
      starsContainer.innerHTML = "";

      const rating = parseInt(feedback, 10);
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        // star.classList.add('star');
        star.classList.add("fa", "fa-star");
        if (i <= rating) {
          // star.innerHTML = '&#9733;'; // Filled star (★)
          // star.style.color = 'gold';
          star.classList.add("checked-star");
        } else {
          // star.innerHTML = '&#9734;'; // Empty star (☆)
          // star.style.color = 'gray';
          star.classList.add("unchecked-star");
        }
        starsContainer.appendChild(star);
      }
    });
  });
};
openProductModal();

const openProductModalAll = function () {
  const productButtons = document.querySelectorAll(".product-btn");

  productButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const title = btn.getAttribute("data-title");
      const image = btn.getAttribute("data-image");
      const description = btn.getAttribute("data-desc");
      const detailedDesc = btn.getAttribute("data-detailed-desc");
      const price = btn.getAttribute("data-price");
      const oldprice = btn.getAttribute("data-old-price");
      const type = btn.getAttribute("data-type");
      const subtype = btn.getAttribute("data-subtype");
      const category = btn.getAttribute("data-category");
      const feedback = btn.getAttribute("data-feedback");
      const manufacturer = btn.getAttribute("data-manufacturer");
      const sizes = btn.getAttribute("data-sizes");

      document.getElementById("productPageTitle_all").innerText = title;
      document.getElementById("productTitle_all").innerText = title;
      document.getElementById("productImage_all").src = image;
      document.getElementById("productImage_all").alt = title;
      document.getElementById("productDescription_all").textContent =
        description;
      document.getElementById(
        "productPrice_all"
      ).innerHTML = `<ins>${price}</ins>`;
      document.getElementById(
        "productOldPrice_all"
      ).innerHTML = `<del>${oldprice}</del>`;
      document.getElementById("productType_all").innerHTML = `${type}`;
      document.getElementById("productSubtype_all").innerHTML = `${subtype}`;
      document.getElementById(
        "productCategory_all"
      ).innerHTML = `${category.toUpperCase()}`;
      document.getElementById(
        "productDetailedDesc_all"
      ).innerHTML = `${detailedDesc}`;
      document.getElementById(
        "productManufacturer_all"
      ).innerHTML = `${manufacturer}`;
      document.getElementById("productSizes_all").innerHTML = `${sizes
        .split(",")
        .join(", ")}`;

      // For Feedback
      const starsContainer = document.getElementById("productStars_all");
      starsContainer.innerHTML = "";

      const rating = parseInt(feedback, 10);
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        // star.classList.add('star');
        star.classList.add("fa", "fa-star");
        if (i <= rating) {
          // star.innerHTML = '&#9733;'; // Filled star (★)
          // star.style.color = 'gold';
          star.classList.add("checked-star");
        } else {
          // star.innerHTML = '&#9734;'; // Empty star (☆)
          // star.style.color = 'gray';
          star.classList.add("unchecked-star");
        }
        starsContainer.appendChild(star);
      }
    });
  });
};

// Checking For Cart is empty or not
// Used for Cart at any page
const checkCart = () => {
  check1 = total.innerHTML.trim();
  if (check1 == 0) {
    placeOrder.classList.add("disabled");
  } else {
    placeOrder.classList.remove("disabled");
  }
};
const observer = new MutationObserver(() => {
  checkCart(); // Call function when cart total changes
  cartUpdate();
});
observer.observe(total, { childList: true, subtree: true });
checkCart();

// To update the Cart
const cartUpdate = () => {
  localStorage.setItem("cartItems", JSON.stringify(listCards));
  localStorage.setItem("total", JSON.stringify(total.innerHTML));
  localStorage.setItem("quantity", JSON.stringify(quantity.innerHTML));
};

// To redirect to the other page
const redirect = (link) => {
  if (link) {
    window.location.assign(link);
  }
};

// To reload cart
window.onload = () => {
  if (localStorage.getItem("cartItems")) {
    let cartItems = localStorage.getItem("cartItems");
    cartItems = JSON.parse(cartItems);
    listCards = cartItems.filter((item) => item != null);
    reloadCards();
  }
};
window.onload();
