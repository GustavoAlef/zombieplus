var loginActions = {
    with: function (email, psw){
        return this
        .navigate()
        .waitForElementVisible('@formLogin', 2000)
        .setValue('@inputEmail', email)
        .setValue('@inputPass', psw)
        .click('@btnLogin')
    },
    expectAlertDanger: function(texto){
        return this
        .waitForElementVisible('@alertDanger', 2000)
        .assert.containsText('@alertDanger', texto)
    },
    expectAlertInfo: function(texto){
        return this
        .waitForElementVisible('@alertInfo', 2000)
        .assert.containsText('@alertInfo', texto)
    }
}

module.exports = {
    url: 'http://zombie-web:5000/login',
    commands: [loginActions],
    elements:{
        formLogin: '.card-login',
        inputEmail: 'input[name=email]',
        inputPass: 'input[name=password]',
        btnLogin: '.login-button',
        alertDanger: '.alert-danger',
        alertInfo: 'alert-info'
    }
}