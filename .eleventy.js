module.exports = function(eleventyConfig) {
  // Configuração para a pasta de saída (se você usou 'docs')
  eleventyConfig.dir: {
      output: "docs"
  };

  // 1. Diga ao 11ty para copiar a pasta 'css'
  eleventyConfig.addPassthroughCopy("css"); 
  
  // 2. Diga ao 11ty para copiar a pasta 'img' também (se já não estiver fazendo)
  eleventyConfig.addPassthroughCopy("img"); 

  return {
    // ...
  };
};