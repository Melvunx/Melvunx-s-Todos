const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
import express from "express";
import authRoutes from "./routes/auth.routes";

const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoutes);
// app.use("/api/todo", todoRoutes);
// app.use("/api/notes", notesRoutes);

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port http://localhost:${SERVER_PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.get("/test", async (req, res) => {
//   import client = await pool.connect();

//   try {
//     import result  await client.query("SELECT * FROM account");
//     console.log(result.rows);

//     res.json(result.rows);
//   } catch (error) {
//     console.error("Il y a une erreur ! ", error);
//   } finally {
//     client.release();
//   }

//   res.status(404);
// });
