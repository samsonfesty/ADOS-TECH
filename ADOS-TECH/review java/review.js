const review = document.querySelector('#rev');
const order = document.querySelector('#ord');
const  chk = document.querySelector('#princess')

review.addEventListener('click', () => {
    order.classList.add('show')
    chk.classList.remove('remove')
});