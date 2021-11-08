import * as admin from "firebase-admin";
const dotenv = require("dotenv");
dotenv.config();

let serviceAccount: any = process.env.CRED;

const NAMESPACE = "DB_CONFIG";

console.log("serviceAccount ==== ",serviceAccount);
console.log("env 3333 ==== ",process.env.CRED);

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(serviceAccount)),
});

const db = admin.firestore();

const getFromCollection = () => db;

export { getFromCollection };
