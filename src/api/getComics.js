export default async function getComics(currentComics = null) {
    let currentComicsPrefix = ''

    if (currentComics) currentComicsPrefix = `/${currentComics}`

    const URL_CURRENT_COMICS_JSON = `https://xkcd.com${currentComicsPrefix}/info.0.json`
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(URL_CURRENT_COMICS_JSON)}`)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    } else {
        const jsonResponse = await response.json()
        return JSON.parse(jsonResponse.contents)
    }
}