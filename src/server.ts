import * as express from 'express';
import * as fileUpload from 'express-fileupload';
import * as path from 'path';
import * as http from 'http';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '')));
app.use(fileUpload({
    createParentPath: true
}));

app.get('/api/download', (req, res) => {
    console.log(req.query);
    const filePath = './uploads/' + req.query.filename;
    res.download(filePath);
    // TODO: Delete file after sending it
});

// This endpoint is obsolete, keeping it here for reference while the other endpoints are being ironed out
app.post('/api/upload', (req, res) => {
    console.log(req.files.file);
    if (!req.files) {
        return res.status(400).send({ error: 'No file was received' });
    }
    let file = req.files.file;
    file.mv('./uploads/' + file.name, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
    });
    return res.status(200).send('File uploaded!');
});

app.post('/api/convert', (req, res) => {
    console.log(req.files.file);
    let file = req.files.file;
    // TODO: Convert before storing the file in uploads
    file.mv('./uploads/' + file.name, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
    });
    return res.status(200).send('File converted');
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