const urls = {
  monster: "https://monster.fr",
  indeed: "https://indeed.fr",
  poleEmploi: "https://pole-emploi.fr",
};

/**
 * Async - Search new jobs in a given website
 * @param {string} website to call for new jobs
 */
function getJobsFrom(website) {
  switch (website) {
    case "monster":
      console.log("ok");
      break;
    case "indeed":
      console.log("ok");
      break;
    case "poleEmploi":
      console.log("ok");
      break;
    default:
      throw new Error("Could not understand which website to call");
  }
}

/**
 * Promise - Get and return new jobs from Monster, Indeed & Pole Emploi
 * @param {object} config { job, city, cityRadius }
 */
function getJobsFromWebsites(config) {
  const jobs = {
    monster: getJobsFrom("monster"),
    indeed: getJobsFrom("indeed"),
    poleEmploi: getJobsFrom("poleEmploi"),
  };
}

module.exports = { getJobsFromWebsites };
