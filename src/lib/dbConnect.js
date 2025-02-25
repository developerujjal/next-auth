import { MongoClient, ServerApiVersion } from "mongodb";


const dbConnect = async (collectionName) => {
    try {
        const url = process.env.MONGODB_URI;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        return client.db('nextAuth').collection(collectionName);

    } catch (error) {
        console.log(error);
    }
}


export default dbConnect;




/* 
let db;

const connectDB = async () => {
    try {
        if (db) {
            return db;
        };
        const url = process.env.MONGODB_URI;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        db = client.db('nextAuth');
        return db;

    } catch (error) {

    }
} */