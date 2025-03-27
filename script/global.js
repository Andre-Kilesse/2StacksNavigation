const Una = require('./una');

class Navegador {
    constructor() {
        this.history = new Una();  // Pilha de histórico (back)
        this.forward = new Una();  // Pilha de avanço (forward)
        this.currentPage = '';     // Página atual
    }

    /**
     * Navega para uma nova página
     * @param {string} page - URL da página
     */
    navigateTo(page) {
        if (this.currentPage !== '') {
            this.history.push(this.currentPage);
        }
        // Reseta a pilha de avanço
        while (this.forward.totalElements > 0) {
            this.forward.pop();
        }
        this.currentPage = page;
    }

    /**
     * Volta para a página anterior
     */
    goBack() {
        if (this.history.totalElements > 0) {
            this.forward.push(this.currentPage);
            this.currentPage = this.history.pop().getValue();
        }
    }

    /**
     * Avança para a próxima página
     */
    goForward() {
        if (this.forward.totalElements > 0) {
            this.history.push(this.currentPage);
            this.currentPage = this.forward.pop().getValue();
        }
    }

    // Getters
    getPage() {
        return this.currentPage;
    }

    getHistory() {
        return this.history.toString();
    }

    getForwardStack() {
        return this.forward.toString();
    }
}

module.exports = Navegador;