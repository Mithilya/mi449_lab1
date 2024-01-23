module.exports = eleventyConfig => {
    // Passthrough Copy
    eleventyConfig.addPassthroughCopy('src/assets/fonts/');
  
    return {
      dir: {
        input: 'src',
        output: 'dist',
        includes: '_includes',
        layouts: '_layouts'
      }
    };
  };