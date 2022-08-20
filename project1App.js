document.querySelectorAll('.dropdown > a').forEach(function(e){
    e.addEventListener('click',function(event){
        event.preventDefault();
    });
});

document.querySelectorAll('.mega-dropdown > a').forEach(function(e){
    e.addEventListener('click',function(event){
        event.preventDefault();
    });
});
document.querySelector('#mb-menu-toggle').addEventListener('click',function(){
    document.querySelector('#header-wrapper').classList.add('active');
});
document.querySelector('#mb-menu-close').addEventListener('click',function(){
    document.querySelector('#header-wrapper').classList.remove('active');
});