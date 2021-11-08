import * as admin from "firebase-admin";
const dotenv = require("dotenv");
dotenv.config();

let serviceAccount: any = process.env.CRED;

const NAMESPACE = "DB_CONFIG";

console.log("env ==== ",process.env.serviceAccount);
console.log("env 3333 ==== ",process.env.CRED);
console.log("env 3333 ==== ",process.env.PROD);

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.CRED)),
});

const db = admin.firestore();

const getFromCollection = () => db;

export { getFromCollection };
