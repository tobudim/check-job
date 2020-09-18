const fetch = require("node-fetch");

const { getLast50JobsFromMonster } = require("./monster/last50");

/**
 * Async - Search new jobs in a given website
 * @param {string} website to call for new jobs
 * @param {object} config { job, city, cityRadius }
 */
function getJobsFrom(website, config) {
  const job = encodeURIComponent(config.job);
  const city = encodeURIComponent(config.city);
  const cityRadius = encodeURIComponent(config.cityRadius);
  const urls = {
    monster: "http://monster.fr/emploi/recherche/",
    indeed: "https://www.indeed.fr/emplois",
    poleEmploi: "https://candidat.pole-emploi.fr/offres/recherche",
  };

  switch (website) {
    case "monster":
      return fetch(
        `${urls.monster}?cy=fr&q=${job}&rad=${cityRadius}&where=${city}&tm=7`
      )
        .then((res) => res.text())
        .then((body) => getLast50JobsFromMonster(body))
        .catch((error) => {
          throw new Error(error);
        });
      break;
    case "indeed":
      fetch(`${urls.indeed}?q=${job}&sort=date&l=${city}&radius=${cityRadius}`)
        .then((res) => res.text())
        .then((body) => body)
        .catch((error) => {
          throw new Error(error);
        });
      break;
    case "poleEmploi":
      // TODO city needs to be a postal code / API PE ?
      fetch(
        `${urls.poleEmploi}?lieux=${city}&motsCles=${job}&offresPartenaires=true&rayon=${cityRadius}&tri=1`
      )
        .then((res) => res.text())
        .then((body) => body)
        .catch((error) => {
          throw new Error(error);
        });
      break;
    default:
      throw new Error("Could not understand which website to call");
  }
}

/**
 * Promise - Get and return new jobs from Monster, Indeed & Pole Emploi
 * @param {object} config { job, city, cityRadius }
 */
async function getJobsFromWebsites(config) {
  const monster = await getJobsFrom("monster", config);
  // const jobs = {
  //   monster: await getJobsFrom("monster", config),
  //   indeed: await getJobsFrom("indeed", config),
  //   poleEmploi: await getJobsFrom("poleEmploi", config),
  // };
}

module.exports = { getJobsFromWebsites };
