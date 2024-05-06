module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images");

  // Treat files with no extension as HTML
  eleventyConfig.addPassthroughCopy("*.html"); // Copy HTML files as-is
  eleventyConfig.addPassthroughCopy("*.css"); // Copy CSS files as-is
  eleventyConfig.setTemplateFormats(["md", "html", "css"]);
  eleventyConfig.addPassthroughCopy({"*": "."});
};