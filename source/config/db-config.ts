import * as admin from "firebase-admin";
import logging from "./logging";
const serviceAccount = require("../../service_account.json");

const NAMESPACE = "DB_CONFIG";

console.log(process.env["TEST_ENV"]);
console.log(process.env.TEST_ENV);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const getFromCollection = () => db;

export { getFromCollection };
