document.querySelectorAll('.product-img-item').forEach(function(e){
   e.addEventListener('click', function(){
        let img = e.querySelector('img').getAttribute('src');
        document.querySelector('#product-img > img').setAttribute('src',img);
   });
})
