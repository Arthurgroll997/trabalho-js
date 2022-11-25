import express from "express";
import path from "path";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => console.log("Ouvindo..."));