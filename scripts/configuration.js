const path = require("path");

const { checkConfig } = require("./configuration/checkConfig");
let config = require(path.join(__dirname, "..", "config.json"));

/**
 * returns Configuration Object after some checks and editing if necessary
 */
function confirmConfig() {
  const configStatus = checkConfig(config);
  if (!configStatus) return console.error("Éditez le fichier config.json !");
}

module.exports = { confirmConfig };
