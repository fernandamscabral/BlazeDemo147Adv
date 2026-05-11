const { Given, When, Then } = require('@cucumber/cucumber')

// import { Given, When, Then, And } from '@cucumber/cucumber'; 
// import HomePage from '../pages/home.page';
// import ReservePage from '../pages/reserve.page';
// import PurchasePage from '../pages/purchase.page';
// import ConfirmationPage from '../pages/confirmation.page';

Given('que estou no site BlazeDemo', function () {
    page.goto(HomePage.url) // abre o navegador neste endereço
    HomePage.verificar_mensagem_boas_vindas() // confirma se aparece a mensagem inicial
});

When('seleciono a origem como {string}', function (origem) {
    HomePage.selecionar_origem(origem)
});

When('seleciono o destino como {string}', function (destino) {
    HomePage.selecionar_destino(destino)
});

// Versão que clica no botão a partir do texto escrito no botão
When('clico no botao {string}', function (texto_botao) {
    HomePage.clicar_find_flights(texto_botao)
});

// Exemplo conforme o cenário simples (sem o texto "Find Flights")
// Se for sempre clicar no botão olhando apenas o seletor
When('clico no botao', function () {
    // Não precisaria ter recebido o parametro, seria só dar instrução para clicar no botão
    HomePage.clicar_find_flights()
});

// Cenário simples - verifica a mensagem de cidades de origem e destino
Then('verifico o texto {string}', function (mensagem_origem_destino) {
    ReservePage.verificar_titulo(mensagem_origem_destino)
});

Then('verifico se a url contem {string}', function (pagina) {
    expect(page).toHaveURL(`/${pagina}\.php/`)
});

When('seleciono o voo {string} da companhia {string}', function (voo, companhia) {
    ReservePage.selecionar_voo(voo, companhia)
});

When('preencho o nome como {string}', function (nome) {
    PurchasePage.preencher_nome(nome)
});

When('seleciono a bandeira do cartao como {string}', function (bandeira) {
    PurchasePage.selecionar_bandeira(bandeira)
});

When('marco a opcao {string}', function (string) {
    // Não estamos usando o parametro que é recebido nesse bloco
    PurchasePage.marcar_lembrete()
});

When('clico no botao {string}', function (string) {
    // Não estamos usando o parametro que é recebido nesse bloco
    PurchasePage.comprar_passagem()
});

Then('se exibe a mensagem de agradecimento {string}', function (string) {
    expect(page.locator(ConfirmationPage.mensagem)).toHaveText('Thank you for your purchase today!')
});

Then('se contem a informacao {string} como {string}', function (quantia, preco) {
    // encontra a linha em que está escrita a quantia / "Amount"
    const linha_preco = page.locator('tr').filter({ has: page.locator('td', { hasText: quantia }) })
    // na linha selecionada, verifica se contém o valor/preco
    expect(linha_preco).toContainText(preco)
});

// Esquema de Cenário - verifica a mensagem contendo as duas cidades que recebe como parametro
Then('verifico o texto Flights from {string} to {string}', function (origem, destino) {
    expect(page.locator(ReservePage.titulo)).toHaveText(`Flights from ${origem} to ${destino}:`)
});
