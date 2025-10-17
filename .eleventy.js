module.exports = function(eleventyConfig) {
    
    // 1. CHAMA a função para copiar a pasta 'css'
    eleventyConfig.addPassthroughCopy("css"); 
    
    // 2. CHAMA a função para copiar a pasta 'img'
    eleventyConfig.addPassthroughCopy("img"); 

    return {
        // 3. RETORNA um objeto de configuração (dir)
        dir: {
            // Assumindo que você quer voltar para _site por enquanto
            output: "_site" 
        }
    };
};
