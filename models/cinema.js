const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function (filmList) {
  const result = filmList.map(film => film.title);
  return result;
};

Cinema.prototype.getFilmByTitle = function (filmIn) {
  const result = this.films.find(film => film === filmIn);
  return result;
}



module.exports = Cinema;
