const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up multer storage and file handling
const storage = multer.diskStorage({
    destination: './uploads/', // Directory to save uploaded files
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.use(express.static('public')); // Serve static files like CSS, icons, etc.

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    res.status(200).send('File uploaded successfully.');
});

app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000');
});
