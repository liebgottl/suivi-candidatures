const express = require('express');
const cors = require('cors');
const db = require('./database.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// GET - Lister toutes les candidatures
app.get('/candidatures', (req, res) => {
  const candidatures = db.prepare('SELECT * FROM candidatures').all();
  res.json(candidatures);
});

// POST - Ajouter une candidature
app.post('/candidatures', (req, res) => {
  const { entreprise, poste, date_envoi, notes } = req.body;
  const stmt = db.prepare(
    'INSERT INTO candidatures (entreprise, poste, date_envoi, notes) VALUES (?, ?, ?, ?)'
  );
  const result = stmt.run(entreprise, poste, date_envoi, notes);
  res.json({ id: result.lastInsertRowid });
});

// PATCH - Modifier le statut d'une candidature
app.patch('/candidatures/:id', (req, res) => {
  const { statut } = req.body;
  db.prepare('UPDATE candidatures SET statut = ? WHERE id = ?').run(statut, req.params.id);
  res.json({ success: true });
});

// DELETE - Supprimer une candidature
app.delete('/candidatures/:id', (req, res) => {
  db.prepare('DELETE FROM candidatures WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}

module.exports = app;

