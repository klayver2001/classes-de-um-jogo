# CreateHero

Este projeto contém uma classe chamada `CreateHero`, responsável por criar heróis com nome, idade e tipo, além de gerar uma mensagem de ataque baseada no tipo de herói.

## Funcionalidades

- **Criação de Heróis**: A classe permite criar heróis com atributos personalizados.
- **Mensagem de Ataque**: O método `checkHero` retorna uma mensagem de ataque específica para o tipo de herói, seja ele Mago, Guerreiro, Monge ou Ninja.

## Exemplo de Uso

```javascript
// Importar a classe (se for necessário)

// Criando um herói do tipo "Guerreiro"
let hero001 = new CreateHero("Zabarah", 22, "Guerreiro");

// Chamando o método checkHero para obter a mensagem de ataque
let finishMessage = hero001.checkHero();

// Exibindo a mensagem no console
console.log(finishMessage); // Output: O Guerreiro atacou usando espada!
