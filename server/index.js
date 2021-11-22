require("dotenv").config();
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan";
import bodyParser from "body-parser"
import compression from "compression"

const app = express()

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(compression())
app.use(express.json())
app.use(morgan("dev"));
app.use(helmet())
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000",
}))

app.listen(5000, () => console.log("Сервер запущен"))