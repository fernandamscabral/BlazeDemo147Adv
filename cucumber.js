module.exports = {
    default: {
        parallel: 1, // faz um de cada vez
        format: ['html:reports/cucumber-report.html'],
        require: [
            'steps/**/*.steps.js',
            'support/**/*.js'
        ],
        paths: ['features/**/*.feature']
    },
    paralelo: { // para rodar na nuvem, por exemplo
        parallel: 4, // tenta executar os 4 de uma vez
        format: ['html:reports/cucumber-report.html'],
        require: [
            'steps/**/*.steps.js',
            'support/**/*.js'
        ],
        paths: ['features/**/*.feature']
    }
}
 