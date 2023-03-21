const select = document.querySelector('#showType')
const form = document.querySelector('#search')
const showName = document.querySelector('#showName')

let show, newRoute;
let formAction = '';

showName.addEventListener('change', function(e){
    show = showName.value;
})

select.addEventListener('change', function(e){
    newRoute = e.target.value;
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    formAction = newRoute + show
    window.location.href = formAction;
})