/**
 * Return current time in "23:00:59" format
 */
function getCurrentTime() {
  return new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0];
}

module.exports = { getCurrentTime };
