const path = require("path");

const resolvePath = (pathToResolve) => {
  return path.resolve(__dirname, pathToResolve);
};

require("esbuild")
  .build({
    bundle: true,
    sourcemap: true,
    entryPoints: [resolvePath("../src/index.ts")],
    minify: true,
    outdir: resolvePath("../build"),
    platform: "node",
    target: "node14",
  })
  .then(() => console.log("Build concluded"))
  .catch(() => process.exit(1));
