export default {
  compilerOptions: {
    module: "esnext",
    declaration: true,
    target: "es6",
    sourceMap: true,
    moduleResolution: "node",
    outDir: "dist",
    strict: true,
    importHelpers: true,
    noImplicitAny: false,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    experimentalDecorators: true,
    jsx: "preserve",
    types: ["node", "mocha", "chai"],
    lib: ["esnext", "dom", "dom.iterable", "scripthost"]
  }
};
