const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  const result = this.films.map(film => film.title);
  return result;
};

Cinema.prototype.getFilmByTitle = function (filmTitle) {
  const result = this.films.find(film => film.title === filmTitle);
  return result;
};

Cinema.prototype.filterByGenre = function (genre) {
  const result = this.films.filter(film => film.genre === genre)
  return result;
};

Cinema.prototype.checkForYear = function (year) {
  const result = this.films.some(film => film.year === year);
  return result;
};

Cinema.prototype.checkForNoYear = function (year) {
  const result = this.films.some(film => film.year === year);
  return result;
};

Cinema.prototype.checkLengthsOver = function (time) {
  const result = this.films.every(film => film.length > time);
  return result;
}




module.exports = Cinema;
