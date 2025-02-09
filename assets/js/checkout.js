let cartQuantity=localStorage.getItem('quantity')
let cartTotal=localStorage.getItem('total')
let cartItems=JSON.parse(localStorage.getItem('cartItems'))

let listCard=document.getElementById("checkout-cart-cards")
let total=document.getElementById("total")
let quantity=document.getElementById("quantity")

let products = [
    {
        id: 1,
        name: 'Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 999,
        old_price: 1099,
        image: 'assets/images/Footwear/Sneakers_Shoes/img5.png',
        feedback: 4,
        category: 'men'
    },
    {
        id: 2,
        name: 'Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 999,
        old_price: 1099,
        image: 'assets/images/Footwear/Sneakers_Shoes/img5.png',
        feedback: 4,
        category: 'men'
    },
    {
        id: 3,
        name: 'Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 999,
        old_price: 1099,
        image: 'assets/images/Footwear/Sneakers_Shoes/img5.png',
        feedback: 4,
        category: 'men'
    },
    {
        id: 4,
        name: 'Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 999,
        old_price: 1099,
        image: 'assets/images/Footwear/Sneakers_Shoes/img5.png',
        feedback: 4,
        category: 'men'
    },
    {
        id: 5,
        name: 'Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 999,
        old_price: 1099,
        image: 'assets/images/Footwear/Sneakers_Shoes/img5.png',
        feedback: 4,
        category: 'men'
    },
    {
        id: 6,
        name: 'Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 999,
        old_price: 1099,
        image: 'assets/images/Footwear/Sneakers_Shoes/img6.png',
        feedback: 4,
        category: 'women'
    },
    {
        id: 7,
        name: 'Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 999,
        old_price: 1099,
        image: 'assets/images/Footwear/Sneakers_Shoes/img7.png',
        feedback: 4,
        category: 'men'
    },
    {
        id: 8,
        name: 'Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 1499,
        old_price: 1699,
        image: 'assets/images/Footwear/Sneakers_Shoes/img8.png',
        feedback: 5,
        category: 'women'
    },
    {
        id: 9,
        name: 'Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 999,
        old_price: 1099,
        image: 'assets/images/Footwear/Sneakers_Shoes/img9.png',
        feedback: 4,
        category: 'kids'
    },
    {
        id: 10,
        name: 'Sneakers',
        type: 'Shoes',
        subtype: 'Sneakers',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
        price: 999,
        old_price: 1099,
        image: 'assets/images/Footwear/Sneakers_Shoes/img9.png',
        feedback: 4,
        category: 'kids'
    }
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

reloadCheckoutCards()
// window.onload=()=>{
//     if(localStorage.getItem("quantity")!=0){
//         reloadCheckoutCards()
//     }
// }
// window.onload()

const checkout=()=>{
    localStorage.clear()
    listCards=[]
    quantity.innerText='0'
    total.innerText='0'
    reloadCheckoutCards()
    location.reload()//To reload Page
}