import cv from '../../assets/file/Currículo.pdf';

export function AboutFunctionality() {
    function handleDownloadCV() {
        const link = document.createElement('a');

        // Define o atributo "download" para o nome do arquivo desejado
        link.download = 'Curriculo.pdf';
    
        // Obtém a URL do arquivo
        link.href = cv;
    
        // Adiciona o link ao documento
        document.body.appendChild(link);
    
        // Aciona o clique no link para iniciar o download
        link.click();
    
        // Remove o link do documento
        document.body.removeChild(link);
    }

    return {
        handleDownloadCV
    }
}