/* * init_data.js
 * * Função para popular o localStorage com dados iniciais (simulação de um banco de dados).
 * Verifica se a chave 'publicacoes' existe antes de sobrescrever, mantendo os dados
 * cadastrados pelo usuário.
 */
function initializeData() {
    // A chave 'publicacoes' é a mesma usada em gestao.html e publica.html
    if (!localStorage.getItem('publicacoes')) {
        const initialPublications = [
            {
                name: "Portaria nº 520 - Lotação e Remanejamento",
                type: "portarias",
                subject: "remanejamento",
                fileName: "Portaria_520_2025.pdf"
            },
            {
                name: "Lei nº 840/2011 - Regime Jurídico",
                type: "leis",
                subject: "provimento",
                fileName: "Lei_840_2011.pdf"
            },
            {
                name: "Resolução sobre Jornada de Trabalho",
                type: "resolucoes",
                subject: "jornada",
                fileName: "Resolucao_Jornada.pdf"
            },
            {
                name: "Portaria de Modulação de Pessoal 2025",
                type: "portarias",
                subject: "modulacao",
                fileName: "Portaria_Modulacao_2025.pdf"
            },
            {
                name: "Portaria de Afastamento e Licenças",
                type: "portarias",
                subject: "licenca",
                fileName: "Portaria_Licencas.pdf"
            }
        ];
        
        localStorage.setItem('publicacoes', JSON.stringify(initialPublications));
    }
}

// Executa a função imediatamente
initializeData();