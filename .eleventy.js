module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images");

  // Create filtered collection for homepage (excludes leveled versions)
  eleventyConfig.addCollection("mainStories", function(collectionApi) {
    return collectionApi.getFilteredByTag("stories").filter(item => {
      return !item.data.level; // Exclude items with a level field
    });
  });
};