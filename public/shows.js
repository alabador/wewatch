const shows = document.querySelectorAll('.show');

shows.forEach(show => {
    show.addEventListener('click', function(e) {
        if(e.target.classList.contains('add-show')) {
            const id = e.target.parentNode.dataset.id;
            // const name = e.target.
            addToWatchlist();
        }
    })
})

//to do: take a look at leon class 45, start at 3:19:00

//rough summary
//1. get text or data-id from parent
//2. fetch and send in body json stringify (look in vid)

async function addToWatchlist() {
    
}