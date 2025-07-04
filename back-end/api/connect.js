// JS Assíncrono
// Await e Async
import { MongoClient } from "mongodb";
import { MONGODB_URI } from "./config.js";

const client = new MongoClient(MONGODB_URI);

export const db = client.db("repSpotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
