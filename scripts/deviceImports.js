const fs = require("fs");
const path = require("path");
const shared = require("./_shared.js");

const POSSIBLE_DEVICES = ["mobile", "desktop", "responsive"];
const DEVICE = process.env.DEVICE || "responsive";

if (!POSSIBLE_DEVICES.includes(DEVICE)) {
  throw new Error(`Device ${DEVICE} not supported.`);
}

const getAllLayoutPageFiles = () =>
  shared.getAllFiles(
    path.resolve(__dirname, "../app"),
    (file) => file.startsWith("layout.") || file.startsWith("page.")
  );

const modifyPageAndLayoutFileLines = (onModifyLine = (line) => line) => {
  const files = getAllLayoutPageFiles();
  files.forEach((file) => {
    const contents = fs.readFileSync(file, "utf8");
    const lines = contents.split("\n");
    const newLines = lines.map(onModifyLine);
    const modifiedContents = newLines.join("\n");
    fs.writeFileSync(file, modifiedContents, "utf8");
  });
};

const isDeviceImport = (line) => {
  return line.includes("from ") && line.includes("/devices/");
};

modifyPageAndLayoutFileLines((line) => {
  if (isDeviceImport(line)) {
    line = line.replace(/\/devices\/\w+/, `/devices/${DEVICE}`);
  }
  return line;
});

console.log(`swapped device imports to "${DEVICE}"`);
