const fs = require("fs");
const path = require("path");

const reactPkgPath = path.resolve(__dirname, "../packages/pallote-react/package.json");
const cssPkgPath = path.resolve(__dirname, "../packages/pallote-css/package.json");

const reactPkg = JSON.parse(fs.readFileSync(reactPkgPath, "utf8"));
const cssPkg = JSON.parse(fs.readFileSync(cssPkgPath, "utf8"));

const deps = reactPkg.dependencies || {};

let changed = false;

Object.entries(deps).forEach(([dep, version]) => {
  if (version.startsWith("workspace:")) {
    if (dep === "pallote-css") {
      deps[dep] = `^${cssPkg.version}`;
      changed = true;
    }
  }
});

if (changed) {
  fs.writeFileSync(reactPkgPath, JSON.stringify({ ...reactPkg, dependencies: deps }, null, 2));
  console.log(`Replaced workspace deps in pallote-react with real versions.`);
} else {
  console.log("No workspace deps needed replacement.");
}
