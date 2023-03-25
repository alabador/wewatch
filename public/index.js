// Searching for Shows
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

// Deleting Shows from Home

const shows = document.querySelectorAll('.home-show');

shows.forEach(show => {
    show.addEventListener('click', function(e) {
        if(e.target.classList.contains('fa-trash') || e.target.classList.contains('home-delete')) {
            // console.log('test')
            deleteFromWatchlist(show);
            window.location.href = window.location.origin;
        }
    })
})

async function deleteFromWatchlist(show) {
    const id = show.dataset.id;
    
    try {
        const response = await fetch('/', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'showId': id,
            })
        })
        const data = await response.json()
        
    } catch (error) {
        console.log(error)
    }

}