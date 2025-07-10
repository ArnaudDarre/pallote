import { cpSync, readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { resolve } from "path";

const root = resolve(".");
const dist = resolve("dist");

// Read and sanitize package.json
const pkg = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));

delete pkg.scripts;
delete pkg.devDependencies;
delete pkg.publishConfig;
delete pkg.packageManager;
delete pkg.private;

// Explicitly include all dist files
pkg.files = readdirSync(dist).filter(
  (file) => !file.startsWith(".") && file !== "node_modules"
);

pkg.private = false;

writeFileSync(resolve(dist, "package.json"), JSON.stringify(pkg, null, 2));

// Copy README and LICENSE if they exist
["README.md", "LICENSE"].forEach((file) => {
  const from = resolve(root, file);
  const to = resolve(dist, file);
  if (existsSync(from)) cpSync(from, to, { force: true });
});
