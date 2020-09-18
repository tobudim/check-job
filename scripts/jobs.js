const fs = require("fs");
const path = require("path");

const { getJobsFromWebsites } = require("./jobs/getNewJobs");

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

/**
 * Promise - Check online for new jobs and return result as object
 * @param {obejct} config {job, city, cityRadius, updateTime}
 * @param {object} savedJobs { website: string, jobs: object | null }
 */
async function checkNewJobs(config, savedJobs) {
  return new Promise(async (resolve, reject) => {
    try {
      const newJobs = await getJobsFromWebsites(config);
      // return resolve(newJobs);
    } catch (error) {
      return reject(error);
    }
  });
}

module.exports = { getSavedJobs, checkNewJobs };
