const request = require('supertest');
const app = require('./server');

describe('API Candidatures', () => {
  let idCree;

  test('GET /candidatures renvoie une liste', async () => {
    const res = await request(app).get('/candidatures');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /candidatures crée une candidature', async () => {
    const res = await request(app)
      .post('/candidatures')
      .send({
        entreprise: 'TestCorp',
        poste: 'Développeur test',
        date_envoi: '2026-01-01',
        notes: 'Test unitaire'
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
    idCree = res.body.id;
  });

  test('PATCH /candidatures/:id modifie le statut', async () => {
    const res = await request(app)
      .patch(`/candidatures/${idCree}`)
      .send({ statut: 'entretien' });
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test('DELETE /candidatures/:id supprime la candidature', async () => {
    const res = await request(app).delete(`/candidatures/${idCree}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});