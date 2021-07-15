
let btn = document.querySelector('#cb');
let btn1= document.querySelector('#cb1');
let btn2= document.querySelector('#cb2');
let modalWindow = document.querySelector('.modal-window');
let close = document.querySelector('.modal-close')

btn.addEventListener('click', function(){
    modalWindow.classList.add('window-active')
})

close.addEventListener('click', function(){
    modalWindow.classList.remove('window-active')
})

btn1.addEventListener('click', function(){
    modalWindow.classList.add('window-active')
})

btn2.addEventListener('click', function(){
    modalWindow.classList.add('window-active')
})














