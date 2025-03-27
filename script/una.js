const Node = require('./node');

/**
 * Implementação de uma pilha (LIFO) usando nós encadeados
 */
class Una {
    constructor() {
        this.top = null;          // Referência para o topo da pilha
        this.totalElements = 0;   // Contador de elementos
    }

    /**
     * Adiciona um valor no topo da pilha
     * @param {any} value Valor a ser armazenado
     */
    push(value) {
        const newNode = new Node(value);
        newNode.setNext(this.top); // O novo nó aponta para o antigo topo
        this.top = newNode;       // Atualiza o topo
        this.totalElements++;
    }

    /**
     * Remove e retorna o elemento do topo
     * @returns {Node} Nó removido
     */
    pop() {
        if (this.top === null) {
            throw new Error("Pilha vazia");
        }
        const aux = this.top;
        this.top = this.top.getNext(); // Atualiza o topo
        this.totalElements--;
        return aux;
    }

    /**
     * Retorna representação em string da pilha
     * @returns {string}
     */
    toString() {
        if (this.totalElements === 0) return "[ ]";

        let currentNode = this.top;
        let builder = "[";

        for (let i = 0; i < this.totalElements; i++) {
            builder += currentNode.getValue();
            if (i < this.totalElements - 1) builder += ", ";
            currentNode = currentNode.getNext();
        }

        return builder + "]";
    }
}

module.exports = Una;