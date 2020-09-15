const fs = require("fs");
const path = require("path");

const jobsDir = path.join(__dirname, "..", "jobs");

/**
 * Return jobs saved in /jobs according to config job definition
 * @param {object} config object { job, city, cityRadius }
 */
function getSavedJobs({ job, city, cityRadius }) {
  const dir = fs.readdirSync(jobsDir);

  return dir.map((file) => {
    const data = JSON.parse(fs.readFileSync(path.join(jobsDir, file)));
    const fileName = path.basename(file, ".json");
    let savedJobs = {
      website: fileName,
      jobs: null,
    };

    if (Object.keys(data).length === 0) return savedJobs;
    if (!data.jobs) throw new Error(`${file} is not empty but has no data`);
    savedJobs.jobs = data.jobs;
    return savedJobs;
  });
}

module.exports = { getSavedJobs };
