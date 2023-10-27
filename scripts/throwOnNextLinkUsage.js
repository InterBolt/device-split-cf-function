const path = require("path");
const fs = require("fs");
const { getAllFiles } = require("./_shared.js");

const pathToRepo = path.resolve(__dirname, "..");

const nextLinkUses = [];

const doCheck = (filePath) => {
  fs.readFileSync(filePath, "utf8")
    .split("\n")
    .some((line) => {
      const found = line.includes("from ") && line.includes("next/link");
      if (found) {
        nextLinkUses.push(filePath.replace(pathToRepo, "."));
      }
      return found;
    });
};

const isCodeFile = (file) => /\.(js|jsx|ts|tsx)$/.test(file);

getAllFiles(path.resolve(pathToRepo, "app"), isCodeFile).forEach(doCheck);
getAllFiles(path.resolve(pathToRepo, "src"), isCodeFile).forEach(doCheck);

if (nextLinkUses.length > 1) {
  throw new Error(
    `next/link should only be imported in a single wrapper file to prevent prefetch behavior. Found in files:\n${nextLinkUses.join(
      "\n"
    )}`
  );
}
