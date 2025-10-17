module.exports = function(eleventyConfig) {
    
    // 1. CHAMA a função para copiar a pasta 'css' (PassThrough Copy)
    // Isso garante que o CSS seja copiado para a pasta de saída.
    eleventyConfig.addPassthroughCopy("css"); 
    
    // 2. CHAMA a função para copiar a pasta 'img'
    eleventyConfig.addPassthroughCopy("img"); 

    return {
        // 3. RETORNA a configuração de diretórios (dir)
        dir: {
            // Define a pasta de saída como "_site" (o padrão)
            output: "_site" 
        }
    };
};
