module.exports = eleventyConfig => {
    // Passthrough Copy
    eleventyConfig.addPassthroughCopy("Images")
    eleventyConfig.addPassthroughCopy ("style")
}