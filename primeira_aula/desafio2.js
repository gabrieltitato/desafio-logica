const vitorias = 99;
const derrotas = 33;

const { ranking: saldoVitorias, nivel } = rankPvp(vitorias, derrotas);

console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);

function rankPvp(vitorias, derrotas) {
    const ranking = vitorias - derrotas;
    let nivel;

    switch (true) {
        case (ranking < 10):
            nivel = "Ferro";
            break;
        case (ranking >= 11 && ranking <= 20):
            nivel = "Bronze";
            break;
        case (ranking >= 21 && ranking <= 50):
            nivel = "Prata";
            break;
        case (ranking >= 51 && ranking <= 80):
            nivel = "Ouro";
            break;
        case (ranking >= 81 && ranking <= 90):
            nivel = "Diamante";
            break;
        case (ranking >= 91 && ranking <= 100):
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }
    return { ranking, nivel }; // Retornar um objeto
}
