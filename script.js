const menuEmail = document.querySelector(".navbar-email")
const menuDesktop = document.querySelector(".desktop-menu")
const menuBurger = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartIcon = document.querySelector(".navbar-shoppingcart")
const asideShoppingCart = document.querySelector("#shoppingCartContainer")

const cardsContainer = document.querySelector(".cards-container")

const productDetailAside = document.querySelector("#productDetail")
const productDetailAsideClose = document.querySelector(".product-detail-close")

menuEmail.addEventListener("click",toggleMenu)
menuBurger.addEventListener("click",toggleMobileMenu)
shoppingCartIcon.addEventListener("click",toogleShoppingCart)

productDetailAsideClose.addEventListener("click",closeProductDetailAside)

function toggleMenu(){
    
    if(!asideShoppingCart.classList.contains("inactive")){
        asideShoppingCart.classList.add("inactive")
    }
    if(!productDetailAside.classList.contains("inactive")){
        productDetailAside.classList.add("inactive")
    }

    menuDesktop.classList.toggle("inactive")
}

function toggleMobileMenu(){

    if(!asideShoppingCart.classList.contains("inactive")){
        asideShoppingCart.classList.add("inactive")
    }
    if(!productDetailAside.classList.contains("inactive")){
        productDetailAside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}

function toogleShoppingCart(){

    if(!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.add("inactive")
    }

    if(!menuDesktop.classList.contains("inactive")){
        menuDesktop.classList.add("inactive")
    }

    if(!productDetailAside.classList.contains("inactive")){
        productDetailAside.classList.add("inactive")
    }

    asideShoppingCart.classList.toggle("inactive")
}

function openProductDetailAside(){
    if(!asideShoppingCart.classList.contains("inactive")){
        asideShoppingCart.classList.add("inactive")
    }
    if(! menuDesktop.classList.contains("inactive")){
         menuDesktop.classList.add("inactive")
    }
    productDetailAside.classList.remove("inactive")
}

function closeProductDetailAside(){
    productDetailAside.classList.add("inactive")
}

const productList = []
productList.push({
    name: "bike",
    price: 120,
    image: "./imagenes/bicy.jpeg"
})
productList.push({
    name: "pike",
    price: 1200,
    image: "./imagenes/bicy.jpeg"
})
productList.push({
    name: "bite",
    price: 20,
    image: "./imagenes/bicy.jpeg"
})

function renderProducts(array){

    for(product of productList){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price
    
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement("figure")
    
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./imagenes/icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }

}

renderProducts(productList)

