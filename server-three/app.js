const express = require('express');
const app = express();
const PORT = 3333;

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hi!!! This message is from server three'
    })
});

app.listen(PORT, () => {
    console.log(`Server one running on port ${PORT}`);
})