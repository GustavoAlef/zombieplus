let movieData = {};
import pg from "../../lib/db";

module.exports = {
  before: function(browser) {
    movieData = {
      title: "Meu namorado é um zumbi",
      status: "Disponível",
      year: 2013,
      releaseDate: "01/05/2013",
      cast: ["Nicolas", "Teresa Palmer", "Tipton", "Rob"],
      cover: "meu-namo-zumbi.jpg",
      plot: "Um filme onde um zumbi se apaixona por uma humana."
    };

    pg.removeByTitle(movieData.title).then(function() {
      pg.insertMovie(movieData);
    });

    let pglogin = browser.page.login();
    pglogin.with("karol@email.com", "asd");
  },

  "quando eu faço a busca pelo titulo": function(browser) {
      let movie = browser.page.movie()

      movie
        .setValue('@inputSearch', movieData.title)
        .click('@searchIcon')
        .pause(2000)
  },

  "entao o titulo buscado deve ser exibido na lista": function(browser) {
      let movie = browser.page.movie()

      movie
        .waitForElementPresent('@tableRow', 10000)
        .expect.elements('@tableRow').count.to.equal(1)
        movie.assert.containsText('@tableRow', movieData.title)
  }
};
