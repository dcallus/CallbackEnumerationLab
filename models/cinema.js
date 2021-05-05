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





module.exports = Cinema;
