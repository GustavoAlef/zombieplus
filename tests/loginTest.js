module.exports = {
    'login com sucesso': (browser) => {
        browser
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 2000)
        .setValue('input[name=email]', 'karol@email.com')
        .setValue('input[name=password]', "asd")
        .click('.login-button')
        .waitForElementVisible('.user .info span', 2000)
        .assert.containsText('.user .info span', 'karol')
        .end();
    }
}