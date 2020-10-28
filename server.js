import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import http from 'http';

dotenv.config();
const app = express();
const { ENVIRONMENT_MODE, PORT } = process.env;

app.use(express.json());
app.use(morgan(ENVIRONMENT_MODE === 'development' ? 'dev' : 'prod'));

app.get('/', (req, res) => {
    res.send('It works!');
});

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server Listeining on ${PORT}`);
});
