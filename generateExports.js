// generateExports.js
const fs = require("fs");
const path = require("path");

const COMPONENTS_DIR = path.join(process.cwd(), "components");

function generateExports() {
  // Read all directories in the components folder
  const componentDirs = fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Generate export statements
  const exportStatements = componentDirs
    .map((dir) => `export * from './${dir}';`)
    .join("\n");

  // Add a header comment
  const fileContent = `// This file is auto-generated. Do not edit it manually.
// Run 'node generateExports.js' to regenerate.

${exportStatements}
`;

  // Write to index.ts
  fs.writeFileSync(path.join(COMPONENTS_DIR, "index.ts"), fileContent, "utf-8");

  console.log("Successfully generated component exports!");
  console.log("The following components were exported:");
  componentDirs.forEach((dir) => console.log(`- ${dir}`));
}

// Run the generation
generateExports();
