const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
const replace = require("replace-in-file");

async function main() {
  const buildDir = fs.mkdtempSync(path.join(shell.tempdir(), "nomad-openapi-ts-build"));

  shell.rm("-r", "src/*");

  shell.pushd(buildDir);
  shell.exec("wget https://raw.githubusercontent.com/hashicorp/nomad-openapi/main/v1/openapi.yaml");
  shell.popd()

  shell.exec(`$(npm bin)/openapi --input ${path.join(buildDir, "openapi.yaml")} --name NomadClient --output src`)

  // Fix broken codegen
  await replace({
    files: "src/models/number.ts",
    from: /export type number = number;/g,
    to: "/* @ts-ignore */\nexport type number = number;"
  })

  shell.rm("-r", buildDir);
}

main();
