// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import App from '../paginas/Principal/App';
// import { buscaTransacoes } from './transacoes';

// describe('Requisições para API', () => {
//     test('Deve retornar uma lista de transações', async () => {
//         const transacoes = await buscaTransacoes();
//         expect(transacoes).toHaveLength(3);

//         render(<App />, { wrapper: BrowserRouter });
//         const transacao = await screen.findAllByText('Novembro');
//         transacao.forEach(transacao => expect(transacao).toBeInTheDocument())
//     });
// });
import api from './api';
import { salvaTransacao } from './transacoes';
import { buscaTransacoes } from './transacoes';

jest.mock('./api');

const mockTransacao = [
    {
        id: 1,
        transacao: 'Depósito',
        valor: '100',
        data: '21/11/2022',
        mes: 'Novembro',
    },
];

const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno,
            });
        }, 200);
    });
};

const mockRequisicaoErro = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject();
        }, 200);
    });
};

describe('Requisições para API', () => {
    test('Deve retornar uma lista de transações', async () => {
        api.get.mockImplementation(() => mockRequisicao(mockTransacao));

        const transacoes = await buscaTransacoes();
        expect(transacoes).toEqual(mockTransacao);
        expect(api.get).toHaveBeenCalledWith('/transacoes');
    });

    test('Deve retornar uma lista vazia quando a requisição falhar', async () => {
        api.get.mockImplementation(() => mockRequisicaoErro());

        const transacoes = await buscaTransacoes();

        expect(transacoes).toEqual([]);
        expect(api.get).toHaveBeenCalledWith('/transacoes');
    });
});

const mockRequisicaoPost = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: 201,
            });
        }, 200);
    });
};

const mockRequisicaoPostErro = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject();
        }, 200);
    });
};


describe('Requisições para API POST', () => {
    test('Deve retornar um status 201 - (Created) após uma requisição POST', async () => {
        api.post.mockImplementation(() => mockRequisicaoPost());
        const status = await salvaTransacao(mockTransacao[0]);
        expect(status).toBe(201);
        expect(api.post).toHaveBeenCalledWith('/transacoes', mockTransacao[0]);
    });

    test('Deve retornar um saldo de 1000 quando a requisição POST falhar', async () => {
        api.post.mockImplementation(() => mockRequisicaoPostErro());
        const status = await salvaTransacao(mockTransacao[0]);
        expect(status).toBe('Erro na requisição');
        expect(api.post).toHaveBeenCalledWith('/transacoes', mockTransacao[0]);
    });
});
