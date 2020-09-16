const keys = ["job", "city", "cityRadius", "updateTime"];

/**
 * Verify config file and returns a bool
 * @param {object} config object
 */
function checkConfig(config) {
  if (typeof config !== "object") return false;
  if (Object.keys(config).length !== 4) return false;
  keys.forEach((key) => {
    if (!config[key]) return false;
    if (config[key] === "") return false;
  });
  return true;
}

module.exports = { checkConfig };
