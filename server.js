import express from "express"
import path from "path"
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

const indexpath = path.resolve(__dirname + '/src/index.html');

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(indexpath);
})

const PORT = 7860;

const handleListen = () => {
  console.log(`The server is running on the port ${PORT}`)
}

app.listen(PORT, handleListen);
