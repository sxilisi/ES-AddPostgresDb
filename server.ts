import express from "express";
import "express-async-errors";
import morgan from "morgan";
import {
  getAll,
  getOneById,
  create,
  updateOneById,
  deleteOneById,
} from "./controllers/planets.js";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOneById);
app.post("/api/planets", create);
app.put("/api/planets/:id", updateOneById);
app.delete("/api/planets/:id", deleteOneById);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello My Dev!" });
});

app.listen(port, () => {
  console.log(`Express app listening on http://localhost:${port}`);
});
