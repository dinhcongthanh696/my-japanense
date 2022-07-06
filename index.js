const express = require('express');
const app = express();
const PORT_3000 = 3000;
app.get("/" , (request , response) => {
    const a = 1;
    const b = 3;

    const c = a + b;
    response.send("Hello World");
})

app.listen(PORT_3000 , () => {console.log(`Listening on port ${PORT_3000}`)});