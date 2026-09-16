import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [candidatures, setCandidatures] = useState([]);
  const [entreprise, setEntreprise] = useState('');
  const [poste, setPoste] = useState('');

  const chargerCandidatures = () => {
    fetch('http://localhost:3000/candidatures')
      .then(res => res.json())
      .then(data => setCandidatures(data));
  };

  useEffect(() => {
    chargerCandidatures();
  }, []);

  const ajouterCandidature = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/candidatures', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ entreprise, poste, date_envoi: new Date().toISOString().split('T')[0] })
    }).then(() => {
      setEntreprise('');
      setPoste('');
      chargerCandidatures();
    });
  };

  const changerStatut = (id, nouveauStatut) => {
    fetch(`http://localhost:3000/candidatures/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ statut: nouveauStatut })
    }).then(() => chargerCandidatures());
  };

  const supprimerCandidature = (id) => {
    fetch(`http://localhost:3000/candidatures/${id}`, {
      method: 'DELETE'
    }).then(() => chargerCandidatures());
  };

  return (
    <div>
      <h1>Suivi de candidatures</h1>

      <form onSubmit={ajouterCandidature}>
        <input
          type="text"
          placeholder="Entreprise"
          value={entreprise}
          onChange={(e) => setEntreprise(e.target.value)}
        />
        <input
          type="text"
          placeholder="Poste"
          value={poste}
          onChange={(e) => setPoste(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {candidatures.map(c => (
          <li key={c.id}>
            {c.entreprise} — {c.poste} ({c.statut})
            <select
              value={c.statut}
              onChange={(e) => changerStatut(c.id, e.target.value)}
            >
              <option value="envoyée">Envoyée</option>
              <option value="entretien">Entretien</option>
              <option value="refus">Refus</option>
              <option value="acceptée">Acceptée</option>
            </select>
            <button onClick={() => supprimerCandidature(c.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;