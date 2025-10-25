module.exports = function(eleventyConfig) {

    // 1. Configura a cópia direta de arquivos/pastas para a pasta de saída (docs)
    // Isso garante que o CSS, imagens e outros ativos funcionem.
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");
    
    // Se você tiver uma pasta raiz chamada "docs", pode precisar disso.
    // eleventyConfig.addPassthroughCopy("docs"); 

    // 2. Configura os diretórios de entrada e saída
    return {
        // Usa Liquid como motor de template padrão
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid",
        dir: {
            input: ".",         // A raiz do projeto é a entrada
            includes: "_includes", // Pasta de inclusões (se você a tiver)
            data: "_data",      // Pasta de dados (onde está o animais.json)
            // IMPORTANTE: Define a pasta de saída para 'docs'
            output: "docs" 
        }
    };
};