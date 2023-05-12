console.log('Thank you')

const cart = document.getElementById("carti")
const menuIcon = document.querySelector('.menu-icon')
const closeMenu = document.querySelector('.close-menu') 
const nav = document.querySelector(".nav") 
const cartbask = document.getElementById("carti-id")
const cartExit = document.querySelectorAll('.cart-exit')
const cartAmountDisplay= document.getElementById("cartAmount")
const cartBasketEmpty = document.querySelector(".cart-basket")
const priceProduct = document.querySelector(".cart-basket-fill")
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const quantity = document.getElementById("quantity");
const spanDiv = document.getElementById("amount");
const totalAmount = document.getElementById("total")
const select = document.querySelector("select")
const deleteIcon =document.getElementById('delete')
let total;
let lAmt = Number(spanDiv.innerText)
let amt = Number(quantity.innerText)
//let data_count = Number(cart.getAttribute('data-count'))



const calculateAmount= () =>{
    
    total = 150 * amt; 
    totalAmount.innerText = `$${total.toFixed(2)}` ;

}

const increaseAmount= () =>{
    lAmt +=1
    spanDiv.innerText = lAmt;
    amt +=1
    quantity.innerText = amt;
    let test = window.getComputedStyle(cart, "::before")
    if(amt ===  1){
        cart.style.setProperty("--v","visible")
         // test.visibility = "hidden"
         cartbask.classList.remove("cart-basket-display")
        //  cartAmountDisplay.style.display = 'none'
        // cartAmountDisplay.classList.remove('cart-basket-fill')
         cartAmountDisplay.classList.add("cart-basket-fillAmount")  
     }
    calculateAmount()
   cart.classList.add('c2')

    cart.setAttribute("data-count", amt)
   
}

const decreaseAmount= () =>{
    lAmt -=1
    amt -=1
    if(lAmt <= -1 && amt <= -1){
        alert("Cannot be less than Zero!!!")    
        return false  
    }
   
    spanDiv.innerText = lAmt
    
   
    quantity.innerText = amt;
    cart.setAttribute("data-count", amt)
    let test = window.getComputedStyle(cart, "::before")
    console.log(test.visibility)
    console.log(test.content)
    if(amt === 0 ){
       cart.style.setProperty("--v","hidden")
       cartAmountDisplay.classList.remove('cart-basket-fillAmount')
       cartAmountDisplay.classList.add('cart-basket-fill')
       cartbask.classList.add("cart-basket-display")
        // test.visibility = "hidden"
      
    }
    calculateAmount()
}



 const displayCart = () =>{
    cartAmountDisplay.classList.toggle('exit')
    cartbask.classList.toggle('exit')
    if(amt>=1 && lAmt >=1 ){
       
        cartAmountDisplay.classList.add("cart-basket-fillAmount")
      
    }else {
        
        cartbask.classList.add("cart-basket-display")
       
       
       
    }
}

cartExit.forEach(basket=>{
    basket.addEventListener('click', ()=>{
        if(amt>=1 && lAmt >=1 ){
            cartAmountDisplay.classList.toggle('exit')
            // cartAmountDisplay.classList.remove("cart-basket-fillAmount")
            
            // cartAmountDisplay.style.display = 'none'
            
            
            
            console.log('click1')
        }else{
            cartbask.classList.toggle("exit")
            // cartbask.classList.remove("cart-basket-display")
            
        //  cartbask.style.display = 'none'
            
            console.log('click2')
        }
    })
})


menuIcon.addEventListener('click', ()=>{
    nav.classList.add('navSlide')
    nav.classList.remove('navNodisplay')

})

closeMenu.addEventListener('click', ()=>{
    nav.classList.add('navNodisplay');
})


document.querySelectorAll('.images').forEach(p=>{
    p.addEventListener("click", ()=>{
        document.querySelector(".main").classList.add(".block")
    })
})


document.querySelector(".close_icon").addEventListener("click", ()=>{
    document.querySelector(".main").style.display = "none"
})

const tracker = document.querySelector('.image-track')
const slides = Array.from(tracker.children)
const next = document.getElementById('next')
const prev = document.getElementById('previous')
const slideSizes = slides[0].getBoundingClientRect();
const slidesWidth = slideSizes.width;

const setSlidePosition = (slides,index) =>{
     slides.style.left = slidesWidth * index + 'px';
 } 
 slides.forEach(setSlidePosition);

 const moveToSlide = (tracker , currentSlide , targetSlide ) => {
    tracker.style.transform = 'translateX(-' + targetSlide.style.left +')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide') 
}
//When i click right i want it to move right
next.addEventListener('click', e =>{
    const currentSlide = tracker.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;// Move to the next slide
    
    //console.log(amountToMove)
    //Move to the next slide
   moveToSlide(tracker , currentSlide , nextSlide)
})

//When i click left move left
prev.addEventListener('click', e=>{
    const currentSlide = tracker.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;// Move to the next slide
    
    //console.log(amountToMove)
    //Move to the next slide
   moveToSlide(tracker , currentSlide , prevSlide)
})