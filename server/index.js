require("dotenv").config();
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan";
import bodyParser from "body-parser"
import compression from "compression"
import UserRoutes from "./routes/user.routes"
import PostRoutes from "./routes/post.routes"
import FileRoutes from "./routes/file.routes"
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
app.use("/api/v1/", UserRoutes)
app.use("/api/v1/", PostRoutes)
app.use("/api/v1/", FileRoutes)
function start() {
  app.listen(5000, () => console.log("Сервер запущен"))
}
start()
