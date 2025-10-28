let listaSorteados = [];
let limitadorLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//simplificando a função de alterar o texto no html
//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'Bem vindo ao Jogo!';
//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Insira um número entre 0 e 10';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});}
//agora ao acionar a função, ela substitui automaticamente o texto da tag no html
//essa função também fala o texto em voz alta utilizando a biblioteca responsiva de voz

//essa função salva a mensagem inicial a ser exibida ao iniciar o jogo
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Bem vindo ao jogo!');
    exibirTextoNaTela('p', `Insira um número entre 0 e ${limitadorLista}`);}
//criada a função, basta a execução simples da função
mensagemInicial();

//função para verificar chute do usuário
function verificarChute(){
    //para pegar o valor digitado utiliza o "input" que significa entrada, similar ao "prompt" do js puro, criamos uma variável e usamos a função query para selecionar o "input"
    //para atribuir um valor, utiliza a função ".value", que pega o valor digitado no input 
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou miseravi!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativa);
        limparChute();
        document.getElementById('reiniciar').removeAttribute('disabled');} 
        else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O número secreto é menor!');}
                else {
                    exibirTextoNaTela('p', 'O número secreto é maior!');}
                    tentativas++
                    limparChute();}}

//função para gerar número aleatório e retornar esse valor para servir de parametro na variavel, armazenar em uma lista para não sortear número repetido
function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * limitadorLista + 1);
    let quantidadeSorteados = listaSorteados.length;
    if (quantidadeSorteados == limitadorLista) {
        listaSorteados = [];}
    if (listaSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();}
        else { 
            listaSorteados.push(numeroSorteado);
            return numeroSorteado;}}

//função para apagar número do input
function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';}

//função para reiniciar o jogo
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemInicial();
    limparChute();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');}
