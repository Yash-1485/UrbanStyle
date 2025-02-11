const listCard = document.querySelector('.list-card')
const total = document.querySelector('.cart-total')
const body = document.querySelector('body')
const quantity = document.querySelector('.shopping-quantity')
const placeOrder = document.getElementById('placeOrder')

let products = [
    // Men Footwear - 1
    {
        id: 1,
        name: 'Adidas Oxo Sports',
        type: 'Shoes',
        subtype: 'Sports Shoes',
        desc: 'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court.',
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

let listCards=[]

const getRating=(feedback)=>{
    const rating = parseInt(feedback, 10);
    let star = ``
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            star+=`<span class="fa fa-star checked-star"></span>`
        } else {
            star+=`<span class="fa fa-star unchecked-star"></span>`
        }
    }
    return star
}

const categoryMap = {
    men: document.getElementById('men'),
    women: document.getElementById('women'),
    kids: document.getElementById('kids'),
};

// Swiper Card Slider
const swiperInitializer=(num)=>{
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
        556:{
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
}

const initApp = () =>{
    products.forEach((value,key) => {
        let newDiv=document.createElement('div')
        newDiv.classList.add('pricing-card')
        newDiv.classList.add('swiper-slide')
        newDiv.style.width="20rem"
        newDiv.style.height="22rem"


        newDiv.innerHTML=`
        <div class="card h-100">
            <div class="card-image w-100 d-flex justify-content-center align-items-center" style="height: 230px;">
                <img src="${value.image}" class="card-img-top object-fit-cover" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${value.name}</h5>
                <p class="card-text">${value.desc}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <!-- Feedback Stars -->
                    <span class="product-feedback-stars">${getRating(value.feedback)}</span>
                </li>
                <li class="list-group-item rate">
                    <!-- Price -->
                    <p class="price">
                        Our Price: <ins>₹${value.price.toLocaleString()}</ins>                
                    </p>
                    <p class="old_price">
                        MRP: <del>₹${value.old_price.toLocaleString()}</del>
                    </p>
                </li>
                <li class="list-group-item">
                    <button class="btn btn-outline-warning text-black" onclick="addToCart(${key})">
                        Add to Cart
                    </button>
                    <!-- Button trigger modal for Product Page -->
                    <button type="button" class="btn btn-warning product-btn" data-bs-toggle="modal" data-bs-target="#productPage" data-id="${value.id}" data-title="${value.name}" data-desc="${value.desc}" data-price="${value.price}" data-type="${value.type}" data-category="${value.category}" data-subtype="${value.subtype}" data-old-price="${value.old_price}"
                    data-image="${value.image}" data-feedback="${value.feedback}">
                        View More
                    </button>
                </li>
            </ul>
            <!-- <div class="card-body">
                <a href="/detail.html?id=1" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div> -->
        </div>
        `

        const targetContainer = categoryMap[value.category];
        if (targetContainer) {
            targetContainer.appendChild(newDiv);
        }
    })
}

if(window.location.href.includes('Footwear.html')||window.location.href.includes('Clothing.html')){
    initApp()
    swiperInitializer(1)
    swiperInitializer(2)
    swiperInitializer(3)
}

// Add to Cart Method
const addToCart = (key) => {
    // Check if the item is already in the cart using the product's id
    const existingItem = listCards.find(item => item.id === products[key].id);
    
    if (existingItem) {
        // If the item exists, increase the quantity
        existingItem.quantity += 1;
        existingItem.price = existingItem.quantity * products[key].price;  // Update price based on quantity
    } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        let newItem = {...products[key], quantity: 1};
        listCards.push(newItem);  // Add the new item to the list
    }
    
    reloadCards();  // Reload the cart to reflect changes
}

// Cart Cards
const reloadCards = () => {
    listCard.innerHTML=''
    let count=0
    let totalPrice = 0

    listCards.forEach((value,key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity

        if(value!=null){
            let newDiv=document.createElement('li')
            newDiv.classList.add('cart-card-item')
            newDiv.innerHTML=`
            <div class="card mb-3 cart-card" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 cart-card-image">
                        <img src="${value.image}" class="img-fluid rounded-start d-block w-100" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body cart-card-body">
                            <h5 class="card-title">${value.name}</h5>
                            <p class="rate">
                                Rate: ₹${products[key].price}
                            </p>
                            <p class="price">
                                Price: ₹${value.price.toLocaleString()}
                            </p>
                            <button type="button" class="btn rounded-pill btn-outline-warning card-quantity-btn px-3" onclick="changeQuantity(${key},${value.quantity-1})">-</button>
                            <div class="cart-qty-count"> ${value.quantity} </div>
                            <button type="button" class="btn rounded-pill btn-outline-warning card-quantity-btn px-3" onclick="changeQuantity(${key},${value.quantity+1})">+</button>
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
    cartUpdate();
}

const changeQuantity = (key, qty) => {
    if(qty==0){
        quantity.innerText='0'
        total.innerText='0'
        delete listCards[key]
    }else{
        listCards[key].quantity=qty
        listCards[key].price=qty*products[key].price
    }
    reloadCards()
}

// Product Page
const openProductModal=function(){
    const productButtons = document.querySelectorAll('.product-btn');

    productButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const title = btn.getAttribute('data-title');
            const image = btn.getAttribute('data-image');
            const description = btn.getAttribute('data-desc');
            const price = btn.getAttribute('data-price');
            const oldprice = btn.getAttribute('data-old-price');
            const type=btn.getAttribute('data-type')
            const subtype=btn.getAttribute('data-subtype')
            const category = btn.getAttribute('data-category');
            const feedback = btn.getAttribute('data-feedback');

            document.getElementById('productPageTitle').innerText = title;
            document.getElementById('productTitle').innerText = title;
            document.getElementById('productImage').src = image;
            document.getElementById('productImage').alt = title;
            document.getElementById('productDescription').textContent = description;
            document.getElementById('productPrice').innerHTML = `<ins>${price}</ins>`;
            document.getElementById('productOldPrice').innerHTML = `<del>${oldprice}</del>`;
            document.getElementById('productType').innerHTML=`${type}`
            document.getElementById('productSubtype').innerHTML=`${subtype}`
            document.getElementById('productCategory').innerHTML=`${category.toUpperCase()}`

            // For Feedback
            const starsContainer = document.getElementById('productStars');
            starsContainer.innerHTML = '';

            const rating = parseInt(feedback, 10);
            for (let i = 1; i <= 5; i++) {
                const star = document.createElement('span');
                // star.classList.add('star');
                star.classList.add('fa', 'fa-star');
                if (i <= rating) {
                    // star.innerHTML = '&#9733;'; // Filled star (★)
                    // star.style.color = 'gold';
                    star.classList.add('checked-star')
                } else {
                    // star.innerHTML = '&#9734;'; // Empty star (☆)
                    // star.style.color = 'gray';
                    star.classList.add('unchecked-star')
                }
                starsContainer.appendChild(star);
            }
        });
    });
}
openProductModal()

// Checking For Cart is empty or not
// Used for Cart at any page
const checkCart=()=>{
    check1=total.innerHTML.trim()
    if(check1==0){
        placeOrder.classList.add('disabled')
    }else{
        placeOrder.classList.remove('disabled')
    }   
}
const observer = new MutationObserver(() => {
    checkCart(); // Call function when cart total changes
    cartUpdate();
});
observer.observe(total, { childList: true, subtree: true });
checkCart();

// To update the Cart
const cartUpdate=()=>{    
    localStorage.setItem('cartItems',JSON.stringify(listCards))
    localStorage.setItem('total',JSON.stringify(total.innerHTML))
    localStorage.setItem('quantity',JSON.stringify(quantity.innerHTML))
}

// To redirect to the other page
const redirect=(link)=>{
    if(link){
        window.location.assign(link)
    }
}

// To reload cart
window.onload=()=>{
    if(localStorage.getItem('cartItems')){
        let cartItems=localStorage.getItem('cartItems')
        cartItems=JSON.parse(cartItems)
        listCards=cartItems.filter(item=>item!=null)
        reloadCards()
    }
}
window.onload()

// // Placeorder
// const checkout=()=>{
//     console.log("Checkout")
//     // localStorage.clear()
//     // listCards=[]
//     // quantity.innerText='0'
//     // total.innerText='0'
//     // reloadCards()
// }