import express from "express"
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("WTF?");
})

const PORT = process.env.PORT;

const handleListen = () => {
  console.log(`The server is running on the port ${PORT}`)
}

app.listen(PORT, handleListen);
