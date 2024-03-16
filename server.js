const express = require('express');
const app = express();

// Define the port we will listen on
const PORT = 3000;

// Endpoint that accepts two parameters: `param1` and `param2`
app.get('/process-inputs', (req, res) => {
    // Extract parameters from query string
    const param1 = req.query.param1;
    const param2 = req.query.param2;

    // You can add additional logic here to process the parameters as needed

    // Check if both parameters are provided
    if (param1 && param2) {
        // Success response
        res.status(200).json({
            status: 'success',
            message: 'Parameters received and processed successfully.',
            data: {
                param1: param1,
                param2: param2
            }
        });
    } else {
        // Error response for missing parameters
        res.status(400).json({
            status: 'error',
            message: 'Missing one or both input parameters.'
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});