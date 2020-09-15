const path = require("path");

const { checkConfig } = require("./configuration/checkConfig");
let config = require(path.join(__dirname, "..", "config.json"));

/**
 * Return config object after checkups and editing if necessary
 */
function confirmConfig() {
  const configStatus = checkConfig(config);
  if (!configStatus) return console.error("Éditez le fichier config.json !");
  return config;
}

module.exports = { confirmConfig };
