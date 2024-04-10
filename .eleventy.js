const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("LLL yyyy");
    });

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addWatchTarget("src/assets");

    return {
        dir: {
            input: "src",
            output: "_site"
        },
    };
};