const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  const result = this.films.map(film => film.title);
  return result;
};

Cinema.prototype.getFilmByTitle = function (filmIn) {
  const result = this.films.find(film => film.title === filmIn);
  return result;
};







module.exports = Cinema;
