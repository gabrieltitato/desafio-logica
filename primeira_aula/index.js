const nomeHeroi = "Gabriel";
const expHeroi = Math.floor(Math.random() * 11000);
let nivel;

switch (true) {
    case (expHeroi < 1000):
        nivel = "Ferro";
        break;
    case (expHeroi >= 1001 && expHeroi <= 2000):
        nivel = "Bronze";
        break;
    case (expHeroi >= 2001 && expHeroi <= 5000):
        nivel = "Prata";
        break;
    case (expHeroi >= 5001 && expHeroi <= 7000):
        nivel = "Ouro";
        break;
    case (expHeroi >= 7001 && expHeroi <= 8000):
        nivel = "Platina";
        break;
    case (expHeroi >= 8001 && expHeroi <= 9000):
        nivel = "Ascendente";
        break;
    case (expHeroi >= 9001 && expHeroi <= 10000):
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";

}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`);