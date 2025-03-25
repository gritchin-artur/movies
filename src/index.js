import data from './data.js';
import { getMovies } from './utils/isFilter.js';

// const input = document.getElementById('input-movie');
// const movieList = document.getElementById('movie-list');

const dom = {
    input: document.getElementById('input-movie'),
    movieList : document.getElementById('movie-list')
}

let timeoutId;
let outputData = data.movies;

// render elements
function renderMovies(movies) {
    dom.movieList.innerHTML = '';

    if (movies.length === 0) {
        dom.movieList.innerHTML = '<li>Sorry this movie not found</li>';
    }

    movies.forEach((el) => {
        const movie = document.createElement('li');
        movie.classList.add('movie-element');

        const imgMovie = document.createElement('img');
        imgMovie.classList.add('movie-img');
        imgMovie.src = el.img;
        imgMovie.alt = `movie-${el.name}`;

        const nameMovie = document.createElement('h3');
        nameMovie.classList.add('movie-name');
        nameMovie.innerHTML = el.name;

        movie.append(imgMovie, nameMovie);
        dom.movieList.appendChild(movie);
    });
}

// tracks changes in input
dom.input.addEventListener('input', (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        outputData = getMovies(e.target.value, data.movies);
        renderMovies(outputData);
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    renderMovies(data.movies);
});
