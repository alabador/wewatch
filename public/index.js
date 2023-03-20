const select = document.querySelector('#showType')
const form = document.querySelector('#search')

select.addEventListener('change', function(e){
    let newRoute = e.target.value;
    form.action = newRoute;
})