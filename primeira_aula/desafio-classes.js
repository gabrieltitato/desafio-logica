class Personagem {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            case "curandeiro":
                ataque = "cajado";
                break;
            default:
                ataque = "soco";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}!`);
    }

    curar(){
        let curar;
        if(this.tipo === "curandeiro"){
            console.log("Cura realizada com sucesso!");
        }
        else {
            console.log("Este personagem não consegue curar!");
        }
    }
}

const personagem1 = new Personagem("Naruto", 16, "ninja");
personagem1.atacar();
personagem1.curar();

const personagem2 = new Personagem("Marcelo Rossi", 47, "curandeiro");
personagem2.atacar();
personagem2.curar();
