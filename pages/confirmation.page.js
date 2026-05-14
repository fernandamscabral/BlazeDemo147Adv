// export default class ConfirmationPage { // padrão para type = module
class ConfirmationPage {                   // padrão para type = commonjs

    constructor(page) {
        this.page = page
        this.url = '/confirmation\.php/'
        this.mensagem = 'h1'
        this.preco = 'Amount'
    }
}

module.exports = ConfirmationPage // padrão quando type = commonjs
