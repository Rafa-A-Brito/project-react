// JS Assíncrono
// Await e Async
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://react-main:g3knMOHM873q9g8V@cluster0.uvdy8pl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("repSpotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
