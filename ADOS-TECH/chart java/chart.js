const  bag =document.querySelector('#noo');
const  modal_container2 = document.querySelector('#ble')
const bag2 = document.querySelector('#qee')

bag.addEventListener('click', () => {
    modal_container2.classList.add('show')
});
bag2.addEventListener('click' , () => {
    modal_container2.remove('show')
});