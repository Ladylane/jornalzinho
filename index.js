import express from "express";
import winston from "winston";
import RedeRouter from "./routes/rede.route.js";
import UserRouter from "./routes/user.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "desafio-final-node.log" }),
  ],
  format: combine(
    label({ label: "desafio-final-node" }),
    timestamp(),
    myFormat
  ),
});

const app = express();
app.use(express.json());
app.use("/redes", RedeRouter);
app.use("/user", UserRouter);
app.use(express.static('public'));

app.use((err, req, res, next) => {
  logger.error(`{req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(3000, () => console.log("@@@@@ API STARTED @@@@@"));

export default app;
