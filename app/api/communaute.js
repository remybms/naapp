import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const database = client.db('naapp');
      const collection = database.collection('formulaires');

      const data = req.body;

      await collection.insertOne(data);

      res.status(201).json(true);

    } catch (error) {
      console.error('Erreur lors de l\'opération MongoDB :', error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }
}
