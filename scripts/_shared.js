const fs = require("fs");
const path = require("path");

const getAllFiles = (
  dir,
  onFilter = (_file, _filepath) => true,
  accumFiles = []
) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      getAllFiles(filepath, onFilter, accumFiles);
    } else if (stats.isFile() && onFilter(file, filepath)) {
      accumFiles.push(filepath);
    }
  });

  return accumFiles;
};

module.exports = {
  getAllFiles,
};
