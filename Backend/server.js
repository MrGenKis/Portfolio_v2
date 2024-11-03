require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Import de la route de contact
const contactRoute = require('./routes/contact');
app.use('/api', contactRoute);

// Définit le chemin vers le build de React
const buildPath = path.join(__dirname, '../Client/build');
app.use(express.static(buildPath));

// Redirige toutes les autres requêtes vers index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Définition du port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
