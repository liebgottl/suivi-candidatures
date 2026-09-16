const Database = require('better-sqlite3');
const db = new Database('candidatures.db');

// Créer la table si elle n'existe pas déjà
db.exec(`
  CREATE TABLE IF NOT EXISTS candidatures (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    entreprise TEXT NOT NULL,
    poste TEXT NOT NULL,
    date_envoi TEXT,
    statut TEXT DEFAULT 'envoyée',
    notes TEXT
  )
`);

module.exports = db;