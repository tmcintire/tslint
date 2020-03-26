module.exports = {
  defaultSeverity: "error",
  extends: ["tslint:recommended", "prettier"],
  rules: {
    semicolon: [false, "never"],
    "one-line": false,
    "max-line-length": [true, 160],
    "trailing-comma": [false],
    quotemark: [false],
    indent: [true, "spaces", 2],
    "object-literal-key-quotes": false,
    "interface-name": false,
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "no-consecutive-blank-lines": false,
    "prefer-template": true,
    "jsdoc-format": false,
    "no-var-requires": false,
    eofline: false,
    "member-access": false,
    "member-ordering": false,
    "max-classes-per-file": false,
    "only-arrow-functions": false,
    "no-string-literal": false
  }
};
