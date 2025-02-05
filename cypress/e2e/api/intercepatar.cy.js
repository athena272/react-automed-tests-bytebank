// cy.intercept('/api/usuarios').as('solicitacaoDeUsuarios')
// cy.visit('/minha-pagina')
// cy.wait('@solicitacaoDeUsuarios').then((interception) => {
//     expect(interception.response.statusCode).to.equal(200)
//     expect(interception.response.body.length).to.equal(10)
// })