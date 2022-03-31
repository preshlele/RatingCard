const btn = document.querySelector('.btn-primary');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content1');

btn.addEventListener('click',onSubmit);

function onSubmit(){
    content1.classList.add('hide');
    content2.classList.remove('hide');
}
