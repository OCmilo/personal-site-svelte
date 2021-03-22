module.exports = {
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  ...require("@snowpack/app-scripts-preact/jest.config.js")(),
};
