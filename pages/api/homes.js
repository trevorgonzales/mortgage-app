import { connectToDatabase } from "../../lib/mongodb";

export default async(req, res) => {
    const { db } = await connectToDatabase();
    const data = await db.collection('homesdb').find({}).toArray();
    res.json(data);
}