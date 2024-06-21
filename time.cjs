const { exec } = require('child_process');

function runCommand() {
    exec('node --env-file=.env index.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o comando: ${error}`);
            return;
        }
        console.log(`Saída do comando: ${stdout}`);
        console.error(`Erros do comando: ${stderr}`);
    });
}

// Executa o comando inicialmente
runCommand();

// Define a função para ser chamada a cada 2 minutos
setInterval(runCommand, 60000);
