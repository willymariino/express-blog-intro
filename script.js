const express = require("express") // vado ad importare express
const app = express() // invoco express
const port = 3000 // indico quale porta voglio utilizzare

app.listen(port, () => {
    console.log("sono un server attivo sulla porta:" + " " + port)


})

