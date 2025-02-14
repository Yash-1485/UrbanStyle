let cartQuantity=localStorage.getItem('quantity')
let cartTotal=localStorage.getItem('total')
let cartItems=JSON.parse(localStorage.getItem('cartItems'))

let listCard=document.getElementById("checkout-cart-cards")
let total=document.getElementById("total")
let quantity=document.getElementById("quantity")

let products = [
    // Men Footwear - 1
    {
        id: 1,
        name: 'Adidas Oxo Sports',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        detailed_desc:`
            <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
            <br><strong>Date First Available : </strong>   18 July 2020
            <br><strong>Country of Origin :</strong> India
            <br><strong>Item Weight :</strong> 450 g
            <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
            <br><strong>Net Quantity :</strong> 2 Count`,
        manufacturer: 'Adidas',
        availabel_sizes: ['6UK','7UK','8UK','9UK','10UK'],
        price: 1299,
        old_price: 1599,
        image: 'assets/images/Footwear/Sport_Shoes/img3.png',
        feedback: 5,
        category: 'men'
    },
    {
        id: 2,
        name: 'Adidas Hex Sports',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        detailed_desc:`
            <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
            <br><strong>Date First Available : </strong>   18 July 2020
            <br><strong>Country of Origin :</strong> India
            <br><strong>Item Weight :</strong> 450 g
            <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
            <br><strong>Net Quantity :</strong> 2 Count`,
        manufacturer: 'Adidas',
        availabel_sizes: ['6UK','7UK','8UK','9UK','10UK'],
        price: 999,
        old_price: 1099,
        image: 'assets/images/Footwear/Sport_Shoes/img4.png',
        feedback: 4,
        category: 'men'
    },
    {
        id: 3,
        name: 'Skechers Free Style',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        detailed_desc:`
            <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
            <br><strong>Date First Available : </strong>   18 July 2020
            <br><strong>Country of Origin :</strong> India
            <br><strong>Item Weight :</strong> 450 g
            <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
            <br><strong>Net Quantity :</strong> 2 Count`,
        manufacturer: 'Adidas',
        availabel_sizes: ['6UK','7UK','8UK','9UK','10UK'],
        price: 899,
        old_price: 1099,
        image: 'assets/images/Footwear/Sport_Shoes/img1.png',
        feedback: 4,
        category: 'men'
    },
    {
        id: 4,
        name: 'Power Evo Shoes',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        detailed_desc:`
            <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
            <br><strong>Date First Available : </strong>   18 July 2020
            <br><strong>Country of Origin :</strong> India
            <br><strong>Item Weight :</strong> 450 g
            <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
            <br><strong>Net Quantity :</strong> 2 Count`,
        manufacturer: 'Adidas',
        availabel_sizes: ['6UK','7UK','8UK','9UK','10UK'],
        price: 1399,
        old_price: 1799,
        image: 'assets/images/Footwear/Sport_Shoes/img6.png',
        feedback: 5,
        category: 'men'
    },
    {
        id: 5,
        name: 'Nike Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        detailed_desc:`
            <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
            <br><strong>Date First Available : </strong>   18 July 2020
            <br><strong>Country of Origin :</strong> India
            <br><strong>Item Weight :</strong> 450 g
            <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
            <br><strong>Net Quantity :</strong> 2 Count`,
        manufacturer: 'Adidas',
        availabel_sizes: ['6UK','7UK','8UK','9UK','10UK'],
        price: 2999,
        old_price: 3599,
        image: 'assets/images/Footwear/Sneakers_Shoes/img8.png',
        feedback: 5,
        category: 'men'
    },
    {
        id: 6,
        name: 'Adidas Wooden Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        detailed_desc:`
            <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
            <br><strong>Date First Available : </strong>   18 July 2020
            <br><strong>Country of Origin :</strong> India
            <br><strong>Item Weight :</strong> 450 g
            <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
            <br><strong>Net Quantity :</strong> 2 Count`,
        manufacturer: 'Adidas',
        availabel_sizes: ['6UK','7UK','8UK','9UK','10UK'],
        price: 2199,
        old_price: 3099,
        image: 'assets/images/Footwear/Sneakers_Shoes/img1.png',
        feedback: 4,
        category: 'men'
    },
    {
        id: 7,
        name: 'Puma Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        detailed_desc:`
            <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
            <br><strong>Date First Available : </strong>   18 July 2020
            <br><strong>Country of Origin :</strong> India
            <br><strong>Item Weight :</strong> 450 g
            <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
            <br><strong>Net Quantity :</strong> 2 Count`,
        manufacturer: 'Adidas',
        availabel_sizes: ['6UK','7UK','8UK','9UK','10UK'],
        price: 3599,
        old_price: 4099,
        image: 'assets/images/Footwear/Sneakers_Shoes/img7.png',
        feedback: 5,
        category: 'men'
    },
    {
        id: 8,
        name: 'Reebok Cleats',
        type: 'Shoes',
        subtype: 'Cleats',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        detailed_desc:`
            <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
            <br><strong>Date First Available : </strong>   18 July 2020
            <br><strong>Country of Origin :</strong> India
            <br><strong>Item Weight :</strong> 450 g
            <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
            <br><strong>Net Quantity :</strong> 2 Count`,
        manufacturer: 'Adidas',
        availabel_sizes: ['6UK','7UK','8UK','9UK','10UK'],
        price: 2799,
        old_price: 3199,
        image: 'assets/images/Footwear/Cleats/img1.jpg',
        feedback: 5,
        category: 'men'
    },
    {
        id: 9,
        name: 'Nivia Football Cleats',
        type: 'Shoes',
        subtype: 'Cleats',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        detailed_desc:`
            <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
            <br><strong>Date First Available : </strong>   18 July 2020
            <br><strong>Country of Origin :</strong> India
            <br><strong>Item Weight :</strong> 450 g
            <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
            <br><strong>Net Quantity :</strong> 2 Count`,
        manufacturer: 'Adidas',
        availabel_sizes: ['6UK','7UK','8UK','9UK','10UK'],
        price: 1899,
        old_price: 2199,
        image: 'assets/images/Footwear/Cleats/img2.jpg',
        feedback: 5,
        category: 'men'
    },
    {
        id: 10,
        name: 'Crocs Blue Style',
        type: 'Shoes',
        subtype: 'Crocs',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        detailed_desc:`
            <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
            <br><strong>Date First Available : </strong>   18 July 2020
            <br><strong>Country of Origin :</strong> India
            <br><strong>Item Weight :</strong> 450 g
            <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
            <br><strong>Net Quantity :</strong> 2 Count`,
        manufacturer: 'Adidas',
        availabel_sizes: ['6UK','7UK','8UK','9UK','10UK'],
        price: 799,
        old_price: 999,
        image: 'assets/images/Footwear/Crocs/img2.jpg',
        feedback: 5,
        category: 'men'
    },
    {
        id: 11,
        name: 'Campus Men Sandals',
        type: 'Sandals',
        subtype: 'Sandals',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        detailed_desc:`
            <br><strong>Product Dimensions : </strong> 20 x 15 x 10 cm; 450 g
            <br><strong>Date First Available : </strong>   18 July 2020
            <br><strong>Country of Origin :</strong> India
            <br><strong>Item Weight :</strong> 450 g
            <br><strong>Item Dimensions LxWxH :</strong> 20 x 15 x 10 Centimeters
            <br><strong>Net Quantity :</strong> 2 Count`,
        manufacturer: 'Adidas',
        availabel_sizes: ['6UK','7UK','8UK','9UK','10UK'],
        price: 659,
        old_price: 799,
        image: 'assets/images/Footwear/Sandals/img1.jpg',
        feedback: 5,
        category: 'men'
    },

    // Women Footwear - 31
    {
        id: 31,
        name: 'Campus Running Shoes',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 799,
        old_price: 999,
        image: 'assets/images/Footwear/Sport_Shoes/img31.jpg',
        feedback: 5,
        category: 'women'
    },
    {
        id: 32,
        name: 'Skechers Running Shoes',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 2199,
        old_price: 2599,
        image: 'assets/images/Footwear/Sport_Shoes/img32.jpg',
        feedback: 5,
        category: 'women'
    },
    {
        id: 33,
        name: 'Asian Running Shoes',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 745,
        old_price: 859,
        image: 'assets/images/Footwear/Sport_Shoes/img33.jpg',
        feedback: 4,
        category: 'women'
    },
    {
        id: 34,
        name: 'Puma High Hill Sneakers',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 2899,
        old_price: 2999,
        image: 'assets/images/Footwear/Sneakers_Shoes/img32.jpg',
        feedback: 5,
        category: 'women'
    },
    {
        id: 35,
        name: 'Asian Women Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 1799,
        old_price: 2199,
        image: 'assets/images/Footwear/Sneakers_Shoes/img33.jpg',
        feedback: 4,
        category: 'women'
    },
    {
        id: 36,
        name: 'Skechers Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 1899,
        old_price: 2199,
        image: 'assets/images/Footwear/Sneakers_Shoes/img31.jpg',
        feedback: 3,
        category: 'women'
    },
    {
        id: 37,
        name: 'Crocs Ladies Sandals',
        type: 'Shoes',
        subtype: 'Sandals',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 1659,
        old_price: 1799,
        image: 'assets/images/Footwear/Sandals/img31.jpg',
        feedback: 4,
        category: 'women'
    },
    {
        id: 38,
        name: 'Power Women Sandals',
        type: 'Shoes',
        subtype: 'Sandals',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 2199,
        old_price: 2599,
        image: 'assets/images/Footwear/Sandals/img32.jpg',
        feedback: 5,
        category: 'women'
    },
    {
        id: 39,
        name: 'Adidas Women Sandals',
        type: 'Shoes',
        subtype: 'Sandals',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 1459,
        old_price: 1699,
        image: 'assets/images/Footwear/Sandals/img33.jpg',
        feedback: 5,
        category: 'women'
    },
    {
        id: 40,
        name: 'Crocs Women Wear',
        type: 'Shoes',
        subtype: 'Crocs',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 699,
        old_price: 899,
        image: 'assets/images/Footwear/Crocs/img31.jpg',
        feedback: 4,
        category: 'women'
    },

    // Kids Footwear - 61
    {
        id: 61,
        name: 'Asian Boy\'s VAYU-09',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 620,
        old_price: 699,
        image: 'assets/images/Footwear/Sport_Shoes/img61.jpg',
        feedback: 5,
        category: 'kids'
    },
    {
        id: 62,
        name: 'Puma Kynder Shoes',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 1099,
        old_price: 1299,
        image: 'assets/images/Footwear/Sport_Shoes/img62.jpg',
        feedback: 4,
        category: 'kids'
    },
    {
        id: 63,
        name: 'Asian Wonder-07',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 499,
        old_price: 699,
        image: 'assets/images/Footwear/Sport_Shoes/img63.jpg',
        feedback: 5,
        category: 'kids'
    },
    {
        id: 64,
        name: 'Asian Boy\'s Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 599,
        old_price: 699,
        image: 'assets/images/Footwear/Sneakers_Shoes/img61.jpg',
        feedback: 4,
        category: 'kids'
    },
    {
        id: 65,
        name: 'Puma Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 1299,
        old_price: 1499,
        image: 'assets/images/Footwear/Sneakers_Shoes/img62.png',
        feedback: 4,
        category: 'kids'
    },
    {
        id: 66,
        name: 'Puma Girl\'s Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 1899,
        old_price: 2199,
        image: 'assets/images/Footwear/Sneakers_Shoes/img63.jpg',
        feedback: 5,
        category: 'kids'
    },
    {
        id: 67,
        name: 'Skechers Kids Crocs',
        type: 'Shoes',
        subtype: 'Crocs',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 999,
        old_price: 1299,
        image: 'assets/images/Footwear/Crocs/img61.jpg',
        feedback: 3,
        category: 'kids'
    },
    {
        id: 68,
        name: 'Crocs Girls Crocs',
        type: 'Shoes',
        subtype: 'Crocs',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 1299,
        old_price: 1499,
        image: 'assets/images/Footwear/Crocs/img62.jpg',
        feedback: 5,
        category: 'kids'
    },
    {
        id: 69,
        name: 'Crocs Unisex-Clog',
        type: 'Shoes',
        subtype: 'Crocs',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 2099,
        old_price: 2199,
        image: 'assets/images/Footwear/Crocs/img63.jpg',
        feedback: 5,
        category: 'kids'
    },
    {
        id: 70,
        name: 'Crocs Unisex Sandals',
        type: 'Shoes',
        subtype: 'Sandals',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 3099,
        old_price: 3599,
        image: 'assets/images/Footwear/Sandals/img61.jpg',
        feedback: 5,
        category: 'kids'
    },
]

const reloadCheckoutCards = () => {
    listCard.innerHTML=''
    let count=0
    let totalPrice = 0

    cartItems.forEach((value,key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity

        if(value!=null){
            let newDiv=document.createElement('li')
            newDiv.classList.add('cart-card-item')
            newDiv.innerHTML=`
            <div class="card mb-3 checkout-cart-card" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 checkout-cart-card-image">
                        <img src="${value.image}" class="img-fluid rounded-start d-block w-100" alt="...">
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
                        </div>
                    </div>
                </div>
            </div>
            `
            listCard.appendChild(newDiv)            
        }

        total.innerText=totalPrice.toLocaleString()
        quantity.innerText=count.toLocaleString()
    })
}

if(cartItems){
    reloadCheckoutCards()
}
// window.onload=()=>{
//     if(localStorage.getItem("quantity")!=0){
//         reloadCheckoutCards()
//     }
// }
// window.onload()
const redirect=(link)=>{
    if(link){
        window.location.assign(link)
    }
}

const checkout=()=>{
    localStorage.clear()
    listCards=[]
    quantity.innerHTML='0'
    total.innerHTML='0'
    if(cartItems){
        reloadCheckoutCards()
    }
    // finalDetails()
    location.reload()//To reload Page
}

const finalDetails=()=>{
    const ck=document.getElementById('checkout-cart-cards')
    ck.innerHTML=''
    ck.innerHTML=`
        <p class="fs-3 fw-bold">Your cart<i class="fa-solid fa-cart-shopping text-primary"></i> is empty now!!</p>
        <p class="fs-3 fw-bold">Your order has been placed successfully</p>
        <button type="button" class="btn btn-warning text-white fw-bolder w-75 d-block p-3 m-3 " onclick="redirect('index.html')">Continue Shopping</button>
    `
}

const onceClickedBtnDisable=(btn)=>{
    btn.classList.add('disabled')
}

if(localStorage.length==0){
    finalDetails()
    total.innerHTML='0'
    quantity.innerHTML='0'
}