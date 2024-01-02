let movieInput = document.querySelector('.movie-input')
let addMovieButton = document.querySelector('.options-add-movie-button')
let viewMoviesButton = document.querySelector('.options-view-movies-button')

addMovieButton.addEventListener("click", () => {
    document.querySelector(".view-movies-section").classList.remove("visible-flex")
    document.querySelector(".add-movie-section").classList.add("visible-flex")
})

viewMoviesButton.addEventListener("click", () => {
    document.querySelector(".add-movie-section").classList.remove("visible-flex")
    document.querySelector(".view-movies-section").classList.add("visible-flex")
})

// add tile