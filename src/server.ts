import * as express from 'express';
import * as fileUpload from 'express-fileupload';
import * as path from 'path';
import * as http from 'http';
import * as fs from 'fs';
import * as imagesToPdf from 'images-to-pdf';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '')));
app.use(fileUpload({
    createParentPath: true
}));

app.get('/api/download', (req, res) => {
    if (!req.query.filename) {
        return res.status(400).send({ error: 'filename argument is required' });
    }
    const filePath = './uploads/' + req.query.filename;
    res.download(filePath, () => {
        fs.unlinkSync(filePath);
    });
});

app.post('/api/convert', (req, res) => {
    const file = req.files.file;
    if (!file) {
        return res.status(400).send({ error: 'No file selected' });
    }
    const filePath = './uploads/' + file.name;
    file.mv(filePath, (err) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            imagesToPdf([filePath], './uploads/' + file.name.replace(/\.[^/.]+$/, '') + '.pdf')
                .then(() => {
                    return res.status(200).send('File converted');
                })
                .catch((err) => {
                    return res.status(500).send(err);
                }).finally(() => {
                    fs.unlinkSync(filePath);
                })
        }
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