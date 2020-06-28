const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

// Ensure that content directory exist at the site-level
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState();
  const primaryGalleryPath =
    themeOptions.primaryGalleryPath || "content/primaryGallery";
  const secondaryGalleryPath =
    themeOptions.secondaryGalleryPath || "content/secondaryGallery";
  const primaryDir = path.join(program.directory, primaryGalleryPath);
  const secondaryDir = path.join(program.directory, secondaryGalleryPath);
  if (!fs.existsSync(primaryDir)) {
    reporter.info(`Creating the "${primaryDir}" directory`);
    mkdirp.sync(primaryDir);
  }
  if (!fs.existsSync(secondaryDir)) {
    reporter.info(`Creating the "${secondaryDir}" directory`);
    mkdirp.sync(secondaryDir);
  }
};

// exports.createPages = ({ actions }, themeOptions) => {
//   const { createPage } = actions;
//   const { basePath } = themeOptions;

//   createPage({
//     path: basePath || "/",
//     component: path.resolve(`${__dirname}/src/pages/index.tsx`),
//   });
// };
