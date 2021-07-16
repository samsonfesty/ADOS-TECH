const open1 = document.querySelector('#kate');
const open2 = document.querySelector('#gift');
const open3 = document.querySelector('#presh');
const open4 = document.querySelector('#tessy');
const open5 = document.querySelector('#debby');
const  modal_container = document.querySelector("#mercy");
const close = document.querySelector("#close");

open1.addEventListener('click', () =>{
    modal_container.classList.add('show')
});
open2.addEventListener('click', () =>{
    modal_container.classList.add('show')
});
open3.addEventListener('click', () =>{
    modal_container.classList.add('show')
});
open4.addEventListener('click', () =>{
    modal_container.classList.add('show')
});
open5.addEventListener('click', () =>{
    modal_container.classList.add('show')
});
close.addEventListener('click', () =>{
    modal_container.classList.remove('show')
});