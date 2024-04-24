const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
app.use(bodyParser.json());

app.post('/predict', (req, res) => {
    // const python3cli = spawn('apt-get', ['install', 'python3-pip', '-y']);
    // python3cli.on('close', (code) => {
    //     if (code !== 0) {
    //         console.error(`Failed to install python3-pip. Exit code: ${code}`);
    //         return res.status(500).send('Internal Server Error');
    //     }
    //     console.log('python3-pip installed successfully');
        
    //     const pythonProcess = spawn('python3', ['scripts/userInput.py', JSON.stringify(req.body)]);
    //     console.log('Python script started');
        
    //     let pythonData = '';
    //     pythonProcess.stdout.on('data', (data) => {
    //         pythonData += data.toString();
    //     });
    //     console.log(JSON.stringify(req.body));
    //     pythonProcess.stderr.on('data', (data) => {
    //         console.error(`stderr: ${data}`);
    //     });
    //     pythonProcess.on('close', (code) => {
    //         if (code !== 0) {
    //             console.error(`Python script exited with code ${code}`);
    //             return res.status(500).send('Internal Server Error');
    //         }
    //         try {
    //             const result = JSON.parse(pythonData);
    //             res.json(result);
    //         } catch (error) {
    //             console.error('Failed to parse Python script output:', error);
    //             res.status(500).send('Internal Server Error');
    //         }
    //     });
    // });
    const jsonData = JSON.stringify(req.body);
    console.log('Stringified JSON data:', jsonData);
    const pythonProcess = spawn('python', ['scripts/userInput.py', JSON.stringify(req.body)]);
    console.log('Python script started');
    
    let pythonData = '';
    pythonProcess.stdout.on('data', (data) => {
        pythonData += data.toString();
    });
    console.log(JSON.stringify(req.body));

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
