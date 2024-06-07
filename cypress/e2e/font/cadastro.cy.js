// import { faker } from '@faker-js/faker'
import { faker } from '@faker-js/faker/locale/pt_BR'

describe('Teste de cadastro de usuário', () => {
    const usuario = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        senha: faker.internet.password(),
    };

    beforeEach(() => {
        cy.viewport(1360, 1000)
    })

    it('Deve permitir cadastrar um usuário com sucesso', () => {
        //parte da interface
        cy.visit('/');

        cy.getByData('botao-cadastro').click();
        cy.getByData('nome-input').type(usuario.nome);
        cy.getByData('email-input').type(usuario.email);
        cy.getByData('senha-input').type(usuario.senha);
        cy.getByData('checkbox-input').check();
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-sucesso')
            .should('exist')
            .contains('Usuário cadastrado com sucesso!');

        //parte da api
        cy.request('GET', 'http://localhost:8000/users').then((resposta) => {
            expect(resposta.body).to.have.lengthOf.at.least(1);
            expect(resposta.body[resposta.body.length - 1]).to.deep.include(usuario);
        });
    })
})