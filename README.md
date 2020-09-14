# check-job

![CI Script](https://github.com/tobudim/check-job/workflows/CI%20Script/badge.svg)

Surveille les offres d'emploi de `Monster`, `Indeed` et `Pôle Emploi` et notifie si de nouvelles sont créées ! 😎

# Configuration

Renseignez `/config.json` suivant vos préférences.

```json
{
  "job": "Développeur front-end",
  "city": "Bordeaux",
  "city-radius": "40",
  "update-time": "15"
}
```

`city-radius` concerne la zone autour de la ville renseignée à inclure dans les recherches, en kilomètres.

`update-time` concerne la durée à attendre avant de mettre à jour les recherches, en minutes.

# Fonctionnement

L'application visite alors `Monster`, `Indeed` et `Pôle Emploi` en recherchant pour vous un job. 👌

Chaque `update-time`, l'application visite à nouveau ces sites, si de nouvelles offres apparaissent elle vous notifie.

Puisque la recherche est sauvegardée localement dans `/jobs/` : vous pouvez stoper le processus et le reprendre quand vous voulez !

# Scripts

## npm run start

Lance l'application.

Si le fichier de configuration n'a pas été édité, des questions vous sont posées directement depuis le terminal et le fichier est modifié en conséquence pour les prochaines recherches.
