require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Import de la route de contact
const contactRoute = require('./routes/contact');

// Utilisation de la route API
app.use('/api', contactRoute);

// Sert les fichiers statiques de React
app.use(express.static(path.resolve(__dirname, '../Client/build')));

// Gère toutes les autres routes en renvoyant l'index.html de React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Client/build', 'index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Définition du port
const PORT = process.env.PORT || 5000;

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
