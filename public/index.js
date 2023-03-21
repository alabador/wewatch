const select = document.querySelector('#showType')
const form = document.querySelector('#search')
const showName = document.querySelector('#showName')

select.addEventListener('change', function(e){
    let newRoute = e.target.value;
    let show = showName.value;
    form.action = newRoute + show;
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    window.location.href = form.action;
})