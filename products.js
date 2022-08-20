// render products

let products =[ {
    name:' Auscultadores Beats Studio3',
    image1:'img/beats-black.png',
    image2:'img/beats-black1.png',
    old_price:'300',
    curr_price:'200'
},
{
    name:' True Wireless Beats',
    image1:'img/MJ503.png',
    image2:'img/MJ503_Av2.png',
    old_price:'400',
    curr_price:'300'
},
{
    name:'Auscultadores Beats Studio3',
    image1:'img/beats-red1.png',
    image2:'img/beats-red2.png',
    old_price:'400',
    curr_price:'200'
},
{
    name:'Auscultadores Beats Studio3',
    image1:'img/Beats-Gray1.png',
    image2:'img/beats-Gray.png',
    old_price:'400',
    curr_price:'200'
},
{
    name:'Auscultadores JBL TUNE 760',
    image1:'img/JBL-pink.png',
    image2:'img/JBl-white.png',
    old_price:'349,95',
    curr_price:'300,00'
},
{
    name:'Auscultadores JBL TUNE 760',
    image1:'img/JBL_TUNE 760.png',
    image2:'img/JBl_TUNE_760.png',
    old_price:'349,95',
    curr_price:'300,00'
},
{
    name:'AIRPOS MAX',
    image1:'img/AIRPODS_MAX-blue.png',
    image2:'img/AIRPODS-MAX.png',
    old_price:'349,95',
    curr_price:'300,00'
},
{
    name:'AIRPOS MAX',
    image1:'img/AIRPODS-MAX-black.png',
    image2:'img/AIRPODS-MAX-white.png',
    old_price:'349,95',
    curr_price:'300,00'
},
{
    name:'Soni True Wireless',
    image1:'img/True-soni1.png',
    image2:'img/true soni.png',
    old_price:'349,95',
    curr_price:'300,00'
}
]

let products_list = document.querySelector('#products');

function execute (products) {
    products.forEach(function(e){
        let prod = `<div class="col-4 col-md-6 col-sm-12">
        <div class="product-card">
            <div class="product-card-img">
                <img src="${e.image1}" alt="">
                <img src="${e.image2}" alt="">
            </div>
            <div class="product-card-info">
                <div class="product-btn">
                    <a href="project1-products-detail.html" class="btn-flat btn-hover btn-shop-now">Shop Now</a>
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
    
        products_list.insertAdjacentHTML("beforeend",prod)
        
});

}

execute(products);

let filter_col = document.querySelector('#filter-col');

document.querySelector('#filter-toggle').addEventListener('click',function(){
    filter_col.classList.toggle('active')
});
document.querySelector('#filter-close').addEventListener('click',function(){
    filter_col.classList.toggle('active')
});