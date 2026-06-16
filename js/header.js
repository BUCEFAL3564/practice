const search_menu = document.getElementById('search-menu');
const search_window = document.getElementById('search-window');

document.getElementById('iconsearch').addEventListener('click', function(){
    console.log('qfqfqf');

    search_window.style.display = 'flex';
    search_menu.style.display = 'none';
}   
)

document.getElementById('icon-exit').addEventListener('click',function(){
    
    search_menu.style.display = 'flex';
    search_window.style.display = 'none';
})