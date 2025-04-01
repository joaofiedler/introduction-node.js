// importando o módulo HTTP
const http = require('http');

// configurando as informações do servidor
const hostname = '127.0.0.1'; // IP local
const port = 3000; // Porta para o servidor

// criando o servidor
const meuServidor = http.createServer((req, res) => {
    // configurando o cabeçalho da resposta
    res.statusCode = 200; // Código de sucesso
    res.setHeader('Content-Type', 'text/plain'); // Tipo de conteúdo

    // enviando a resposta
    res.end('bem vindo ao meu servidor Node.js'); // Mensagem enviada ao cliente
});

// iniciando o servidor e escutando na porta e IP especificados
meuServidor.listen(port, hostname, () => {
    console.log(`servidor rodando em http://${hostname}:${port}/`); // Mensagem de sucesso no terminal
});
