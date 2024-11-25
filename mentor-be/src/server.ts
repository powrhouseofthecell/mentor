import path from "path";
import fs from "fs";
import https from "https";
import http from "http";

import app from "./app";
import create_db_con from "./utils/db/create_con";

const DB_URI = process.env.DB_URI?.replace(
  "<db_password>",
  process.env.DB_PASSWORD as string,
) as string;

const HTTP_PORT = process.env.HTTP_PORT;
const HTTPS_PORT = process.env.HTTPS_PORT;
const SSL_CERT_PATH = process.env.SSL_CERT_PATH!;

const key_file_path = path.join(SSL_CERT_PATH, "key.pem");
const cert_file_path = path.join(SSL_CERT_PATH, "cert.pem");

const http_server = http.createServer(app);

const https_server = https.createServer(
  {
    key: fs.readFileSync(key_file_path),
    cert: fs.readFileSync(cert_file_path),
  },
  app,
);

create_db_con(DB_URI)
  .then(() => {
    console.log("✔︎ DB Connected");
    http_server.listen(HTTP_PORT, () => {
      console.log(`🚀 http server started on port ${HTTP_PORT}`);
    });
    https_server.listen(HTTPS_PORT, () => {
      console.log(`🔐 https server started on port ${HTTPS_PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB not connected", err);
  });
