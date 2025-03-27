/**
 * Classe que representa um nó da pilha
 */
class Node {
    constructor(value) {
        this.value = value;  // Valor armazenado no nó
        this.next = null;    // Referência para o próximo nó
    }

    // Retorna o próximo nó
    getNext() {
        return this.next;
    }

    // Define o próximo nó
    setNext(next) {
        this.next = next;
    }

    // Retorna o valor do nó
    getValue() {
        return this.value;
    }

    // Representação em string do nó
    toString() {
        return this.value.toString();
    }
}

module.exports = Node;