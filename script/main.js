const Navegador = require('./global');
const prompt = require('prompt-sync')();
const navegador = new Navegador();

exibirMenu = () => {
  console.log('\n====== MENU ======');
  console.log('1. Navegar para nova página');
  console.log('2. Voltar');
  console.log('3. Avançar');
  console.log('4. Exibir estado atual');
  console.log('5. Sair');
}

let opcao;
do {
  exibirMenu();
  opcao = prompt('Escolha uma opção: ');

  switch(opcao) {
    case '1':
      const pagina = prompt('Digite a URL da página: ');
      navegador.navigateTo(pagina);
      break;
    case '2':
      navegador.goBack();
      break;
    case '3':
      navegador.goForward();
      break;
    case '4':
      console.log('\n=== ESTADO ATUAL ===');
      console.log('Página atual:', navegador.getPage());
      console.log('Histórico:', navegador.getHistory());
      console.log('Avanço:', navegador.getForwardStack());
      break;
    case '5':
      console.log('Saindo...');
      break;
    default:
      console.log('Opção inválida!');
  }
} while (opcao !== '5');