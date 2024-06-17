module.exports = {
  rules: {
    // filenames must be lower case, hyphen separated
    'filenames/match-regex': [2, '^[a-z]+[a-z0-9\-\.]*[a-z0-9]+$', true],
    // you can't `require` things which are not dependencies per package.json
    'implicit-dependencies/no-implicit': 2,
    'no-only-tests/no-only-tests': 2,
    'no-param-reassign': 1
  }
}
