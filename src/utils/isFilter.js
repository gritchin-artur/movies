/**
 * Filters element of array
 *
 * @param {string} [searchTerm = ''] - The parameter of filtration
 * @param {object} [data = []] - The data of movies
 * @returns {object} - Returns the filtered object
 */

export function getMovies(searchTerm = '', data = []) {
    const output = data.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return output;
}
