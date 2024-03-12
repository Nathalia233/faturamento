const fs = require('fs');

function calcularEstatisticasFaturamento(faturamentoDiario) {

    faturamentoDiario = faturamentoDiario.filter(valor => valor > 0);


    const menorValor = Math.min(...faturamentoDiario);
    const maiorValor = Math.max(...faturamentoDiario);
    const mediaMensal = faturamentoDiario.reduce((total, valor) => total + valor, 0) / faturamentoDiario.length;
    const diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;

    return { menorValor, maiorValor, diasAcimaDaMedia };
}

function main() {
    
    const dadosFaturamento = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));
    const faturamentoDiario = dadosFaturamento.faturamento_diario;

    
    const { menorValor, maiorValor, diasAcimaDaMedia } = calcularEstatisticasFaturamento(faturamentoDiario);

    
    console.log(`Menor valor de faturamento: ${menorValor}`);
    console.log(`Maior valor de faturamento: ${maiorValor}`);
    console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);
}

main();
