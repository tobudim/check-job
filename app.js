const { confirmConfig } = require("./scripts/configuration");

const urls = {
  monster: "https://monster.fr",
  indeed: "https://indeed.fr",
  poleEmploi: "https://pole-emploi.fr",
};

const config = confirmConfig();
