import * as admin from "firebase-admin";
const dotenv = require("dotenv");
dotenv.config();

let serviceAccount: any = process.env.CRED;

const NAMESPACE = "DB_CONFIG";

console.log(process.env.serviceAccount);

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(JSON.stringify(serviceAccount))),
});

const db = admin.firestore();

const getFromCollection = () => db;

export { getFromCollection };
