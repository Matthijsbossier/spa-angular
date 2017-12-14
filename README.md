# SPA individueel project Matthijs Bossier, studentnr: 2065234, klas A

Individueel project gebaseerd op de Receptencasus uit de Angular-lessen. Om de Angular-kant te laten functioneren, wordt een extern serverbestand gebruikt, zie [spa-server](https://github.com/Matthijsbossier/spa-server) 

Op deze Single Page Application kun je artiesten toevoegen, bewerken en verwijderen. Dit wordt opgeslagen in een Mongo Database. Het document 'artist' heeft een subdocument 'albums', die ook weer een subdocument bevat, 'songs'. 

Een user kan artiesten en/of albums liken. Als users gemeenschappelijke artiesten/albums leuk vinden, laat de applicatie een lijst met mogelijke nieuwe vrienden zien.

Users komen uit een Neo4j-database. In [spa-server](https://github.com/Matthijsbossier/spa-server) is in ieder geval een API met routes voor Neo4j aangemaakt.

## Opstarten

SPA-angular:

- npm install
- ng serve

SPA-server: 
- npm install
- npm start

Lokaal draait de angular-kant van de applicatie op `http://localhost:4200/`.

Lokaal draait de server-kant (api)
`http://localhost:3000/`  

