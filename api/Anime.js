const urlBaseAPI = 'https://api.jikan.moe/v4/anime'

//Use url query params and Jikan documentation to add more.

async function searchByName(name) {
    const fName = encodeURIComponent(name.trim())
    const response = await fetch(`${urlBaseAPI}?q=${fName}&limit=10`)
    if(response.status !== 200) {
        throw new Error("cannot fetch data")
    }
    let data = await response.json()
    console.log(data)
    return data;
}

module.exports = {
    searchByName,
}