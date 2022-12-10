const menuEmail = document.querySelector(".navbar-email")
const menuDesktop = document.querySelector(".desktop-menu")
const menuBurger = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartIcon = document.querySelector(".navbar-shoppingcart")
const asideShoppingCart = document.querySelector(".product-detail")

menuEmail.addEventListener("click",toggleMenu)
menuBurger.addEventListener("click",toggleMobileMenu)
shoppingCartIcon.addEventListener("click",toogleShoppingCart)

function toggleMenu(){
    
    if(!asideShoppingCart.classList.contains("inactive")){
        asideShoppingCart.classList.add("inactive")
    }

    menuDesktop.classList.toggle("inactive")
}

function toggleMobileMenu(){

    if(!asideShoppingCart.classList.contains("inactive")){
        asideShoppingCart.classList.add("inactive")
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

    asideShoppingCart.classList.toggle("inactive")
}