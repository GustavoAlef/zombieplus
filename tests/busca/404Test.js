module.exports = {
  '@tags': ['jenkins'],
  before: function(browser) {
    let pglogin = browser.page.login();
    pglogin.with("karol@email.com", "asd");
  },

  "quando eu busco um titulo nao cadastrado": function(browser) {
    let movie = browser.page.movie();

    movie
      .setValue("@inputSearch", "xXx")
      .click("@searchIcon")
      .pause(1000);
  },

  "entao devo ver uma mensagem de alerta": function(browser) {
    let movie = browser.page.movie();
        movie
            .waitForElementVisible("@alertDanger", 10000)
            .assert.containsText("@alertDanger", 'Puxa! não encontramos nada aqui :(')
  }
};
