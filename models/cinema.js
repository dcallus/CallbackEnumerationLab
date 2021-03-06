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

Cinema.prototype.getTotalRuntime = function () {
  const result = this.films.reduce((runningTotal, film) => runningTotal + film.length, 0);
  return result;
};

Cinema.prototype.filmsByProperty = function (property, value) {
  const result = this.films.filter(film => film[property] === value);
  return result;
};

Cinema.prototype.filmsByMultipleProperties = function (firstProperty, firstValue, secondProperty, secondValue) {
  const firstResult = this.filmsByProperty(firstProperty, firstValue);
  const secondResult = firstResult.filter(film => film[secondProperty] === secondValue);
  return secondResult;
};

module.exports = Cinema;