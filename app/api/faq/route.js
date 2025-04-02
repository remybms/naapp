import clientPromise from '../../../lib/mongodb';

export async function POST(request) {
  try {
    const client = await clientPromise;
    const database = client.db('naapp');
    const collection = database.collection('questions');

    const data = await request.json();

    await collection.insertOne(data);

    return new Response(JSON.stringify({ success: true, data: data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {

    return new Response(JSON.stringify({ success: false, error: "Erreur lors de l'envoi" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
