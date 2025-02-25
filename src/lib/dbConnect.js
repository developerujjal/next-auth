import { MongoClient, ServerApiVersion } from "mongodb";

let db;
let client;

const connectDB = async () => {
    if (db) {
        return db;
    }
    try {
        const uri = process.env.MONGODB_URI;
        client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        await client.connect();
        db = client.db('nextAuth');
        return db;
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
}

export default connectDB;


// let db;

// const connectDB = async () => {
//     if (db) {
//         return db;
//     };
//     try {

//         const uri = process.env.MONGODB_URI;
//         const client = new MongoClient(uri, {
//             serverApi: {
//                 version: ServerApiVersion.v1,
//                 strict: true,
//                 deprecationErrors: true,
//             }
//         });

//         db = client.db('nextAuth');
//         return db;

//     } catch (error) {
//         console.error("Failed to connect to MongoDB:", error);
//     }
// }

// export default connectDB;


/* 
const dbConnect = async (collectionName) => {
    try {
        const uri = process.env.MONGODB_URI;
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

 */