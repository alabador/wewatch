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
            window.location.reload()
            
        }
        if(e.target.classList.contains('fa-plus') || e.target.classList.contains('home-add')) {
            increaseEpisodeCount(show)

        }
        if(e.target.classList.contains('fa-minus') || e.target.classList.contains('home-minus')) {
            decreaseEpisodeCount(show)
        }
    })
})

async function deleteFromWatchlist(show) {
    const id = show.dataset.id;
    
    try {
        const response = await fetch('/home', {
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

async function increaseEpisodeCount(show) {
    const id = show.dataset.id;
    
    try {
        const response = await fetch('/home/increase', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'showId': id,
            })
        })
        const data = await response.json()
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}
async function decreaseEpisodeCount(show) {
    const id = show.dataset.id;
    
    try {
        const response = await fetch('/home/decrease', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'showId': id,
            })
        })
        const data = await response.json()
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}