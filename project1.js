
// javaScript to the slide
let slideProject1 = 0;
let slidePlay= true;
let slides = document.querySelectorAll('.slide');

function hideAllSlide(){
    slides.forEach(function(e) {
        e.classList.remove('active');
    })
}

function showSlide(){
    hideAllSlide()
    slides[slideProject1].classList.add('active')
}

function nextSlide() {
    slideProject1 = slideProject1 + 1 === slides.length ? 0 : slideProject1 + 1;
}

function prevSlide(){
    slideProject1 = slideProject1 - 1 < 0 ? slides.length - 1 : slideProject1 - 1;
}
// pause slide when hover slider
document.querySelector('.slider').addEventListener('mouseover', function(){
    slidePlay = false;
})
// snable slide when mouse leave out  slider
document.querySelector('.slider').addEventListener('mouseleave', function(){
    slidePlay = true;
})
// slide controll
document.querySelector('.slide-next').addEventListener('click',function(){
    nextSlide();
    showSlide();
});
document.querySelector('.slide-prev').addEventListener('click', function(){
    prevSlide();
    showSlide();
});


showSlide();

setInterval(function(){
    if(!slidePlay)return
        nextSlide()
        showSlide()
},2000);

// End javaScript to the slide

// render products

let products =[ {
    name:'Headphone Soni',
    image1:'img/soni-withe.png',
    image2:'img/soni-white1.png',
    old_price:'300',
    curr_price:'200'
},
{
    name:'JBL TUNE 760',
    image1:'img/JBL_TUNE 760.png',
    image2:'img/JBL_TUNE_760.png',
    old_price:'400',
    curr_price:'300'
},
{
    name:'Beats Auriculares <br> sem fios True Wireless',
    image1:'img/MV702.png',
    image2:'img/MV702_AV3.png',
    old_price:'200',
    curr_price:'149,95'
}

]


let product_list = document.querySelector('#latest-products');
let best_product_list= document.querySelector('#best-products');
    products.forEach(function(e){
    let prod= `<div class="col-3 col-md-6 col-sm-12">
    <div class="product-card">
        <div class="product-card-img">
            <img src="${e.image1}" alt="">
            <img src="${e.image2}" alt="">
        </div>
        <div class="product-card-info">
            <div class="product-btn">
                <button class="btn-flat btn-hover btn-shop-now">Shop Now</button>
                <button class="btn-flat btn-hover btn-cart-add">
                    <i class='bx bxs-cart-add'></i>
                </button>
                <button class="btn-flat btn-hover btn-cart-add">
                    <i class='bx bxs-heart'></i>
                </button>
            </div>
            <div class="product-card-name">
                ${e.name}
            </div>
            <div class="product-card-price">
                <span><del>${e.old_price}</del></span>
                <span class="curr-price">${e.curr_price}</span>
            </div>
        </div>
    </div>`

    product_list.insertAdjacentHTML("beforeend",prod)
    best_product_list.insertAdjacentHTML("afterbegin",prod)

})

