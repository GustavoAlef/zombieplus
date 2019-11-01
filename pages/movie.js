var createActions = {
  insertCast: function(cast) {
    const browser = this    
    
    cast.forEach(function(actor) {
      browser
        .setValue("@inputCast", actor)
        .api.sendkeys(browser.api.sendkeys('TAB'))
    })

    return this
  },

  uploadCover: function(filename){
      let imagePath = require('path').resolve(__dirname, '../images/' + filename)

      return this.setValue('@imgCover', imagePath)
  }
};

module.exports = {
    commands: [createActions],
    elements: {
    btnAdd: ".movie-add",
    formMovie: "#movie-form",
    inputTitle: "input[name=title]",
    inputStatus: "input[placeholder=Status]",
    inputYear: "input[name=year]",
    inputRelease: "input[name=release_date]",
    inputCast: ".cast",
    inputSinopse: "textarea[name=overview]",
    imgCover: '#upcover',
    btnCadastrar: "#create-movie",
    listFilm: "table tbody"
  }
};
