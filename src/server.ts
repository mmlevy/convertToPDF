import * as express from 'express';
import * as path from 'path';
import * as http from 'http';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '')));

// TODO - Implement api for file conversion
app.post('/api/upload', (req, res) => {
    res.send({
       test: "test success"
    });
});

// Catch all other routes and return to index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running on port:${port}`)
});