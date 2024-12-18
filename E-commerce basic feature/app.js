let productCards = [
    {
        image:"./images/headphone.jpeg",
        id:1,
        name:"Premium Headphones",
        price: "$200",
        description:"High-quality wireless headphones with noise cancellation"

    },

    {
        image:"./images/watch.webp",
        id:2,
        name:"Smart watch",
        price: "$150",
        description:"Fitness tracking smartwatch with heart rate monitoring"

    },

    
    {
        image:"./images/keyboard.webp",
        id:3,
        name:"Wireless Keyboard",
        price: "$100",
        description:"Ergonomic wireless keyboard with backlit keys"

    },

    {
        image:"./images/mouse.jpg",
        id:4,
        name:"Gaming Mouse",
        price: "$70",
        description:"High-precision gaming mouse with programmable buttons"

    }


];

//pehla hum function banayen ga jis ka kam hamare cards ko web page ya document pa show
// karwana hoga.
//phir jo hum ne aik div banaya ha usa get get kren ga aur us me sare cards ayen ga 

function showProductCards(){
    let container = document.getElementById('product-container');

    container.innerHTML = '';

    let Cards = productCards.map(product=>{
        // har card ke liya yahi sturucture apply hoga 
        return `
            <div class="product-card">
            <img 
    src="${product.image}" 
    alt="${product.name}"
    class="product-image"
>
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <p>${product.description}</p>
                <button class="delete-btn" onclick="deleteProduct(${product.id})">
                    Delete
                </button>
            </div>
        `;
    });

    container.innerHTML=Cards.join('')
}

//ya function hum na delete button ka liya banaya ha jis se hum delete button pa click kr ka
//card ko delete kr sakta han

function deleteProduct(id){
productCards = productCards.filter(product=>product.id !== id)

showProductCards()
}

showProductCards()