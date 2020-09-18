const ora = require("ora");

const { confirmConfig } = require("./scripts/configuration");
const { getCurrentTime } = require("./lib/time");
const { getSavedJobs, checkNewJobs } = require("./scripts/jobs");

const config = confirmConfig();
const savedJobs = getSavedJobs(config);

function checkJobs() {
  const loadingSpinner = ora("Configuration vérifiée").start();
  loadingSpinner.color = "blue";
  loadingSpinner.text = "Recherche des nouvelles offres d'emploi...";

  checkNewJobs(config, savedJobs)
    .then((newJobs) => {
      // const time = getCurrentTime();
      // if (!newJobs)
      //   return loadingSpinner.info(
      //     `${time} : Sites vérifiés, rien de nouveau. 😊`
      //   );
      // loadingSpinner.succeed("De nouvelles offres sont disponibles ! 😎");
      // return notifyUser(newJobs);
    })
    .catch((error) => loadingSpinner.fail(new Error(error)));
}

checkJobs();
setInterval(checkJobs, config.updateTime * 10000);
