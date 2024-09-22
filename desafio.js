/**
 * Classe CreateHero
 * 
 * Esta classe é responsável por criar um herói com nome, idade e tipo (Mago, Guerreiro, Monge, Ninja, etc.).
 * Ela também contém um método que retorna uma mensagem de ataque baseada no tipo de herói.
 */

class CreateHero {
    /**
     * Construtor da classe CreateHero
     * 
     * @param {string} nameHero - O nome do herói.
     * @param {number} ageHero - A idade do herói.
     * @param {string} typeHero - O tipo do herói (ex: Mago, Guerreiro, Monge, Ninja).
     */
    constructor(nameHero, ageHero, typeHero) {
        this.nameHero = nameHero;  // Nome do herói
        this.age = ageHero;        // Idade do herói
        this.type = typeHero;      // Tipo do herói
    }

    /**
     * Método checkHero
     * 
     * Verifica o tipo de herói e retorna uma mensagem de ataque específica para o tipo.
     * 
     * @returns {string} Mensagem de ataque baseada no tipo do herói.
     */
    checkHero() {
        if (this.type === "Mago") {
            return `O ${this.type} atacou usando magia!`;
        } else if (this.type === "Guerreiro") {
            return `O ${this.type} atacou usando espada!`;
        } else if (this.type === "Monge") {
            return `O ${this.type} atacou usando artes marciais!`;
        } else if (this.type === "Ninja") {
            return `O ${this.type} atacou usando shuriken!`;
        } else {
            return `Tipo de herói não reconhecido!`;
        }
    }
}

// Exemplo de uso da classe CreateHero:

// Criando um herói do tipo "Guerreiro"
let hero001 = new CreateHero("Zabarah", 22, "Guerreiro");

// Chamando o método checkHero para obter a mensagem de ataque do herói
let finishMessage = hero001.checkHero();

// Exibindo a mensagem no console
console.log(finishMessage);



