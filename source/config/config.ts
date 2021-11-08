const dotenv = require("dotenv");

dotenv.config();

const SERVER_HOSTNAME = process.env.HOST || "localhost";
const SERVER_PORT = process.env.PORT || 1337;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const config = {
  server: SERVER,
};

export default config;
