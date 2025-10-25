module.exports = function(eleventyConfig) {
    
    // Configura a cópia dos assets (CSS e Imagens)
    eleventyConfig.addPassthroughCopy("css"); 
    eleventyConfig.addPassthroughCopy("img"); 

    return {
        // Usa a pasta de saída padrão (_site)
        dir: {
            output: "_site" 
        }
    };
};