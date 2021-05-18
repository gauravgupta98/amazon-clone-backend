import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (_request, response) =>
  response.status(200).send("Server is up and running!")
);

app.listen(PORT, () => {
  return console.log(`server is listening on ${PORT}`);
});
