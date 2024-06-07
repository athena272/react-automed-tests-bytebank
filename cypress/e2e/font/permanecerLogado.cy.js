describe('Teste de login e sessão', () => {
    it('Login e permanência na sessão', () => {
        cy.visit('/login')
        cy.get('#username').type('usuario')
        cy.get('#password').type('senha')
        cy.get('#login-btn').click()

        cy.session({ name: 'user' }).then((user) => {
            expect(user.username).to.eq('usuario')
            expect(user.token).to.not.be.empty
        })

        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.reload()

        cy.session({ name: 'user' }).then((user) => {
            expect(user).to.be.null
        })
    })
})