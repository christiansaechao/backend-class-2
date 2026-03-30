import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.status(200).send("coming from the backend");
})

app.listen(3000, () => console.log("Server running on port: 3000"));
