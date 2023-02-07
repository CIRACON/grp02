const express = require('express');
const dao = require("./data_access");
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.get("/people", async (req, res) => {
  await dao.call('findAllPeople', {}, (result) => {
      console.log(result)
      if (result.people !== undefined) {
          res.send(result.people);

      } else {
          res.statusCode = 404;
          console.warn(res)
          res.end();
      }
  });
});
app.get("/planets", async (req, res) => {
  await dao.call('findAllPlanets', {}, (result) => {
      console.log(result)
      if (result.planets !== undefined) {
          res.send(result.planets);

      } else {
          res.statusCode = 404;
          res.end();
      }
  });
});

app.get("/films", async (req, res) => {
    await dao.call('findAllFilms', {}, (result) => {
        console.log(result)
        if (result.films !== undefined) {
            res.send(result.films);
  
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
  });



 app.get("/people/:pk", async(req, res) => {
  await dao.call('findPerson', { pk: req.params.pk}, (result) => {
      if (result.person !== undefined) {
          res.send(result.person);
      } else {
          res.statusCode = 404;
          res.end();
      }
  });
});
app.get("/planets/:pk", async (req, res) => {
  await dao.call('findPlanet', { pk: req.params.pk}, (result) => {
      if (result.planet !== undefined) {
          res.send(result.planet);
      } else {
          res.statusCode = 404;
          res.end();
      }
  });
});

app.get("/films/:pk", async (req, res) => {
    await dao.call('findFilm', { pk: req.params.pk}, (result) => {
        if (result.film !== undefined) {
            res.send(result.film);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
  });
  




let port = 4000;
console.log('service opening on port: ' + port)
app.listen(port);
