const express = require('express');
const app = express();

// Define the port we will listen on
const PORT = 3000;

// Endpoint that accepts two parameters: `param1` and `param2`
app.get('/process-inputs', (req, res) => {
    // Extract parameters from query string
    const amount = req.query.amount;
    const companyWalletAddress = req.query.companyWalletAddress;
    const userWalletAddress = req.query.userWalletAddress;

    // You can add additional logic here to process the parameters as needed

    // Check if both parameters are provided
    if (amount && companyWalletAddress && userWalletAddress) {
        // Success response
        res.status(200).json({
            status: 'success',
            message: `Claim received and processed successfully for the amount: ${amount}`,
            data: {
                companyWalletAddress: companyWalletAddress,
                userWalletAddress: userWalletAddress,
                amount: amount,
            }
        });
    } else {
        // Error response for missing parameters
        res.status(400).json({
            status: 'error',
            message: 'Missing one or more input parameters.'
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});