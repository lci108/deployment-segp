const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
app.use(bodyParser.json());

app.post('/predict', (req, res) => {
    const pythonProcess = spawn('python', ['scripts/userInput.py', JSON.stringify(req.body)]);

    let pythonData = '';
    pythonProcess.stdout.on('data', (data) => {
        pythonData += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            console.error(`Python script exited with code ${code}`);
            return res.status(500).send('Internal Server Error');
        }
        try {
            const result = JSON.parse(pythonData);
            res.json(result);
        } catch (error) {
            console.error('Failed to parse Python script output:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
