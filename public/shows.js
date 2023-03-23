const shows = document.querySelectorAll('.show');

shows.forEach(show => {
    show.addEventListener('click', function(e) {
        if(e.target.classList.contains('add-show')) {
            addToWatchlist(show);
            window.location.href = window.location.origin;
        }
    })
})

//to do: take a look at leon class 45, start at 3:19:00


async function addToWatchlist(show) {
    const id = show.dataset.id;
    const name = show.querySelector('.show-title').textContent
    const imageUrl = show.querySelector('.show-image').src
    const showStatus = show.querySelector('.show-status').textContent
    const episodeCount = show.querySelector('.show-episodes-number').textContent
    
    try {
        const response = await fetch('/anime/add', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'showId': id,
                'showName': name,
                'showImage' : imageUrl,
                'showStatus' : showStatus,
                'showEpisodes' : episodeCount,
            })
        })
        const data = await response.json()
        
    } catch (error) {
        console.log(error)
    }

}