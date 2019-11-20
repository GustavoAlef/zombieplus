import pg from '../../lib/db'
let movieData = {}

module.exports = {
    '@tags': ['jenkins'],
    before: function(browser){
        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Milla', 'Ali', 'Ian', 'Shawn'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missao é desligar a rainha vermelha.'
        }

        //remove o titulo la do banco
        pg.removeByTitle(movieData.title)

        let pglogin = browser.page.login()
        pglogin.with("karol@email.com", 'asd')
    },

    'quando eu faço o cadastro do filme': function(browser){
        let pgmovie = browser.page.movie();

        pgmovie
        .click('@btnAdd')
        .waitForElementVisible('@formMovie', 10000)
        .setValue('@inputTitle', movieData.title)
        .click('@inputStatus')
        .useXpath()
        .waitForElementVisible(`//li//span[contains(text(), 
        "${movieData.status}")]`)
        .click(`//li//span[contains(text(), "${movieData.status}")]`)
        .useCss()
        .setValue('@inputYear', movieData.year)
        .setValue('@inputRelease', movieData.releaseDate)
        .insertCast(movieData.cast)
        .setValue('@inputSinopse', movieData.plot)
        .uploadCover(movieData.cover)
        .click('@btnCadastrar')
        .pause(2000)
    },

    'então eu devo ver o filme na lista': function(browser){
        let pgmovie = browser.page.movie(); 
        pgmovie
            .waitForElementVisible('@listFilm', 10000)
            .assert.containsText('@listFilm', movieData.title)
    }
}